import { ResolveOptions } from "webpack";
import { IBuildOptions } from "./types";

const buildResolve = (options: IBuildOptions): ResolveOptions => {
    return {
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        extensions: [".ts", ".js"],
    };
};

export { buildResolve };
