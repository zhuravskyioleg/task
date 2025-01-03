import {Task} from "./task.interfaces";

export interface TrelloList{
  assignedForMe : Task[],
  assignedFromMe : Task[],
}
