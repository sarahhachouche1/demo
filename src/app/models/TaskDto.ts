import { Status } from "../task-list/task-list.component";

export interface Task {
    id: number ;
    title: string;
    description?: string | null;
    dueDate: Date; 
    status: Status; 
  }
  
 