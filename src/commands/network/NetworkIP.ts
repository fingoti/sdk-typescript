import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class NetworkIPCommand implements Command<NetworkIPPayload> {
  property: CommandProperty = "networkIp";
  operation: RequestOperation;
  payload?: NetworkIPPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: NetworkIPPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface NetworkIPPayload extends IPayload {
  dhcp: boolean;
  local?: string;
  mask?: string;
  gateway?: string;
  dns?: string;
}
