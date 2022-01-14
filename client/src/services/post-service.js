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

  async searchPostByKey(key) {
    try {
      const res = await this.get(`posts/search?key=${key}`);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async createNewPost(id, postDTO) {
    try {
      const res = await this.post(`posts/${id}`, {
        body: postDTO,
      });
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deletePostById(id) {
    try {
      const res = await this.delete(`posts/${id}`);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async editPostById(id, postDTO) {
    try {
      const res = await this.patch(`posts/${id}`, {
        body: postDTO,
      });
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new PostService();
