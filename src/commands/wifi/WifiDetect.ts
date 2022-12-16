import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class WiifDetectCommand implements Command<never> {
  property: CommandProperty = "wifiDetect";
  operation: RequestOperation = RequestOperation.Read;
}
