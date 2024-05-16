import httpStatus from "http-status";
import supabase from "../models";
import repositories from "../repositories";


const { userRepository } = repositories;

export default {
    async getUser(req, res, next) {
        try {
            const { email } = req?.query;
            console.log('email :', email);
            const { error, data, status } = await supabase.from('User')
                .select('*')
                .eq('email', email)
                .single();
            if (data) {
                return res
                .status(httpStatus.OK)
                .json({ status: true, data: data });
            } else {
                return res
                .status(httpStatus.BAD_REQUEST)
                .json({ message: "Email not exists", status: false });
            }
        } catch (error) {
            next(error);
        }
    },

    async addUser(req, res, next) {
        try {
            try {
                const { email } = req?.body;
                const { error, data, status } = await supabase.from('User')
                    .select('*')
                    .eq('email', email)
                    .single();
                if (data && status === 200) {
                    return res
                        .status(httpStatus.CONFLICT)
                        .json({ message: "Email already exists", status: false });
                }
                const result = await userRepository.signup(req);
                if (result) {
                  return res
                    .status(httpStatus.OK)
                    .json({ message: "Submitted", status: true, data: result });
                } else {
                  console.log(error);
                  return res
                    .status(httpStatus.BAD_REQUEST)
                    .json({ message: "Bad request", status: false });
                }
            } catch (error) {
                next(error);
            }
        } catch (error) {
            console.log('✌️error --->', error);
            next(error);
        }
    }
}