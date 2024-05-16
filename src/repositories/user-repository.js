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
      console.log('bodyData :', bodyData);
      const data = await db.users.create(bodyData);
      return data;
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  },
}