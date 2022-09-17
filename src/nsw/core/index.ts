import express from "express";

interface Options {
  controllers?: Function[] | string[];
  middlewares?: Function[] | string[];
}

export function createServer(options?: Options) {
  const app = express();

  return app;
}
