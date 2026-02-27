import { Router } from "express";

import { getHello } from "../controllers/HelloWorldController.js";

const router: Router = Router();

router.get('/', getHello)

export default router;