import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class DeviceActivityCommand
  implements Command<DeviceActivityPayload>
{
  property: CommandProperty = "deviceActivity";
  operation: RequestOperation;
  payload?: DeviceActivityPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: DeviceActivityPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface DeviceActivityPayload extends IPayload {
  enabled: boolean;
}
