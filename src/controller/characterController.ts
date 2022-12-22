import express from "express";

const createCharacter = async (req: express.Request, res: express.Response) => {
  res.send("create character");
};
const getAllCharacters = async (
  req: express.Request,
  res: express.Response
) => {
  res.send("get all characters");
};
const updateCharacter = async (
    req: express.Request,
    res: express.Response
  ) => {
    res.send("updateCharacter");
  };
const deleteCharacter = async (req: express.Request, res: express.Response) => {
  res.send("deleteCharacter");
};
const showStats = async (req: express.Request, res: express.Response) => {
  res.send("showstats");
};

export { createCharacter, getAllCharacters, deleteCharacter, showStats,updateCharacter };
