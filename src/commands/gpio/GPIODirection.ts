import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";
import { Direction, GPIONumber } from "./GPIOEnums";

export class GPIODirectionCommand
  implements
    Command<
      GPIOAllDirectionPayload | GPIODirectionPayload | GPIOSaveDirectionPayload
    >
{
  property: CommandProperty = "gpioDirection";
  operation: RequestOperation;
  payload?:
    | GPIOAllDirectionPayload
    | GPIODirectionPayload
    | GPIOSaveDirectionPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?:
      | GPIOAllDirectionPayload
      | GPIODirectionPayload
      | GPIOSaveDirectionPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface GPIOSaveDirectionPayload extends IPayload {
  save: boolean;
}

export interface GPIOAllDirectionPayload extends IPayload {
  direction: [
    Direction | 0 | 1,
    Direction | 0 | 1,
    Direction | 0 | 1,
    Direction | 0 | 1
  ];
  save: boolean;
}

export interface GPIODirectionPayload extends IPayload {
  gpio: GPIONumber;
  value: Direction | 0 | 1;
  save: boolean;
}
