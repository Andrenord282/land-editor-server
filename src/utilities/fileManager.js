import * as fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import unzipper from 'unzipper';
import ErrorManager from './ErrorManager.js';

class FileManager {
	async writeFile(filePath, data) {
		try {
			await fs.promises.writeFile(filePath, data);
		} catch (error) {
			throw ErrorManager.ErrorServer('FileManager Error', `Ошибка записи файла ${filePath}`, [
				{ errorName: error.name, message: error.message, stack: error.stack },
			]);
		}
	}
	async readFile(filePath) {
		try {
			const data = await fs.promises.readFile(filePath, 'utf8');

			return data;
		} catch (error) {
			throw ErrorManager.ErrorServer('FileManager Error', `Ошибка парсинга HTML строки ${filePath}`, [
				{ errorName: error.name, message: error.message, stack: error.stack },
			]);
		}
	}

	async copyFile(srcPath, destPath) {
		try {
			await fs.promises.copyFile(srcPath, destPath);
		} catch (error) {
			return error.message;
		}
	}

	async deleteFile(filePath) {
		try {
			await fs.promises.unlink(filePath);
		} catch (error) {
			throw ErrorManager.ErrorServer('FileManager Error', `Ошибка удаление файла ${filePath}`, [
				{ errorName: error.name, message: error.message, stack: error.stack },
			]);
		}
	}

	async createFolder(folderPath) {
		try {
			await fs.promises.mkdir(path.join(folderPath), { recursive: true });
		} catch (err) {
			throw new Error(`Unable to create folder '${folderPath}': ${err.message}`);
		}
	}

	async deleteFolder(folderPath) {
		try {
			await fs.promises.rmdir(folderPath, { recursive: true });
		} catch (error) {
			throw ErrorManager.ErrorServer('FileManager Error', `Ошибка удаление папки ${filePath}`, [
				{ errorName: error.name, message: error.message, stack: error.stack },
			]);
		}
	}

	async existFolder(folderPath) {
		try {
			await fs.promises.access(folderPath);
		} catch (error) {
			await fs.promises.mkdir(path.join(folderPath), { recursive: true });
		}
	}

	async zipFolder(folderPath, zipFilePath) {
		const output = fs.promises.createWriteStream(zipFilePath);
		const archive = archiver('zip', { zlib: { level: 9 } });

		return new Promise((resolve, reject) => {
			output.on('close', () => {
				resolve();
			});

			archive.on('error', (err) => {
				reject(new Error(`Unable to create zip archive '${zipFilePath}': ${err.message}`));
			});

			archive.pipe(output);
			archive.directory(folderPath, false);
			archive.finalize();
		});
	}

	async unzipFile(zipFilePath, folderPath) {
		try {
			await fs.promises.mkdir(folderPath, { recursive: true });
			// await new Promise((resolve, reject) => {
			// 	fs.createReadStream(zipFilePath)
			// 		.pipe(unzipper.Extract({ path: folderPath }))
			// 		.on('close', () => {
			// 			resolve();
			// 		})
			// 		.on('error', (error) => {
			// 			reject(
			// 				ErrorManager.ErrorServer(
			// 					'FileManager Error',
			// 					`Произошла ошибка в потоке данных при распаковки ${zipFilePath}`,
			// 					[{ errorName: error.name, message: error.message, stack: error.stack }],
			// 				),
			// 			);
			// 		});
			// });
		} catch (error) {
			// throw ErrorManager.ErrorServer('FileManager Error', `Ошибка распаковки файла ${zipFilePath}`, [
			// 	{ errorName: error.name, message: error.message, stack: error.stack },
			// ]);
		}
	}

	setNameFolder() {
		const now = new Date();

		const date = `${now.getDate() > 9 ? now.getDate() : '0' + now.getDate()}-${
			now.getMonth() + 1 > 9 ? now.getMonth() : '0' + now.getMonth()
		}-${now.getFullYear()}`;

		const time = `${now.getHours() > 9 ? now.getHours() : '0' + now.getHours()}.${
			now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes()
		}.${now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds()}`;

		return `./storage/land-${date}-${time}`;
	}
}

export default new FileManager();
