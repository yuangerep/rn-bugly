import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import { HashMap } from '@kit.ArkTS';
export declare class i2 {
    private static readonly c8;
    private static instance;
    context?: Context;
    launchParam?: AbilityConstant.LaunchParam;
    appId: string;
    appKey: string;
    appName: string;
    e1: string;
    userId: string;
    deviceId: string;
    deviceModel: string;
    arch?: string;
    osVersion?: string;
    appVersion: string;
    buildNum: string;
    appChannel: string;
    v16?: number;
    appLaunchTime: number;
    q16?: Array<string>;
    w1?: number;
    t16?: number;
    u16?: number;
    debugMode: boolean;
    v7: number;
    processName: string;
    w7: boolean;
    b2: HashMap<string, string>;
    a3: string;
    x7: boolean;
    private constructor();
    static getInstance(): i2;
    y7(): void;
    getSdkVersion(): string;
    z2(): string;
    private z7;
    private a8;
    private getProcessInfo;
}