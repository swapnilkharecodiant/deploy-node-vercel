import { db } from "../../server";

export default {
  async getUser(req) {
    try {
      const data = await db.users.findMany();
      return data;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  },
  async signup(req) {
    try {
      const bodyData = req.body;
      const data = await db.users.create({
        data: bodyData
      });
      return data;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  },
}