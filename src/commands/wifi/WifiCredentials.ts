import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class WifiCredentialsCommand implements Command<WifiCredentialsPayload> {
  property: CommandProperty = "wifiCredentials";
  operation: RequestOperation;
  payload?: WifiCredentialsPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: WifiCredentialsPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export const WifiSlot = {
  Primary: 0,
  Secondary: 1,
} as const;

export type WifiSlot = typeof WifiSlot[keyof typeof WifiSlot];

export interface WifiCredentialsPayload extends IPayload {
    slot: WifiSlot;
    ssid: string;
    password: string;
}
