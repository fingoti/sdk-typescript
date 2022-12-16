import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";
import { ScheduleSlot } from "./ScheduleSlot";

export class ScheduleCronCommand implements Command<ScheduleCronWritePayload | ScheduleCronReadPayload> {
  property: CommandProperty = "scheduleCron";
  operation: RequestOperation;
  payload: ScheduleCronWritePayload | ScheduleCronReadPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload: ScheduleCronWritePayload | ScheduleCronReadPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface ScheduleCronReadPayload extends IPayload {
  slot: ScheduleSlot;
}

export interface ScheduleCronWritePayload extends IPayload {
  slot: ScheduleSlot;
  cron: string;
}
