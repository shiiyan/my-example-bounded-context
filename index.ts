import { Application } from "./app";
import { ForumController } from "./controllers/forumController";

new Application([new ForumController()]).listen();
