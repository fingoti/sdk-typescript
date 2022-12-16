import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class MQTTSetupCommand
  implements Command<MQTTSetupPayload>
{
  property: CommandProperty = "mqttSetup";
  operation: RequestOperation;
  payload?: MQTTSetupPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: MQTTSetupPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface MQTTSetupPayload extends IPayload {
    host: string;
    port: Number;
    qos: 0 | 1 | 2;
    secure: boolean;
    retain: boolean;
    username: string;
}

export interface MQTTSetupClearPayload extends IPayload {
  clear: boolean;
}
