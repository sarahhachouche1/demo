export interface Task {
    id: number | null ;
    title: string;
    description?: string | null;
    dueDate: Date; 
    status: Status; 
  }
  
  export enum Status {
    Pending = 'Pending',
    InProgress = 'InProgress',
    Completed = 'Completed'
  }