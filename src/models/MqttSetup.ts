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
 * @interface MqttSetup
 */
export interface MqttSetup {
    /**
     * 
     * @type {string}
     * @memberof MqttSetup
     */
    host?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MqttSetup
     */
    qos?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MqttSetup
     */
    retain?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MqttSetup
     */
    port?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MqttSetup
     */
    secure?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MqttSetup
     */
    username?: string | null;
}

/**
 * Check if a given object implements the MqttSetup interface.
 */
export function instanceOfMqttSetup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MqttSetupFromJSON(json: any): MqttSetup {
    return MqttSetupFromJSONTyped(json, false);
}

export function MqttSetupFromJSONTyped(json: any, ignoreDiscriminator: boolean): MqttSetup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'host': !exists(json, 'host') ? undefined : json['host'],
        'qos': !exists(json, 'qos') ? undefined : json['qos'],
        'retain': !exists(json, 'retain') ? undefined : json['retain'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'secure': !exists(json, 'secure') ? undefined : json['secure'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function MqttSetupToJSON(value?: MqttSetup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'host': value.host,
        'qos': value.qos,
        'retain': value.retain,
        'port': value.port,
        'secure': value.secure,
        'username': value.username,
    };
}
