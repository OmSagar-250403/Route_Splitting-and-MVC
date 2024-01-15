import express from "express";
import Msg from "../models/user.js";
import { getallusers , get_id , registeruser} from "../controllers/user.js";

const router = express.Router();

router.get('/all',getallusers)

router.get('/userid',get_id)

router.post('/users',registeruser)


export default router;