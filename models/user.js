export class User {
  constructor({username, role, activeTime, skills}) {
    this.username = username;
    this.activeTime = activeTime;
    this.skills = skills;
    this.role = role;
  }
}
