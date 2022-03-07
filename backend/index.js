const app = require("./server");
const connectDb = require("./db");
const dotenv = require("dotenv");
const http = require("./server");
dotenv.config();

const port = process.env.PORT || 5000;
connectDb();

http.listen(port, () => {
  console.log(`started on port ${port}`);
});
