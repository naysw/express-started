import { NextFunction, Request, Response } from "express";

/**
 * Custom error handler to standardize error objects returned to
 * the client
 *
 * @param error Error caught by Express.js
 * @param req Request object provided by Express
 * @param res Response object provided by Express
 * @param next NextFunction function provided by Express
 */
export default function handleError(
  error: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { isBoom, output } = error;

  if (isBoom) return res.status(output.statusCode).json(error.output.payload);

  return res.status(500).json(error);
}
