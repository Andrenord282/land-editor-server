type TBuildMode = "production" | "development";

interface IBuildEnv {
    mode: TBuildMode;
    port: number;
}

interface IBuildPaths {
    build: string;
    entry: string;
    html: string;
}

interface IBuildOptions {
    PORT: number;
    mode: TBuildMode;
    isDev: boolean;
    paths: IBuildPaths;
}

export { IBuildEnv, IBuildPaths, IBuildOptions };
