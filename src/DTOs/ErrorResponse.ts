export default class ErrorResponse extends Error {
  public message: string;
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}