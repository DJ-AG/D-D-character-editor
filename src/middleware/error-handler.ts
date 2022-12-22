import express, { NextFunction } from "express";

const errorHandlerMiddleware = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  console.log(err);
  res.status(500).json({ msg: "There was an error" });
};

export default errorHandlerMiddleware;
