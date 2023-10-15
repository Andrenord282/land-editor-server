import path from "path";
import { Configuration as TWebpackConfiguration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildEnv, IBuildPaths } from "./config/build/types";

export default (env: IBuildEnv): TWebpackConfiguration => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
    };

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    return buildWebpackConfig({
        PORT,
        mode,
        isDev,
        paths,
    });
};
