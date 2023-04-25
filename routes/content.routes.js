import express from "express";

import {
  addLocation,
  addNumber,
  addcaption,
  editLocation,
  editNumber,
  editcaption,
  findAllLocations,
  findLocationById,
  findNumberById,
  findcaptionById
} from "../controllers/content.controller.js";

const router = express.Router();

// POST route for creating new content
router.post("/addlocation", addLocation);
router.get("/addlocation", findAllLocations);
router.get("/addlocation/:id", findLocationById);
router.post("/addlocation/:id", editLocation);
router.post("/addnumber", addNumber);
router.get("/addnumber/:id", findNumberById);
router.post("/addnumber/:id", editNumber);
router.post("/addcaption", addcaption);
router.post("/addcaption/:id", editcaption);
router.get("/addcaption/:id", findcaptionById);

export default router;
