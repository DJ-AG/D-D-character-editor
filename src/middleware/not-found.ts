import express from "express";
//Error handle middleware
const NotFoundMiddleware = (req: express.Request, res: express.Response) =>
  res.status(404).send("Route does not exist");

export default NotFoundMiddleware;
 