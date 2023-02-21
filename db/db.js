const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://ynniraj:neeraj232@cluster0.5lca04h.mongodb.net/?retryWrites=true&w=majority"
  );
};
