import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";
import { GPIONumber } from "./GPIOEnums";

export class GPIOPulseCommand implements Command<GPIOPulsePayload> {
  property: CommandProperty = "gpioPulse";
  operation = RequestOperation.Write;
  payload: GPIOPulsePayload;

  constructor({ payload }: { payload: GPIOPulsePayload }) {
    this.payload = payload;
  }
}

export interface GPIOPulsePayload extends IPayload {
  gpio: GPIONumber;
  duration: number;
}
