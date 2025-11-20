import dotenv from "dotenv";
dotenv.config();

import { createServer } from "./server";

const app = createServer();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
