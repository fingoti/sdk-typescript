import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class WifiStatusCommand implements Command<WifiStatusPayload> {
  property: CommandProperty = "wifiStatus";
  operation: RequestOperation;
  payload?: WifiStatusPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: WifiStatusPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface WifiStatusPayload extends IPayload {
    restart: boolean;
}
