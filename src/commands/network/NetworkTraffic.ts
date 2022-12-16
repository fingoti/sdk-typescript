import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class NetworkTrafficCommand implements Command<never> {
  property: CommandProperty = "networkTraffic";
  operation: RequestOperation = RequestOperation.Read;
}
