import { RuleSetRule } from "webpack";

const buildLoaders = (): RuleSetRule[] => {
    const typeScriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const scssAndCssLoader: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    };

    return [typeScriptLoader, scssAndCssLoader];
};

export { buildLoaders };
