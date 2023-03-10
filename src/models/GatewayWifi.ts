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
import type { WifiDetect } from './WifiDetect';
import {
    WifiDetectFromJSON,
    WifiDetectFromJSONTyped,
    WifiDetectToJSON,
} from './WifiDetect';
import type { WifiStatus } from './WifiStatus';
import {
    WifiStatusFromJSON,
    WifiStatusFromJSONTyped,
    WifiStatusToJSON,
} from './WifiStatus';

/**
 * 
 * @export
 * @interface GatewayWifi
 */
export interface GatewayWifi {
    /**
     * 
     * @type {Array<string>}
     * @memberof GatewayWifi
     */
    credentials?: Array<string> | null;
    /**
     * 
     * @type {WifiStatus}
     * @memberof GatewayWifi
     */
    status?: WifiStatus;
    /**
     * 
     * @type {Array<WifiDetect>}
     * @memberof GatewayWifi
     */
    detect?: Array<WifiDetect> | null;
}

/**
 * Check if a given object implements the GatewayWifi interface.
 */
export function instanceOfGatewayWifi(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayWifiFromJSON(json: any): GatewayWifi {
    return GatewayWifiFromJSONTyped(json, false);
}

export function GatewayWifiFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayWifi {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'credentials': !exists(json, 'credentials') ? undefined : json['credentials'],
        'status': !exists(json, 'status') ? undefined : WifiStatusFromJSON(json['status']),
        'detect': !exists(json, 'detect') ? undefined : (json['detect'] === null ? null : (json['detect'] as Array<any>).map(WifiDetectFromJSON)),
    };
}

export function GatewayWifiToJSON(value?: GatewayWifi | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'credentials': value.credentials,
        'status': WifiStatusToJSON(value.status),
        'detect': value.detect === undefined ? undefined : (value.detect === null ? null : (value.detect as Array<any>).map(WifiDetectToJSON)),
    };
}

