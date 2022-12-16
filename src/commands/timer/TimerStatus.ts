import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class TimerStatusCommand implements Command<TimerStatusPayload> {
  property: CommandProperty = "timerStatus";
  operation: RequestOperation;
  payload?: TimerStatusPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: TimerStatusPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface TimerStatusPayload extends IPayload {
    enabled: boolean;
    repeat: boolean;
}
