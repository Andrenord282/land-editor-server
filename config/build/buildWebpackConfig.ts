import { Configuration as TWebpackConfiguration } from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { IBuildOptions } from "./types";

const buildWebpackConfig = (options: IBuildOptions): TWebpackConfiguration => {
    const { mode, isDev, paths } = options;

    return {
        target: 'node',
        mode,
        entry: paths.entry,
        output: {
            filename: "index.js",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(),
        },
        plugins: buildPlugins(options),
        resolve: buildResolve(options),
    };
};

export { buildWebpackConfig };
