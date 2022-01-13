import HttpService from "./http-service";

class ContactService extends HttpService {
  async createNewContact(dto) {
    try {
      const res = await this.post("/contacts", {
        body: {
          name: dto.name,
          email: dto.email,
          message: dto.message,
        },
      });

      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getAllContact() {
    try {
      const res = await this.get("/contacts");
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteContactById(id) {
    try {
      const res = await this.delete("/contacts/" + id);
      return res.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new ContactService();
