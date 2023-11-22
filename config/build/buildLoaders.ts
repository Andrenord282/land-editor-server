import { RuleSetRule } from "webpack";

const buildLoaders = (): RuleSetRule[] => {
    const typeScriptLoader: RuleSetRule = {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [typeScriptLoader];
};

export { buildLoaders };
