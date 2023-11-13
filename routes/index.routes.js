
import { Router } from "express";

const router = Router();
const baseURL = "/api";

router.get('/', (req, res) => {
    return res.send("Hello World");
})


router.get(`${baseURL}/employees`, (req, res) => {
    return res.send("Hired!");
})

router.post(`${baseURL}/employees`, (req, res) => {
    console.log("Ocurrio un post!");
})


export default router;