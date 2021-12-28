import simpleLog from "../../src/simple-log";
import * as testbase from "./test-base";
import SimpleLogService from '../../src/simple-log-service';
import simpleLogService from "../../src/simple-log-service";

const testBase = testbase;
simpleLogService;

describe("SimpleLog Suite", () => {
    it("SimpleLog Test", async () => {

        simpleLog.logF("Simple Hello World");
        

    });
});