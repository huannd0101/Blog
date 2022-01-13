import HttpService from "./http-service";

class UserService extends HttpService {
  async getAllUser() {
    try {
      const res = await this.get("/users");

      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getUserById(id) {
    try {
      const res = await this.get(`/users/${id}`);

      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new UserService();
