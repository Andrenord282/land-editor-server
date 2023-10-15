import webpack, { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { IBuildOptions } from "./types";

const buildPlugins = (options: IBuildOptions): WebpackPluginInstance[] => {
    const { paths } = options;

    return [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ];
};

export { buildPlugins };
