import { Application } from "./application";
import { ForumController } from "./controllers/forumController";

new Application([new ForumController()], 8000).listen();
