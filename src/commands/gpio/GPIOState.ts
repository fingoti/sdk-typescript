import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";
import { GPIONumber, State } from "./GPIOEnums";

export class GPIOStateCommand implements Command<GPIOAllStatePayload | GPIOStatePayload | GPIOSaveStatePayload> {
  property: CommandProperty = "gpioState";
  operation: RequestOperation;
  payload?: GPIOAllStatePayload | GPIOStatePayload | GPIOSaveStatePayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: GPIOAllStatePayload | GPIOStatePayload | GPIOSaveStatePayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface GPIOSaveStatePayload extends IPayload {
  save: boolean;
}

export interface GPIOAllStatePayload extends IPayload {
  state: [0 | 1, 0 | 1, 0 | 1, 0 | 1];
  save: boolean;
}

export interface GPIOStatePayload extends IPayload {
  gpio: GPIONumber;
  value: State | 0 | 1;
  save: boolean;
}
