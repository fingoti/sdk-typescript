import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class UARTTriggerCommand implements Command<UARTTriggerPayload> {
  property: CommandProperty = "uartTrigger";
  operation: RequestOperation;
  payload?: UARTTriggerPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: UARTTriggerPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface UARTTriggerPayload extends IPayload {
  length?: number;
  terminator?: number[];
}
