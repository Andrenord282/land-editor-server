import webpack, { WebpackPluginInstance } from "webpack";
import CopyPlugin from "copy-webpack-plugin";
import { IBuildOptions } from "./types";

const buildPlugins = (options: IBuildOptions): WebpackPluginInstance[] => {
    const { paths } = options;

    return [
        new webpack.ProgressPlugin(),
        new CopyPlugin({
            patterns: [
                { from: paths.folderPaths.entry.storage, to: paths.folderPaths.build.storage },
                { from: paths.folderPaths.entry.uploads, to: paths.folderPaths.build.uploads },
            ],
        }),
    ];
};

export { buildPlugins };
