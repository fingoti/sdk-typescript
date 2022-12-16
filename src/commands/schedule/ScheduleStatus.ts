import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";
import { ScheduleSlot } from "./ScheduleSlot";

export class ScheduleStatusCommand
  implements Command<ScheduleStatusWritePayload | ScheduleStatusReadPayload>
{
  property: CommandProperty = "scheduleStatus";
  operation: RequestOperation;
  payload: ScheduleStatusWritePayload | ScheduleStatusReadPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload: ScheduleStatusWritePayload | ScheduleStatusReadPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface ScheduleStatusReadPayload extends IPayload {
  slot: ScheduleSlot;
}

export interface ScheduleStatusWritePayload extends IPayload {
  slot: ScheduleSlot;
  enabled: boolean;
}
