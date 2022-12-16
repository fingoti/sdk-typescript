import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty, ICommand } from "../Commnad";

export class TimerRequestCommand implements Command<TimerRequestPayload> {
  property: CommandProperty = "timerRequest";
  operation: RequestOperation;
  payload?: TimerRequestPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: TimerRequestPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface TimerRequestPayload extends IPayload {
  request: ICommand<IPayload>[];
}
