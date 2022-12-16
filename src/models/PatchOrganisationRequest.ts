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
 * @interface PatchOrganisationRequest
 */
export interface PatchOrganisationRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationRequest
     */
    organisationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationRequest
     */
    vatNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationRequest
     */
    mainContact?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationRequest
     */
    mainAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationRequest
     */
    billingContact?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationRequest
     */
    billingAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationRequest
     */
    deliveryContact?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationRequest
     */
    deliveryAddress?: string | null;
}

/**
 * Check if a given object implements the PatchOrganisationRequest interface.
 */
export function instanceOfPatchOrganisationRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchOrganisationRequestFromJSON(json: any): PatchOrganisationRequest {
    return PatchOrganisationRequestFromJSONTyped(json, false);
}

export function PatchOrganisationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchOrganisationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organisationName': !exists(json, 'organisationName') ? undefined : json['organisationName'],
        'vatNumber': !exists(json, 'vatNumber') ? undefined : json['vatNumber'],
        'mainContact': !exists(json, 'mainContact') ? undefined : json['mainContact'],
        'mainAddress': !exists(json, 'mainAddress') ? undefined : json['mainAddress'],
        'billingContact': !exists(json, 'billingContact') ? undefined : json['billingContact'],
        'billingAddress': !exists(json, 'billingAddress') ? undefined : json['billingAddress'],
        'deliveryContact': !exists(json, 'deliveryContact') ? undefined : json['deliveryContact'],
        'deliveryAddress': !exists(json, 'deliveryAddress') ? undefined : json['deliveryAddress'],
    };
}

export function PatchOrganisationRequestToJSON(value?: PatchOrganisationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organisationName': value.organisationName,
        'vatNumber': value.vatNumber,
        'mainContact': value.mainContact,
        'mainAddress': value.mainAddress,
        'billingContact': value.billingContact,
        'billingAddress': value.billingAddress,
        'deliveryContact': value.deliveryContact,
        'deliveryAddress': value.deliveryAddress,
    };
}

