import { Configuration as TWebpackConfiguration } from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";
import { IBuildOptions } from "./types";

const buildWebpackConfig = (options: IBuildOptions): TWebpackConfiguration => {
    const {  mode, isDev, paths } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        module: {
            rules: buildLoaders(),
        },
        plugins: buildPlugins(options),
        resolve: buildResolve(),
    };
};

export { buildWebpackConfig };
