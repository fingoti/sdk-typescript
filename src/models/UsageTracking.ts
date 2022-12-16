/* tslint:disable */
/* eslint-disable */
/**
 * Fingoti API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UsageTracking
 */
export interface UsageTracking {
    /**
     * 
     * @type {string}
     * @memberof UsageTracking
     */
    usageId?: string;
    /**
     * 
     * @type {string}
     * @memberof UsageTracking
     */
    organisationId?: string;
    /**
     * 
     * @type {Date}
     * @memberof UsageTracking
     */
    day?: Date;
    /**
     * 
     * @type {string}
     * @memberof UsageTracking
     */
    deviceId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    unknown?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceActivity?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceBlink?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceBrightness?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceBus?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceClaim?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceCloud?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceColour?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceFactory?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceInformation?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceKey?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    devicePoke?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    devicePower?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceSerial?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceSetup?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceSleep?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceTemperature?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceTime?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceUpdate?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceUptime?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    deviceVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    networkTraffic?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    networkInternet?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    networkIp?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    networkMac?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    i2cData?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    i2cDetect?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    i2cSetup?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    gpioDirection?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    gpioPulse?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    gpioState?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    gpioToggle?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    timerInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    timerRequest?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    timerStatus?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    wifiCredentials?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    wifiDetect?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    wifiStatus?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    uartData?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    uartMode?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    uartSession?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    uartSetup?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    uartTrigger?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    scheduleCron?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    scheduleRequest?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    scheduleSetup?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    scheduleStatus?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    mqttCertificate?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    mqttSession?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    mqttSetup?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    mqttStatus?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    nodeAddress?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    nodeData?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    nodeDetect?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    nodeEnable?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    nodeIdentify?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    nodeInformation?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    nodeLatch?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    nodePower?: number;
    /**
     * 
     * @type {number}
     * @memberof UsageTracking
     */
    nodeSetup?: number;
}

/**
 * Check if a given object implements the UsageTracking interface.
 */
export function instanceOfUsageTracking(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsageTrackingFromJSON(json: any): UsageTracking {
    return UsageTrackingFromJSONTyped(json, false);
}

export function UsageTrackingFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsageTracking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'usageId': !exists(json, 'usageId') ? undefined : json['usageId'],
        'organisationId': !exists(json, 'organisationId') ? undefined : json['organisationId'],
        'day': !exists(json, 'day') ? undefined : (new Date(json['day'])),
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'unknown': !exists(json, 'unknown') ? undefined : json['unknown'],
        'deviceActivity': !exists(json, 'deviceActivity') ? undefined : json['deviceActivity'],
        'deviceBalance': !exists(json, 'deviceBalance') ? undefined : json['deviceBalance'],
        'deviceBlink': !exists(json, 'deviceBlink') ? undefined : json['deviceBlink'],
        'deviceBrightness': !exists(json, 'deviceBrightness') ? undefined : json['deviceBrightness'],
        'deviceBus': !exists(json, 'deviceBus') ? undefined : json['deviceBus'],
        'deviceClaim': !exists(json, 'deviceClaim') ? undefined : json['deviceClaim'],
        'deviceCloud': !exists(json, 'deviceCloud') ? undefined : json['deviceCloud'],
        'deviceColour': !exists(json, 'deviceColour') ? undefined : json['deviceColour'],
        'deviceFactory': !exists(json, 'deviceFactory') ? undefined : json['deviceFactory'],
        'deviceInformation': !exists(json, 'deviceInformation') ? undefined : json['deviceInformation'],
        'deviceKey': !exists(json, 'deviceKey') ? undefined : json['deviceKey'],
        'devicePoke': !exists(json, 'devicePoke') ? undefined : json['devicePoke'],
        'devicePower': !exists(json, 'devicePower') ? undefined : json['devicePower'],
        'deviceSerial': !exists(json, 'deviceSerial') ? undefined : json['deviceSerial'],
        'deviceSetup': !exists(json, 'deviceSetup') ? undefined : json['deviceSetup'],
        'deviceSleep': !exists(json, 'deviceSleep') ? undefined : json['deviceSleep'],
        'deviceTemperature': !exists(json, 'deviceTemperature') ? undefined : json['deviceTemperature'],
        'deviceTime': !exists(json, 'deviceTime') ? undefined : json['deviceTime'],
        'deviceUpdate': !exists(json, 'deviceUpdate') ? undefined : json['deviceUpdate'],
        'deviceUptime': !exists(json, 'deviceUptime') ? undefined : json['deviceUptime'],
        'deviceVersion': !exists(json, 'deviceVersion') ? undefined : json['deviceVersion'],
        'networkTraffic': !exists(json, 'networkTraffic') ? undefined : json['networkTraffic'],
        'networkInternet': !exists(json, 'networkInternet') ? undefined : json['networkInternet'],
        'networkIp': !exists(json, 'networkIp') ? undefined : json['networkIp'],
        'networkMac': !exists(json, 'networkMac') ? undefined : json['networkMac'],
        'i2cData': !exists(json, 'i2cData') ? undefined : json['i2cData'],
        'i2cDetect': !exists(json, 'i2cDetect') ? undefined : json['i2cDetect'],
        'i2cSetup': !exists(json, 'i2cSetup') ? undefined : json['i2cSetup'],
        'gpioDirection': !exists(json, 'gpioDirection') ? undefined : json['gpioDirection'],
        'gpioPulse': !exists(json, 'gpioPulse') ? undefined : json['gpioPulse'],
        'gpioState': !exists(json, 'gpioState') ? undefined : json['gpioState'],
        'gpioToggle': !exists(json, 'gpioToggle') ? undefined : json['gpioToggle'],
        'timerInterval': !exists(json, 'timerInterval') ? undefined : json['timerInterval'],
        'timerRequest': !exists(json, 'timerRequest') ? undefined : json['timerRequest'],
        'timerStatus': !exists(json, 'timerStatus') ? undefined : json['timerStatus'],
        'wifiCredentials': !exists(json, 'wifiCredentials') ? undefined : json['wifiCredentials'],
        'wifiDetect': !exists(json, 'wifiDetect') ? undefined : json['wifiDetect'],
        'wifiStatus': !exists(json, 'wifiStatus') ? undefined : json['wifiStatus'],
        'uartData': !exists(json, 'uartData') ? undefined : json['uartData'],
        'uartMode': !exists(json, 'uartMode') ? undefined : json['uartMode'],
        'uartSession': !exists(json, 'uartSession') ? undefined : json['uartSession'],
        'uartSetup': !exists(json, 'uartSetup') ? undefined : json['uartSetup'],
        'uartTrigger': !exists(json, 'uartTrigger') ? undefined : json['uartTrigger'],
        'scheduleCron': !exists(json, 'scheduleCron') ? undefined : json['scheduleCron'],
        'scheduleRequest': !exists(json, 'scheduleRequest') ? undefined : json['scheduleRequest'],
        'scheduleSetup': !exists(json, 'scheduleSetup') ? undefined : json['scheduleSetup'],
        'scheduleStatus': !exists(json, 'scheduleStatus') ? undefined : json['scheduleStatus'],
        'mqttCertificate': !exists(json, 'mqttCertificate') ? undefined : json['mqttCertificate'],
        'mqttSession': !exists(json, 'mqttSession') ? undefined : json['mqttSession'],
        'mqttSetup': !exists(json, 'mqttSetup') ? undefined : json['mqttSetup'],
        'mqttStatus': !exists(json, 'mqttStatus') ? undefined : json['mqttStatus'],
        'nodeAddress': !exists(json, 'nodeAddress') ? undefined : json['nodeAddress'],
        'nodeData': !exists(json, 'nodeData') ? undefined : json['nodeData'],
        'nodeDetect': !exists(json, 'nodeDetect') ? undefined : json['nodeDetect'],
        'nodeEnable': !exists(json, 'nodeEnable') ? undefined : json['nodeEnable'],
        'nodeIdentify': !exists(json, 'nodeIdentify') ? undefined : json['nodeIdentify'],
        'nodeInformation': !exists(json, 'nodeInformation') ? undefined : json['nodeInformation'],
        'nodeLatch': !exists(json, 'nodeLatch') ? undefined : json['nodeLatch'],
        'nodePower': !exists(json, 'nodePower') ? undefined : json['nodePower'],
        'nodeSetup': !exists(json, 'nodeSetup') ? undefined : json['nodeSetup'],
    };
}

export function UsageTrackingToJSON(value?: UsageTracking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'usageId': value.usageId,
        'organisationId': value.organisationId,
        'day': value.day === undefined ? undefined : (value.day.toISOString()),
        'deviceId': value.deviceId,
        'total': value.total,
        'unknown': value.unknown,
        'deviceActivity': value.deviceActivity,
        'deviceBalance': value.deviceBalance,
        'deviceBlink': value.deviceBlink,
        'deviceBrightness': value.deviceBrightness,
        'deviceBus': value.deviceBus,
        'deviceClaim': value.deviceClaim,
        'deviceCloud': value.deviceCloud,
        'deviceColour': value.deviceColour,
        'deviceFactory': value.deviceFactory,
        'deviceInformation': value.deviceInformation,
        'deviceKey': value.deviceKey,
        'devicePoke': value.devicePoke,
        'devicePower': value.devicePower,
        'deviceSerial': value.deviceSerial,
        'deviceSetup': value.deviceSetup,
        'deviceSleep': value.deviceSleep,
        'deviceTemperature': value.deviceTemperature,
        'deviceTime': value.deviceTime,
        'deviceUpdate': value.deviceUpdate,
        'deviceUptime': value.deviceUptime,
        'deviceVersion': value.deviceVersion,
        'networkTraffic': value.networkTraffic,
        'networkInternet': value.networkInternet,
        'networkIp': value.networkIp,
        'networkMac': value.networkMac,
        'i2cData': value.i2cData,
        'i2cDetect': value.i2cDetect,
        'i2cSetup': value.i2cSetup,
        'gpioDirection': value.gpioDirection,
        'gpioPulse': value.gpioPulse,
        'gpioState': value.gpioState,
        'gpioToggle': value.gpioToggle,
        'timerInterval': value.timerInterval,
        'timerRequest': value.timerRequest,
        'timerStatus': value.timerStatus,
        'wifiCredentials': value.wifiCredentials,
        'wifiDetect': value.wifiDetect,
        'wifiStatus': value.wifiStatus,
        'uartData': value.uartData,
        'uartMode': value.uartMode,
        'uartSession': value.uartSession,
        'uartSetup': value.uartSetup,
        'uartTrigger': value.uartTrigger,
        'scheduleCron': value.scheduleCron,
        'scheduleRequest': value.scheduleRequest,
        'scheduleSetup': value.scheduleSetup,
        'scheduleStatus': value.scheduleStatus,
        'mqttCertificate': value.mqttCertificate,
        'mqttSession': value.mqttSession,
        'mqttSetup': value.mqttSetup,
        'mqttStatus': value.mqttStatus,
        'nodeAddress': value.nodeAddress,
        'nodeData': value.nodeData,
        'nodeDetect': value.nodeDetect,
        'nodeEnable': value.nodeEnable,
        'nodeIdentify': value.nodeIdentify,
        'nodeInformation': value.nodeInformation,
        'nodeLatch': value.nodeLatch,
        'nodePower': value.nodePower,
        'nodeSetup': value.nodeSetup,
    };
}
