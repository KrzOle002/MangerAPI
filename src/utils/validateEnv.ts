import { cleanEnv, port, str } from "envalid";
import "dotenv/config";

export default cleanEnv(process.env, {
    MONGODB_CONNECT: str(),
    PORT: port(),
});
