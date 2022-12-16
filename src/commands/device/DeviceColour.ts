import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class DeviceColourCommand
  implements Command<DeviceColourPayload>
{
  property: CommandProperty = "deviceColour";
  operation: RequestOperation;
  payload?: DeviceColourPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: DeviceColourPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface DeviceColourPayload extends IPayload {
  colour: Number[];
  reset?: boolean;
}
