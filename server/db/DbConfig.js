import mongoose from "mongoose";

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connection.on("error", err => {
  console.error("[DATABASE ERROR]:", err);
});
mongoose.connection.on("open", () => {
  console.log("DbConnection Successful");
});

export default class DbConnection {
  static async connect(connectionstring = process.env.CONNECTION_STRING || "") {
    let status = 0;
    try {
      let status = await mongoose.connect(connectionstring);
      return status;
    } catch (e) {
      console.error(
        "[MONGOOSE CONNECTION ERROR]:",
        "Invalid connection string"
      );
      return status;
    }
  }
}
