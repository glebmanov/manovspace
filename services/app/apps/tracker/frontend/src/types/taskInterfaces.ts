export interface ITask {
  id: string;
  name: string;
  icon: string;
  description: string;
  timer: {
    start: number;
    end: number;
    last: number;
    total: number;
  };
}

export interface ITarget {
  id: string;
}
