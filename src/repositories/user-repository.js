import supabase from "../models";

export default {
  async signup(req) {
    try {
      const bodyData = req.body;
      const { error, data, status } = await supabase.from('User')
        .insert(bodyData)
      if (status === 200 || status === 201) return bodyData;
      if (error) {
        return false;
      }
    } catch (error) {
      console.log("error error error error error error error error ");
      console.log(error);
      throw Error(error);
    }
  },
}