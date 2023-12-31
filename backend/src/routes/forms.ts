import express from "express"

import * as FormsController from "../controllers/forms"

const router  = express.Router()

router.get("/",FormsController.getForms)
router.get("/:formId",FormsController.getFormWithId)
router.post("/",FormsController.createFrom)
router.post("/reponce",FormsController.createReponses)


export default router;