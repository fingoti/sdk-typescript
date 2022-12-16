import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class DeviceUptimeCommand implements Command<never> {
  property: CommandProperty = "deviceUptime";
  operation: RequestOperation = RequestOperation.Read;
}
