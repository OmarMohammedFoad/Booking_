import express from "express";
import Hotels from "../models/Hotels.js";
import {CreateHotel, deleteHotel, getlall, get_by_id, UpdateHotel} from "../controller/hotel.js"
const router  = express.Router();


// create

router.post("/",CreateHotel
)


// update
router.put("/:id",UpdateHotel)



// delete
router.delete("/:id",deleteHotel
)

// get_by_id
router.get("/:id",get_by_id)
// getlall
router.get("/",getlall
)


export default router;