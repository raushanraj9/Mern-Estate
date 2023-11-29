import express from "express";
import { deleteUser, fileserve, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const route=express.Router();

// route.get("/test",fileserve)
route.post("/update/:id",verifyToken,updateUser);
route.delete("/delete/:id",verifyToken,deleteUser);

export default route;
