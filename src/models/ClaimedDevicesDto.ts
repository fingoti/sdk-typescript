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
import type { DevicePeblDto } from './DevicePeblDto';
import {
    DevicePeblDtoFromJSON,
    DevicePeblDtoFromJSONTyped,
    DevicePeblDtoToJSON,
} from './DevicePeblDto';
import type { DeviceVyneDto } from './DeviceVyneDto';
import {
    DeviceVyneDtoFromJSON,
    DeviceVyneDtoFromJSONTyped,
    DeviceVyneDtoToJSON,
} from './DeviceVyneDto';

/**
 * 
 * @export
 * @interface ClaimedDevicesDto
 */
export interface ClaimedDevicesDto {
    /**
     * 
     * @type {boolean}
     * @memberof ClaimedDevicesDto
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ClaimedDevicesDto
     */
    organisationId?: string;
    /**
     * 
     * @type {Date}
     * @memberof ClaimedDevicesDto
     */
    lastUpdated?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof ClaimedDevicesDto
     */
    readonly count?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimedDevicesDto
     */
    claimPendingCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimedDevicesDto
     */
    ownedDeviceCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ClaimedDevicesDto
     */
    onlineGateways?: Array<string> | null;
    /**
     * 
     * @type {DevicePeblDto}
     * @memberof ClaimedDevicesDto
     */
    pebl?: DevicePeblDto;
    /**
     * 
     * @type {DeviceVyneDto}
     * @memberof ClaimedDevicesDto
     */
    vyne?: DeviceVyneDto;
}

/**
 * Check if a given object implements the ClaimedDevicesDto interface.
 */
export function instanceOfClaimedDevicesDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClaimedDevicesDtoFromJSON(json: any): ClaimedDevicesDto {
    return ClaimedDevicesDtoFromJSONTyped(json, false);
}

export function ClaimedDevicesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClaimedDevicesDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'organisationId': !exists(json, 'organisationId') ? undefined : json['organisationId'],
        'lastUpdated': !exists(json, 'lastUpdated') ? undefined : (json['lastUpdated'] === null ? null : new Date(json['lastUpdated'])),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'claimPendingCount': !exists(json, 'claimPendingCount') ? undefined : json['claimPendingCount'],
        'ownedDeviceCount': !exists(json, 'ownedDeviceCount') ? undefined : json['ownedDeviceCount'],
        'onlineGateways': !exists(json, 'onlineGateways') ? undefined : json['onlineGateways'],
        'pebl': !exists(json, 'pebl') ? undefined : DevicePeblDtoFromJSON(json['pebl']),
        'vyne': !exists(json, 'vyne') ? undefined : DeviceVyneDtoFromJSON(json['vyne']),
    };
}

export function ClaimedDevicesDtoToJSON(value?: ClaimedDevicesDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'organisationId': value.organisationId,
        'lastUpdated': value.lastUpdated === undefined ? undefined : (value.lastUpdated === null ? null : value.lastUpdated.toISOString()),
        'claimPendingCount': value.claimPendingCount,
        'ownedDeviceCount': value.ownedDeviceCount,
        'onlineGateways': value.onlineGateways,
        'pebl': DevicePeblDtoToJSON(value.pebl),
        'vyne': DeviceVyneDtoToJSON(value.vyne),
    };
}

