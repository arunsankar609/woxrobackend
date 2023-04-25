import locationUpdation from "../mongodb/models/contentUpdation.js";
import numberUpdation from "../mongodb/models/numberUpdation.js";
import captionUpdation from "../mongodb/models/captionUpdation.js";

const addLocation = async (req, res) => {
  try {
    const { caption,location,number } = req.body;
    const newContent = new locationUpdation({ caption,location,number });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const findAllLocations = async (req, res) => {
    try {
      const locations = await locationUpdation.find();
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const findLocationById = async (req, res) => {
    try {
      const location = await locationUpdation.findById(req.params.id);
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      res.status(200).json(location);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const editLocation = (req, res) => {
  const contentId = req.params.id;

  locationUpdation
    .findById(contentId)
    .then((content) => {
      content.location = req.body.location;
      content.caption=req.body.caption;
      content.number=req.body.number
      return content.save();
    })
    .then(() => {
      res.status(200).send("location updated successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error updating product");
    });
};

const addNumber = async (req, res) => {
  try {
    const { number } = req.body;
    const newContent = new numberUpdation({ number });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const findNumberById = async (req, res) => {
    try {
      const number = await numberUpdation.findById(req.params.id);
      if (!number) {
        return res.status(404).json({ message: 'Location not found' });
      }
      res.status(200).json(number);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
const editNumber = (req, res) => {
  const numberId = req.params.id;

  numberUpdation
    .findById(numberId)
    .then((content) => {
      content.number = req.body.number;
      return content.save();
    })
    .then(() => {
      res.status(200).send("number updated successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error updating product");
    });
};
const addcaption = async (req, res) => {
  try {
    const { caption } = req.body;
    const newContent = new captionUpdation({ caption });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const editcaption = (req, res) => {
  const captionId = req.params.id;

  captionUpdation
    .findById(captionId)
    .then((content) => {
      content.caption = req.body.caption;
      return content.save();
    })
    .then(() => {
      res.status(200).send("caption updated successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("caption updating product");
    });
};
const findcaptionById = async (req, res) => {
    try {
      const caption = await captionUpdation.findById(req.params.id);
      if (!caption) {
        return res.status(404).json({ message: 'Location not found' });
      }
      res.status(200).json(caption);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export {
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
};
