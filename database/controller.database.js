import { mainConfig } from "../config/mainConffig.js";
import { getRandomUser } from "../libs/randomData.js";
import { users } from "../mocks/data.js";
import { Response } from "../models/response.js";
import { User } from "../models/user.js";
import { userModel } from "./model.database.js";

export const getUsers = async (value) => {
  const param = !isNaN(value) ? "id" : "username";

  return await Response.createRequest(() =>
    userModel.find(value != "all" ? { [param]: value } : {})
  );
};

export const getLastUser = async () => {
  const users = await userModel.find();
  return users.at(-1);
};

export const insertUser = async (user) => {
  return await Response.createRequest(() => userModel.create(user));
};

export const poblate = async (amount) => {
  return Response.createRequest(() => userModel.create(getRandomUser(amount)));
};

export const updateUser = async ({ filter, updateValue }) => {
  const response = new Response();

  try {
    response.result = await userModel.updateOne(filter, { $set: updateValue });
  } catch (err) {
    response.error = err;
  }

  return response;
};

export const removeUser = async (value) => {
  const param = !isNaN(value) ? "id" : "username";
  const response = new Response();
  try {
    response.result = await userModel.deleteOne({ [param]: value });
  } catch (err) {
    response.error = err;
  }
  return response;
};
