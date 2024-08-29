import { Router } from "express";
import { make_title } from "../controllers/make_title.js";
import { make_topic } from "../controllers/make_topic.js";
const router=new Router();

//router.get('/logros/table', get_notas)

router.post('/title', make_title)

router.post('/topic', make_topic)

router.post('/activity', make_title)



export default router