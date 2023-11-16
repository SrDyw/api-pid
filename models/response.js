export class Response {
  constructor(url) {
    this.message = null;
    this.error = null;
    this.result = null;
  }
  isError() {
    if (this.error) {
      console.error(this.error);
      return true;
    }
    return false;
  }
  getResult() {
    if (!this.isError()) {
      return this.result;
    }
  }

  getError() {
    if (this.isError()) {
      return { error: this.error };
    } else return { error: null };
  }
}
