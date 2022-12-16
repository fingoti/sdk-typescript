import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class UARTDataCommand implements Command<UARTDataPayload> {
  property: CommandProperty = "uartData";
  operation = RequestOperation.Write;
  payload: UARTDataPayload;

  constructor({ payload }: { payload: UARTDataPayload }) {
    this.payload = payload;
  }
}

export interface UARTDataPayload extends IPayload {
  data: number[];
}
