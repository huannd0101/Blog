import HttpService from "./http-service";

class PostService extends HttpService {
  async getAllPost() {
    try {
      const res = await this.get("posts");

      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getPostById(id) {
    try {
      const res = await this.get(`posts/${id}`);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new PostService();
