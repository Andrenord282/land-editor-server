import path from "path";
import { Configuration as TWebpackConfiguration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildEnv, IBuildPaths } from "./config/build/types";

export default (env: IBuildEnv): TWebpackConfiguration => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, "src", "index.ts"),
        src: path.resolve(__dirname, "src"),
        build: path.resolve(__dirname, "build"),
        folderPaths: {
            entry: {
                storage: path.resolve(__dirname, "storage"),
                uploads: path.resolve(__dirname, "uploads"),
            },
            build: {
                storage: path.resolve(__dirname, "build", "storage"),
                uploads: path.resolve(__dirname, "build", "uploads"),
            },
        },
    };

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 5000;

    return buildWebpackConfig({
        PORT,
        mode,
        isDev,
        paths,
    });
};
