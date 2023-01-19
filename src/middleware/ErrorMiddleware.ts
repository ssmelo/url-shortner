import { Response } from "express";
import { ValidationError } from "sequelize";
import ErrorResponse from "../DTOs/ErrorResponse";

class ErrorMiddleware {
  handleError(error: Error | ErrorResponse, response: Response) {
    if(error instanceof ValidationError)
      return response.json({ success: false, message: error.message }).status(404);

    if(error instanceof ErrorResponse)
      return response.json({ success: false, message: error.message }).status(error.status);

    return response.json({ success: false, message: "Internal Server Error"}).status(500);
  }
}

export default new ErrorMiddleware();