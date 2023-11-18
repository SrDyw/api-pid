export class Response {
  constructor(requestPromise) {
    this.message = null;
    this.error = null;
    this.result = null;
    this.data = null;
  }

  static async createRequest(requestPromise) {
    const response = new Response();

    try {
      response.result = await requestPromise();
    } catch (err) {
      response.error = err;
    }
    return response;
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
