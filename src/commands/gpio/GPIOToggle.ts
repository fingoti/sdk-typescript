import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";
import { GPIONumber } from "./GPIOEnums";

export class GPIOToggleCommand implements Command<GPIOTogglePayload> {
  property: CommandProperty = "gpioToggle";
  operation = RequestOperation.Write;
  payload: GPIOTogglePayload;

  constructor({ payload }: { payload: GPIOTogglePayload }) {
    this.payload = payload;
  }
}

export interface GPIOTogglePayload extends IPayload {
  gpio: GPIONumber;
}
