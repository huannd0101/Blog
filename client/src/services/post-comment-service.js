import HttpService from "./http-service";

class PostCommentService extends HttpService {
  async getAllPostComment() {
    try {
      const res = await this.get("post-comments");

      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getPostCommentById(id) {
    try {
      const res = await this.get(`post-comments/${id}/detail`);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getAllPostCommentByUserId(userId) {
    try {
      const res = await this.get(`post-comments/${userId}`);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteCommentById(id) {
    try {
      const res = await this.delete(`post-comments/${id}`);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new PostCommentService();
