import { Router } from "express";
import { make_title } from "../controllers/set_title.js";
const router=new Router();

//router.get('/logros/table', get_notas)

router.post('/title', make_title)

router.post('/topic', make_title)

router.post('/activity', make_title)



export default router