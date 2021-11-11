import * as common from '../../../plugins/index.js';
import { docs } from '../../docs.js';
import { vscode } from '../../vscode.js';
import * as local from './plugins/index.js';

export const incrementalDom = async (config) => {

    const tasks = [
        common.cache.load,
        common.load,
        common.parse,
        common.validate,
        common.extract,
        common.scss,
        local.style,
        local.markup,
        local.script,
        common.script,
        docs,
        vscode,
        common.cache.save,
    ];

    const instances = await Promise.all(tasks.map((task) => task(config)));

    const next = async (filename) => {

        const context = {
            filename
        };

        await Promise.all(instances.map((instance) => instance.next(context)));

        return context;
    }

    const finish = async () => {
        // TODO
        // await Promise.all(instances.map((instance) => instance.finish()));
    }

    return {
        next,
        finish,
    }
}