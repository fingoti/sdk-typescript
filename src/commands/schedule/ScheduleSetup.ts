import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";
import { ScheduleSlot } from "./ScheduleSlot";

export class ScheduleSetupCommand
  implements Command<ScheduleSetupWritePayload | ScheduleSetupReadPayload>
{
  property: CommandProperty = "scheduleSetup";
  operation: RequestOperation;
  payload: ScheduleSetupWritePayload | ScheduleSetupReadPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload: ScheduleSetupWritePayload | ScheduleSetupReadPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface ScheduleSetupReadPayload extends IPayload {
  slot: ScheduleSlot;
}

export interface ScheduleSetupWritePayload extends IPayload {
  slot: ScheduleSlot;
  clear: boolean;
}
