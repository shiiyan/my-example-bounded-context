import { ForumController } from "@collaboration/port/adaptor/http/controller/forumController";
import { Application } from "./application";
import "dotenv/config";

new Application([new ForumController()], Number(process.env.PORT)).listen();
