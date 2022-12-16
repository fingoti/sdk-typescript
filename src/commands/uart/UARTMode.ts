import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class UARTModeCommand implements Command<UARTModePayload> {
  property: CommandProperty = "uartMode";
  operation: RequestOperation;
  payload?: UARTModePayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: UARTModePayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export const UARTMode = {
  interpreter: 0,
  passthrough: 1,
} as const;

export type UARTMode = typeof UARTMode[keyof typeof UARTMode];

export interface UARTModePayload extends IPayload {
  mode: UARTMode;
}
