const mongoose = require("mongoose");
const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    if (
      !mongoose.Types.ObjectId.isValid(user) ||
      !mongoose.Types.ObjectId.isValid(devId)
    ) {
      return res.status(400).send({ error: "Invalid user id provided" });
    }

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).send({ error: "Dev doesn't exist" });
    }

    loggedDev.dislikes.push(targetDev._id);
    await loggedDev.save();

    res.send(loggedDev);
  }
};
