import simpleLog from "./simple-log";


export default class SimpleLogService {
    browser: WebdriverIO.Browser;
    _serviceOptions: { fileName: string, folderName: string, timestamp: boolean };
    /**
     * `serviceOptions` contains all options specific to the service
     * e.g. if defined as follows:
     *
     * ```
     * services: [['custom', { foo: 'bar' }]]
     * ```
     *
     * the `serviceOptions` parameter will be: `{ foo: 'bar' }`
     */
    constructor(serviceOptions: { fileName: string, folderName: string, timestamp: boolean }, capabilities: any, config: any, browser: WebdriverIO.Browser) {
        this.browser = browser
        this._serviceOptions = serviceOptions;
    }

    before(config: any, capabilities: any) {
        simpleLog.init(this._serviceOptions);
    }

    beforeTest(test: any, context: any) {
        simpleLog.logF(`start test ${JSON.stringify(test)}`)
    }

    beforeScenario(test: any, context: any) {
    }

    async afterTest(test: any, context: any, { error, result, duration, passed, retries }: any) {
    }

    async afterScenario({ result }: any) {
    }

    async after(exitCode: any, config: any, capabilities: any) {
    }
}
