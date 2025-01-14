export interface ITask {
  id: string;
  name: string;
  icon: string;
  description: string;
  duration: ITaskDuration;
}

export interface ITaskDuration {
  start: Date;
  end: Date;
  last: number;
  total: number;
}

export interface ITarget {
  id: string;
}
