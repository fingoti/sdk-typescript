import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class NetworkMACCommand implements Command<never> {
  property: CommandProperty = "networkMac";
  operation: RequestOperation = RequestOperation.Read;
}
