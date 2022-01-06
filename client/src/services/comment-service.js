import HttpService from "./http-service";

class CommentService extends HttpService {
  async getAllComments() {
    try {
      const res = await this.get("comments");

      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getCommentByUserId(userId) {
    try {
      const res = await this.get(`post-comments/${userId}`);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async createNewComment(idPost, comment) {
    try {
      const res = await this.post(`post-comments/${idPost}`, {
        body: comment,
      });
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new CommentService();
