import { Moderator } from "@collaboration/domain/collaborator/moderator";

export interface CollaboratorServiceInterface {
  createModeratorFrom(moderatorId: string): Moderator;
}
