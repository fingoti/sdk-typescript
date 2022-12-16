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
 * @interface AddRoleRequest
 */
export interface AddRoleRequest {
    /**
     * 
     * @type {string}
     * @memberof AddRoleRequest
     */
    roleName: string;
    /**
     * 
     * @type {number}
     * @memberof AddRoleRequest
     */
    device?: number;
    /**
     * 
     * @type {number}
     * @memberof AddRoleRequest
     */
    organisation?: number;
    /**
     * 
     * @type {number}
     * @memberof AddRoleRequest
     */
    follow?: number;
    /**
     * 
     * @type {number}
     * @memberof AddRoleRequest
     */
    rule?: number;
    /**
     * 
     * @type {number}
     * @memberof AddRoleRequest
     */
    schedule?: number;
    /**
     * 
     * @type {number}
     * @memberof AddRoleRequest
     */
    user?: number;
    /**
     * 
     * @type {number}
     * @memberof AddRoleRequest
     */
    webhook?: number;
    /**
     * 
     * @type {number}
     * @memberof AddRoleRequest
     */
    partner?: number;
    /**
     * 
     * @type {number}
     * @memberof AddRoleRequest
     */
    billing?: number;
}

/**
 * Check if a given object implements the AddRoleRequest interface.
 */
export function instanceOfAddRoleRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "roleName" in value;

    return isInstance;
}

export function AddRoleRequestFromJSON(json: any): AddRoleRequest {
    return AddRoleRequestFromJSONTyped(json, false);
}

export function AddRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddRoleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roleName': json['roleName'],
        'device': !exists(json, 'device') ? undefined : json['device'],
        'organisation': !exists(json, 'organisation') ? undefined : json['organisation'],
        'follow': !exists(json, 'follow') ? undefined : json['follow'],
        'rule': !exists(json, 'rule') ? undefined : json['rule'],
        'schedule': !exists(json, 'schedule') ? undefined : json['schedule'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'webhook': !exists(json, 'webhook') ? undefined : json['webhook'],
        'partner': !exists(json, 'partner') ? undefined : json['partner'],
        'billing': !exists(json, 'billing') ? undefined : json['billing'],
    };
}

export function AddRoleRequestToJSON(value?: AddRoleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roleName': value.roleName,
        'device': value.device,
        'organisation': value.organisation,
        'follow': value.follow,
        'rule': value.rule,
        'schedule': value.schedule,
        'user': value.user,
        'webhook': value.webhook,
        'partner': value.partner,
        'billing': value.billing,
    };
}
