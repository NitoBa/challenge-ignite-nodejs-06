export class CustomError extends Error {
  constructor(public message: string, public statusCode?: number) {
    super(message);
    this.statusCode = statusCode ?? 400;
    this.name = "CustomError";
  }
}
