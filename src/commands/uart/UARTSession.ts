import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class UARTSessionCommand implements Command<UARTSessionPayload> {
  property: CommandProperty = "uartSession";
  operation: RequestOperation;
  payload?: UARTSessionPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: UARTSessionPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface UARTSessionPayload extends IPayload {
    duration: number;
}
