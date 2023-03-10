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


/**
 * 
 * @export
 */
export const DeviceSession = {
    Fresh: 0,
    Unlocked: 1,
    Locked: 2,
    Blocked: 3
} as const;
export type DeviceSession = typeof DeviceSession[keyof typeof DeviceSession];


export function DeviceSessionFromJSON(json: any): DeviceSession {
    return DeviceSessionFromJSONTyped(json, false);
}

export function DeviceSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceSession {
    return json as DeviceSession;
}

export function DeviceSessionToJSON(value?: DeviceSession | null): any {
    return value as any;
}

