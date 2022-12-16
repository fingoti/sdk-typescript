import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class MQTTSessionCommand
  implements Command<MQTTSessionPayload>
{
  property: CommandProperty = "mqttSession";
  operation: RequestOperation;
  payload?: MQTTSessionPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: MQTTSessionPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface MQTTSessionPayload extends IPayload {
    duration: Number;
}
