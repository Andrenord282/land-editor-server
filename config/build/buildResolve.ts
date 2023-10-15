import { ResolveOptions } from "webpack";

const buildResolve = (): ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
    };
};

export { buildResolve };
