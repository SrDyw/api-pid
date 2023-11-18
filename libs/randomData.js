import { faker } from "@faker-js/faker";
import { User } from "../models/user.js";

export const getRandomUser = (amount = 1) => {
  const createUser = () => {
    return new User({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      activeTime: faker.number.float({ min: 0, max: 100000 }),
    });
  };

  if (amount == 1) {
    return createUser();
  } else {
    const users = []
    for(let i = 0; i < amount; i++) users.push(createUser());

    console.log(users);
    return users
  }
};
