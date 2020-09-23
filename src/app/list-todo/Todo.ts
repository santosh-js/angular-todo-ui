export class Todo {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public isCompleted: boolean,
    public targetDate: Date
  ) {}
}
