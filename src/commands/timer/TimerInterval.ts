import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class TimerIntervalCommand implements Command<TimerIntervalPayload> {
  property: CommandProperty = "timerInterval";
  operation: RequestOperation;
  payload?: TimerIntervalPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: TimerIntervalPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface TimerIntervalPayload extends IPayload {
  interval: number;
}
