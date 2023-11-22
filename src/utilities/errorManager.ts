type TErrorCode =
    | "LIMIT_FILE_SIZE"
    | "NOT_FOUND_PATH"
    | "FILED_WRITE_FILE"
    | "FILED_UNZIP_FILE"
    | "INCORRECT_ARCHIVE_EXTENSION"
    | "NOT_FOUND_GEO_NAME"
    | "FILED_SET_GEO_LIST";

type TErrorStatus = "400" | "500";
// BadRequest
// ErrorServer
type TErrorMessageList = {
    LIMIT_FILE_SIZE: string;
    NOT_FOUND_PATH: string;
    FILED_WRITE_FILE: string;
    FILED_UNZIP_FILE: string;
    INCORRECT_ARCHIVE_EXTENSION: string;
    NOT_FOUND_GEO_NAME: string;
    FILED_SET_GEO_LIST: string;
};

type TAnyError = {
    [key: string]: any;
};

export type TErrorObject = {
    code: TErrorCode;
    status: TErrorStatus;
    name: string;
    stack?: string | undefined;
    storageErrors?: TAnyError[];
};

type TSystemError = {
    errno: number;
    code: string;
    path?: string;
    storageErrors: TAnyError[];
};

export const isSystemError = (error: any): error is TSystemError => {
    if (error instanceof Error && "errno" in error) {
        return true;
    } else {
        return false;
    }
};

const messageList: TErrorMessageList = {
    LIMIT_FILE_SIZE: "максимальный размер файла превышен",
    NOT_FOUND_PATH: "не удалось найти путь к директории",
    FILED_WRITE_FILE: "не удалось записать файл",
    FILED_UNZIP_FILE: "не удалось распаковать файл",
    INCORRECT_ARCHIVE_EXTENSION: "неправильное расширение архива",
    NOT_FOUND_GEO_NAME: "такое гео не существует",
    FILED_SET_GEO_LIST: "не удалось сделать geoList",
};

class ErrorManager extends Error {
    code: TErrorCode;
    status: TErrorStatus;
    name: string;
    storageErrors?: TAnyError[];

    constructor(error: TErrorObject) {
        super(messageList[error.code]);
        this.code = error.code;
        this.status = error.status;
        this.name = error.name;
        this.storageErrors = error.storageErrors;
    }
}

export { ErrorManager };
