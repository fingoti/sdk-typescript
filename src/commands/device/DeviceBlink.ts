import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class DeviceBlinkCommand implements Command<DeviceBlinkPayload> {
  property: CommandProperty = "deviceBlink";
  operation: RequestOperation;
  payload?: DeviceBlinkPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: DeviceBlinkPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export const BlinkSpeed = {
  Off: 0,
  Slow: 1,
  Medium: 2,
  Fast: 3,
  Fastest: 4,
} as const;

export type BlinkSpeed = typeof BlinkSpeed[keyof typeof BlinkSpeed];

export interface DeviceBlinkPayload extends IPayload {
  state: BlinkSpeed;
}
