import { mainConfig } from "../config/mainConffig.js";
import { users } from "../mocks/data.js";
import { Response } from "../models/response.js";
import { User } from "../models/user.js";
import { userModel } from "./model.database.js";

export const getUsers = async (value) => {
  const response = new Response();
  const param = !isNaN(value) ? "id" : "username";

  // Data from Mocks
  try {
    if (mainConfig.local) {
      response.result = users.filter(
        (u) => value == "all" || u[param] == value
      );
    }
    // Data from databae
    else {
      console.log({ [param]: value });
      response.result = await userModel.find(
        value != "all" ? { [param]: value } : {}
      );
    }
  } catch (err) {
    response.error = err;
  }
  // const d = await userModel.find({ [param]: value });
  // console.log(d);

  return response;
};

export const getLastUser = async () => {
  const users = await userModel.find();
  return users.at(-1);
};

export const insertUser = async (user) => {
  const response = new Response();
  try {
    const lastId = (await getLastUser()).id;

    response.result = await userModel.create({ ...user, id: lastId + 1 });
  } catch (error) {
    response.error = error;
  }

  return response;
};

export const poblate = async () => {
  const response = new Response();

  try {
    let inserted = 0;
    users.forEach(async (user) => {
      const exists =
        (await userModel.find({ username: user.username })).length != 0;
      if (!exists) {
        userModel.create(user);
      }
    });

    response.result = `Process executed`;
  } catch (err) {
    response.error = err;
  }

  return response;
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
