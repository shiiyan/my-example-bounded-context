import { Application } from "./application";
import { ForumController } from "./boundedContexts/collaboration/port/http/controller/forumController";

new Application([new ForumController()], 8000).listen();
