import app from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/db";
connectDB();
const PORT = env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});