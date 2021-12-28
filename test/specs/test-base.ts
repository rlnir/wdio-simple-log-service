import simpleLog from "../../src/simple-log";
import cleanupTotal from "../../src/simple-log";

_serviceOptions: { loggerMethod: (Function)}

beforeEach(() => {
    simpleLog.logF("base: beforeEach")
});

afterEach(() => {
    simpleLog.logF("base: afterEach")
});