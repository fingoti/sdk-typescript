import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class DeviceVersionCommand implements Command<never> {
  property: CommandProperty = "deviceVersion";
  operation: RequestOperation = RequestOperation.Read;
}
