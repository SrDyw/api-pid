// import { getUser, poblate } from "../libs/utils.js";
import {
  getUsers,
  insertUser,
  poblate,
  removeUser,
  updateUser,
} from "../database/controller.database.js";
import { Response } from "../models/response.js";
import { User } from "../models/user.js";

export const getUserRouteHandler = async (req, res) => {
  const { atr } = req.params;
  const response = await getUsers(atr);

  if (!response.isError()) {
    return res.status(200).json(response.result);
  } else {
    return res.status(500).json(response.getError());
  }
};

export const insertUserRouteHandler = async (req, res) => {
  const user = new User(req.body);

  const response = await insertUser(user);

  if (!response.isError()) {
    return res.status(200).send(response.result);
  } else {
    return res.status(500).send({ error: response.getError() });
  }
};

export const poblateRouteHandler = async (req, res) => {
  const response = await poblate();

  if (!response.isError()) {
    return res.status(200).send(response.result);
  }

  return res.status(500).send({ error: response.error });
};

export const updateUserRouteHandler = async (req, res) => {
  const response = await updateUser(req.body);

  if (!response.isError()) {
    return res.status(200).send(response.result);
  } else {
    return res.status(500).send({ error: response.error });
  }
};

export const removeUserRouteHandler = async (req, res) => {
  const response = await removeUser(req.params.value);
  if (!response.isError()) {
    return res.status(200).send(response.result);
  } else {
    return res.status(500).send({ error: response.error });
  }
};
