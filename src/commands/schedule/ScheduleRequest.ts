import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty, ICommand } from "../Commnad";
import { ScheduleSlot } from "./ScheduleSlot";

export class ScheduleRequestCommand
  implements Command<ScheduleRequestWritePayload | ScheduleRequestReadPayload>
{
  property: CommandProperty = "scheduleRequest";
  operation: RequestOperation;
  payload: ScheduleRequestWritePayload | ScheduleRequestReadPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload: ScheduleRequestWritePayload | ScheduleRequestReadPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface ScheduleRequestReadPayload extends IPayload {
  slot: ScheduleSlot;
}

export interface ScheduleRequestWritePayload extends IPayload {
  slot: ScheduleSlot;
  request: [ICommand<IPayload>];
}
