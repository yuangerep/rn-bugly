import { LoggerAdapter } from "../d/LoggerAdapter";
import { LogUploadListener } from "../d/LogUploadListener";
export declare class f21 {
    static readonly w14: string;
    static readonly b14 = "0.3.3";
    static g14: string;
    private static instance;
    context?: Context;
    loggerAdapter?: LoggerAdapter;
    logUploadListener?: LogUploadListener;
    hostType: number;
    private u14;
    appId: string;
    appKey: string;
    appVersion: string;
    uploadPeriodLimit: number;
    uploadPeriod: number;
    totalTrafficQuota: number;
    xgTrafficQuota: number;
    c14?: Array<string>;
    appBundleId: string;
    model: string;
    osVersion: string;
    brand: string;
    deviceId: string;
    private constructor();
    static getInstance(): f21;
    getGuid(): string;
    setGuid(p21: string): void;
    v14(): void;
    private x14;
}
