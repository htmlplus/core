import sass from 'sass';

export const style = (config) => {

    const next = (context) => {

        if (context.skip) return;

        if (!context.stylePath) return;

        const options = config.scss || {};

        const { css, stats } = sass.renderSync({
            file: context.stylePath,
            outputStyle: 'compressed',
            ...options,
        });

        context.style = css.toString();

        context.dependencies = stats.includedFiles;
    }

    const finish = () => {

    }

    return {
        next,
        finish,
    }
}