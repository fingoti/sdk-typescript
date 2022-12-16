import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class MQTTStatusCommand implements Command<MQTTStatusPayload> {
  property: CommandProperty = "mqttStatus";
  operation: RequestOperation;
  payload?: MQTTStatusPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: MQTTStatusPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface MQTTStatusPayload extends IPayload {
  enabled: boolean;
}
