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
export const RequestOperation = {
    Read: 0,
    Write: 1
} as const;
export type RequestOperation = typeof RequestOperation[keyof typeof RequestOperation];


export function RequestOperationFromJSON(json: any): RequestOperation {
    return RequestOperationFromJSONTyped(json, false);
}

export function RequestOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestOperation {
    return json as RequestOperation;
}

export function RequestOperationToJSON(value?: RequestOperation | null): any {
    return value as any;
}

