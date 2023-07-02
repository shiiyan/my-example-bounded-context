import { ForumController } from "@collaboration/port/http/controller/forumController";
import { Application } from "./application";

new Application([new ForumController()], 8000).listen();
