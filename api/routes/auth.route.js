import express from "express";
import { signup } from "../controller/signup.controller.js";

const route=express.Router();

route.post("/signup",signup)

export default route;