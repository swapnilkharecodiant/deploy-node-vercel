import { Router } from "express";
import controller from "../controller";
import validations from '../validations';
import middlewares from "../middlewares";

const router = Router();
const { userController } = controller;
const { userValidator } = validations;
const { validateMiddleware } = middlewares;
router.post(
    '/contact',
    validateMiddleware({ schema: userValidator.userProfileUpdateSchema }), 
    userController.addUser
);

export default router;