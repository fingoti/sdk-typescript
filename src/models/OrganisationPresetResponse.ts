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
import type { OrganisationPresetsDto } from './OrganisationPresetsDto';
import {
    OrganisationPresetsDtoFromJSON,
    OrganisationPresetsDtoFromJSONTyped,
    OrganisationPresetsDtoToJSON,
} from './OrganisationPresetsDto';

/**
 * 
 * @export
 * @interface OrganisationPresetResponse
 */
export interface OrganisationPresetResponse {
    /**
     * 
     * @type {boolean}
     * @memberof OrganisationPresetResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrganisationPresetResponse
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof OrganisationPresetResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<OrganisationPresetsDto>}
     * @memberof OrganisationPresetResponse
     */
    presets?: Array<OrganisationPresetsDto> | null;
}

/**
 * Check if a given object implements the OrganisationPresetResponse interface.
 */
export function instanceOfOrganisationPresetResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganisationPresetResponseFromJSON(json: any): OrganisationPresetResponse {
    return OrganisationPresetResponseFromJSONTyped(json, false);
}

export function OrganisationPresetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganisationPresetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'presets': !exists(json, 'presets') ? undefined : (json['presets'] === null ? null : (json['presets'] as Array<any>).map(OrganisationPresetsDtoFromJSON)),
    };
}

export function OrganisationPresetResponseToJSON(value?: OrganisationPresetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'pageNumber': value.pageNumber,
        'count': value.count,
        'presets': value.presets === undefined ? undefined : (value.presets === null ? null : (value.presets as Array<any>).map(OrganisationPresetsDtoToJSON)),
    };
}

