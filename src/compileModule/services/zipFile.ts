import AdmZip from "adm-zip";

const zipFile = async (folderPath: string, zipPath: string) => {
    try {
        const zip = new AdmZip();
        zip.addLocalFolder(folderPath);
        zip.writeZip(zipPath);
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
};

export { zipFile };
