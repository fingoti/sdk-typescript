import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class DeviceBusCommand implements Command<DeviceBusPayload> {
  property: CommandProperty = "deviceBus";
  operation: RequestOperation;
  payload?: DeviceBusPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: DeviceBusPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export const BusMode = {
  UART: 0,
  I2C: 1,
} as const;

export type BusMode = typeof BusMode[keyof typeof BusMode];

export interface DeviceBusPayload extends IPayload {
  protocol: BusMode;
}
