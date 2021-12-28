import fs from 'fs';

class FileServices {
    write(input: string, file = "log.txt", folderName = "./log"): void {
        const text = `${input}`;

        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }

        fs.appendFile(`${folderName}/${file}`, text, (err) => {
            if (err) throw err;
        });
    }
}

export default new FileServices();