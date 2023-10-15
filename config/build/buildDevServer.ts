import { Configuration as TDevServerConfiguration } from "webpack-dev-server";
import { IBuildOptions } from "./types";

const buildDevServer = (options: IBuildOptions): TDevServerConfiguration => {
    return {
        port: options.PORT,
        open: true,
    };
};

export { buildDevServer };
