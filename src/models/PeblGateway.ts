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
import type { AzureMessage } from './AzureMessage';
import {
    AzureMessageFromJSON,
    AzureMessageFromJSONTyped,
    AzureMessageToJSON,
} from './AzureMessage';
import type { GatewayClaim } from './GatewayClaim';
import {
    GatewayClaimFromJSON,
    GatewayClaimFromJSONTyped,
    GatewayClaimToJSON,
} from './GatewayClaim';
import type { GatewayGpio } from './GatewayGpio';
import {
    GatewayGpioFromJSON,
    GatewayGpioFromJSONTyped,
    GatewayGpioToJSON,
} from './GatewayGpio';
import type { GatewayI2c } from './GatewayI2c';
import {
    GatewayI2cFromJSON,
    GatewayI2cFromJSONTyped,
    GatewayI2cToJSON,
} from './GatewayI2c';
import type { GatewayMqtt } from './GatewayMqtt';
import {
    GatewayMqttFromJSON,
    GatewayMqttFromJSONTyped,
    GatewayMqttToJSON,
} from './GatewayMqtt';
import type { GatewayNetwork } from './GatewayNetwork';
import {
    GatewayNetworkFromJSON,
    GatewayNetworkFromJSONTyped,
    GatewayNetworkToJSON,
} from './GatewayNetwork';
import type { GatewaySchedule } from './GatewaySchedule';
import {
    GatewayScheduleFromJSON,
    GatewayScheduleFromJSONTyped,
    GatewayScheduleToJSON,
} from './GatewaySchedule';
import type { GatewayTimer } from './GatewayTimer';
import {
    GatewayTimerFromJSON,
    GatewayTimerFromJSONTyped,
    GatewayTimerToJSON,
} from './GatewayTimer';
import type { GatewayUart } from './GatewayUart';
import {
    GatewayUartFromJSON,
    GatewayUartFromJSONTyped,
    GatewayUartToJSON,
} from './GatewayUart';
import type { GatewayWifi } from './GatewayWifi';
import {
    GatewayWifiFromJSON,
    GatewayWifiFromJSONTyped,
    GatewayWifiToJSON,
} from './GatewayWifi';
import type { PeblDevice } from './PeblDevice';
import {
    PeblDeviceFromJSON,
    PeblDeviceFromJSONTyped,
    PeblDeviceToJSON,
} from './PeblDevice';

/**
 * 
 * @export
 * @interface PeblGateway
 */
export interface PeblGateway {
    /**
     * 
     * @type {string}
     * @memberof PeblGateway
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PeblGateway
     */
    partNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PeblGateway
     */
    systemOs?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PeblGateway
     */
    systemVersion?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PeblGateway
     */
    lastUpdated?: Date | null;
    /**
     * 
     * @type {AzureMessage}
     * @memberof PeblGateway
     */
    lastMessage?: AzureMessage;
    /**
     * 
     * @type {GatewayClaim}
     * @memberof PeblGateway
     */
    claim?: GatewayClaim;
    /**
     * 
     * @type {GatewayGpio}
     * @memberof PeblGateway
     */
    gpio?: GatewayGpio;
    /**
     * 
     * @type {GatewayTimer}
     * @memberof PeblGateway
     */
    timer?: GatewayTimer;
    /**
     * 
     * @type {GatewayWifi}
     * @memberof PeblGateway
     */
    wifi?: GatewayWifi;
    /**
     * 
     * @type {GatewayMqtt}
     * @memberof PeblGateway
     */
    mqtt?: GatewayMqtt;
    /**
     * 
     * @type {GatewayNetwork}
     * @memberof PeblGateway
     */
    network?: GatewayNetwork;
    /**
     * 
     * @type {GatewaySchedule}
     * @memberof PeblGateway
     */
    schedule?: GatewaySchedule;
    /**
     * 
     * @type {PeblDevice}
     * @memberof PeblGateway
     */
    device?: PeblDevice;
    /**
     * 
     * @type {GatewayUart}
     * @memberof PeblGateway
     */
    uart?: GatewayUart;
    /**
     * 
     * @type {GatewayI2c}
     * @memberof PeblGateway
     */
    i2c?: GatewayI2c;
}

/**
 * Check if a given object implements the PeblGateway interface.
 */
export function instanceOfPeblGateway(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PeblGatewayFromJSON(json: any): PeblGateway {
    return PeblGatewayFromJSONTyped(json, false);
}

export function PeblGatewayFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeblGateway {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'systemOs': !exists(json, 'systemOs') ? undefined : json['systemOs'],
        'systemVersion': !exists(json, 'systemVersion') ? undefined : json['systemVersion'],
        'lastUpdated': !exists(json, 'lastUpdated') ? undefined : (json['lastUpdated'] === null ? null : new Date(json['lastUpdated'])),
        'lastMessage': !exists(json, 'lastMessage') ? undefined : AzureMessageFromJSON(json['lastMessage']),
        'claim': !exists(json, 'claim') ? undefined : GatewayClaimFromJSON(json['claim']),
        'gpio': !exists(json, 'gpio') ? undefined : GatewayGpioFromJSON(json['gpio']),
        'timer': !exists(json, 'timer') ? undefined : GatewayTimerFromJSON(json['timer']),
        'wifi': !exists(json, 'wifi') ? undefined : GatewayWifiFromJSON(json['wifi']),
        'mqtt': !exists(json, 'mqtt') ? undefined : GatewayMqttFromJSON(json['mqtt']),
        'network': !exists(json, 'network') ? undefined : GatewayNetworkFromJSON(json['network']),
        'schedule': !exists(json, 'schedule') ? undefined : GatewayScheduleFromJSON(json['schedule']),
        'device': !exists(json, 'device') ? undefined : PeblDeviceFromJSON(json['device']),
        'uart': !exists(json, 'uart') ? undefined : GatewayUartFromJSON(json['uart']),
        'i2c': !exists(json, 'i2c') ? undefined : GatewayI2cFromJSON(json['i2c']),
    };
}

export function PeblGatewayToJSON(value?: PeblGateway | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'partNumber': value.partNumber,
        'systemOs': value.systemOs,
        'systemVersion': value.systemVersion,
        'lastUpdated': value.lastUpdated === undefined ? undefined : (value.lastUpdated === null ? null : value.lastUpdated.toISOString()),
        'lastMessage': AzureMessageToJSON(value.lastMessage),
        'claim': GatewayClaimToJSON(value.claim),
        'gpio': GatewayGpioToJSON(value.gpio),
        'timer': GatewayTimerToJSON(value.timer),
        'wifi': GatewayWifiToJSON(value.wifi),
        'mqtt': GatewayMqttToJSON(value.mqtt),
        'network': GatewayNetworkToJSON(value.network),
        'schedule': GatewayScheduleToJSON(value.schedule),
        'device': PeblDeviceToJSON(value.device),
        'uart': GatewayUartToJSON(value.uart),
        'i2c': GatewayI2cToJSON(value.i2c),
    };
}
