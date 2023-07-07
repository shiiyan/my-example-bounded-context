import { CollaboratorServiceInterface } from "@collaboration/domain/collaborator/collaboratorServiceInterface";
import { Forum } from "@collaboration/domain/forum/forum";

export class ForumApplicationService {
  private collaboratorService: CollaboratorServiceInterface;

  constructor({
    collaboratorService,
  }: {
    collaboratorService: CollaboratorServiceInterface;
  }) {
    this.collaboratorService = collaboratorService;
  }

  public startForum({
    subject,
    moderatorId,
  }: {
    subject: string;
    moderatorId: string;
  }): void {
    const moderator = this.collaboratorService.createModeratorFrom(moderatorId);
    const forum = new Forum({ subject, moderator });
  }
}
