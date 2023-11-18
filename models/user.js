import { v4 } from "uuid";

export class User {
  constructor({ username, password, activeTime, email }) {
    this.id = Math.floor(Math.random() * 100000) + 1;
    this.username = username;
    this.activeTime = activeTime;
    this.password = password;
    this.email = email;
  }  
}
