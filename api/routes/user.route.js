import express from "express";
import { fileserve } from "../controller/user.controller.js";

const route=express.Router();

route.get("/test",fileserve)

export default route;