import httpStatus from "http-status";
import repositories from "../repositories";

const { userRepository } = repositories;

export default {
    async getUser(req, res, next) {
        try {
            const result = await userRepository.getUser(req);
            if (result) {
                return res
                .status(httpStatus.OK)
                .json({ status: true, data: result });
            } else {
                return res
                .status(httpStatus.BAD_REQUEST)
                .json({ message: "Bad request", status: false });
            }
        } catch (error) {
            next(error);
        }
    },

    async addUser(req, res, next) {
        try {
            try {
                const result = await userRepository.signup(req);
                if (result) {
                    return res
                    .status(httpStatus.OK)
                    .json({ message: "Submitted", status: true, data: result });
                } else {
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