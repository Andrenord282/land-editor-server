type TBuildMode = "production" | "development";

interface IBuildEnv {
    mode: TBuildMode;
    port: number;
}

interface IFolderList {
    storage: string;
    uploads: string
}
interface IFolderPaths {
    entry: IFolderList;
    build: IFolderList;
}

interface IBuildPaths {
    build: string;
    src: string;
    entry: string;
    folderPaths: IFolderPaths;
}

interface IBuildOptions {
    PORT: number;
    mode: TBuildMode;
    isDev: boolean;
    paths: IBuildPaths;
}

export { IBuildEnv, IBuildPaths, IBuildOptions };
