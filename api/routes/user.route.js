import express from "express";
import { fileserve, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const route=express.Router();

route.get("/test",fileserve)
route.post("/update/:id",verifyToken,updateUser)

export default route;
