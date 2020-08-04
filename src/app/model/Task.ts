

export class Task {
  id: number;
  title: string;
  description: string;
  status: Status;

}
export enum Status {
  NEW,
  IN_PROGRESS,
  FINISHED,
}
