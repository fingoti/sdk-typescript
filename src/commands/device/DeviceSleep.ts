import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class DeviceSleepCommand implements Command<DeviceSleepPayload> {
  property: CommandProperty = "deviceSleep";
  operation = RequestOperation.Write;
  payload: DeviceSleepPayload;

  constructor({
    payload,
  }: {
    payload: DeviceSleepPayload;
  }) {
    this.payload = payload;
  }
}

export interface DeviceSleepPayload extends IPayload {
  duration: number;
}
