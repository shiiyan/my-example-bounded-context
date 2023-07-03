import { Moderator } from "@collaboration/domain/moderator";
import { UUID } from "@common/domain/uuid";

export class Forum {
  private _id: UUID;
  private _subject: string;
  private _moderator: Moderator;

  public get id(): UUID {
    return this._id;
  }

  public get subject(): string {
    return this._subject;
  }

  public changeSubject({
    value,
    moderator,
  }: {
    value: string;
    moderator: Moderator;
  }): void {
    if (!this.moderator.equals(moderator)) {
      throw new Error("Not the moderator of this forum.");
    }

    this._subject = value;
  }

  public get moderator(): Moderator {
    return this._moderator;
  }

  public moderatePost({
    post,
    subject,
    body,
    moderator,
  }: {
    post: Post;
    subject: string;
    body: string;
    moderator: Moderator;
  }) {
    if (post.forumId !== this._id) {
      throw new Error("Not a post of this forum.");
    }

    if (!this.moderator.equals(moderator)) {
      throw new Error("Not the moderator of this forum.");
    }

    post.changeContent(subject, body);
  }
}
