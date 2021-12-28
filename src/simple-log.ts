import fileServices from "./file-services";

class SimpleLog {
    _serviceOptions: { fileName: string; folderName: string; timestamp: boolean; } | undefined;

    init(serviceOptions: { fileName: string; folderName: string; timestamp: boolean; }) {
        this._serviceOptions = serviceOptions;
    }

    logF(message: string) {
        if (this._serviceOptions?.timestamp) {
            message = `[${new Date().toUTCString()}] ${message}`
        }

        message += "\n"

        console.log(message);

        fileServices.write(message, this._serviceOptions?.fileName, this._serviceOptions?.folderName);
    }
}
export default new SimpleLog();