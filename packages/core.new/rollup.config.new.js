import * as ts from 'typescript';
import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import { glob } from 'glob';
import * as CONSTANTS from './transformer/constants';
import * as Case from 'case';
import { compile, preprocess } from 'svelte/compiler';


export default {
  input: glob.sync('./src/components/aspect-ratio/*.tsx'),
  output: {
    format: 'esm',
    dir: 'dist',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      sourceMap: false,
      inlineSources: false,
      transformers: {
        before: [
          (context) => {
            return (source) => {

              if (!source.fileName.endsWith('.tsx')) return source;

              let name;

              const properties = [];

              const visitor = (node) => {

                // remove render method
                if (ts.isMethodDeclaration(node) && node.name.getText() === CONSTANTS.TOKEN_METHOD_RENDER) return;

                // component
                if (
                  ts.isClassDeclaration(node) &&
                  node.decorators.find((decorator) => decorator.expression.expression.getText() === CONSTANTS.TOKEN_DECORATOR_COMPONENT)
                ) {

                  name = node.name.getText();

                  const a = ts.visitEachChild(node, visitor, context);

                  /////////////////////////////
                  const lines = [];
                  const key = Case.kebab(name);
                  const tag = `plus-${key}`;
                  lines.push(`<svelte:options tag="${tag}" />`);
                  lines.push('<script>');
                  // lines.push('import Host from "@virtual/host";');
                  // lines.push('import { toAttributes, toBoolean, toClass, toStyle } from "@virtual/utils";');
                  // lines.push('import { attr, get_current_component, onMount, onDestroy } from "svelte/internal";');
                  // lines.push(`const ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST} = get_current_component();`);
                  // lines.push(`const ${CONSTANTS.TOKEN_THIS} = new ${name}();`);
                  // lines.push(`${CONSTANTS.TOKEN_API_FULL} = {};`);
                  // lines.push(`${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_HOST} = () => ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST};`); // TODO
                  properties.forEach((property) => {

                    let name = property.name.getText();

                    const hasInitializer = property.initializer;

                    const isBoolean = property.type.getText() === 'boolean';

                    if (hasInitializer) {

                      const initializer = property.initializer.getText();

                      lines.push(`export let ${name} = ${initializer};`);
                    }
                    else {

                      lines.push(`export let ${name};`);
                    }

                    const value = isBoolean ? `toBoolean(${name})` : name;

                    lines.push(`$: ${CONSTANTS.TOKEN_THIS}.${name} = ${value};`);
                  });
                  lines.push('</script>');
                  lines.push('html');
                  const content = lines.join('\n');
                  const result = compile(
                    content,
                    {
                      customElement: true,
                      dev: false,
                    }
                  );
                  // console.log(content, result.js.code)
                  /////////////////////////////////////////////////
                  return [
                    // a,
                    ts.factory.createStringLiteral(result.js.code)
                  ]
                }

                // remove component decorator
                if (
                  ts.isDecorator(node) &&
                  ts.isClassDeclaration(node.parent) &&
                  node.expression.expression.getText() === CONSTANTS.TOKEN_DECORATOR_COMPONENT
                ) return;

                // Property
                if (
                  ts.isDecorator(node) &&
                  ts.isPropertyDeclaration(node.parent) &&
                  node.expression.expression.getText() === CONSTANTS.TOKEN_DECORATOR_PROPERTY
                ) {
                  properties.push(node.parent);
                }

                // if (isDecorator && expression.expression.getText() === CONSTANTS.TOKEN_DECORATOR_COMPONENT) return;
                // if (isDecorator && expression.expression.getText() === CONSTANTS.TOKEN_DECORATOR_METHOD) return;

                return ts.visitEachChild(node, visitor, context);
              }

              return ts.visitNode(source, visitor);
            }
          }
        ]
      }
    }),
    // terser()
  ]
};