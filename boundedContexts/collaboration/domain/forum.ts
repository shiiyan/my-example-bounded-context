import { Moderator } from "@collaboration/domain/moderator";
import { UUID } from "@common/domain/uuid";
import { InvalidArgumentException } from "@common/exception/invalidArgumentException";
import { Validator } from "@common/validation/validator";
import { Post } from "./post";

export class Forum {
  private _id: UUID;
  private _subject: string;
  private _moderator: Moderator;

  constructor({
    id,
    subject,
    moderator,
  }: {
    id: UUID;
    subject: string;
    moderator: Moderator;
  }) {
    Validator.assertArgumentNotEmpty({ subject });

    this._id = id;
    this._subject = subject;
    this._moderator = moderator;
  }

  public get id(): UUID {
    return this._id;
  }

  public get subject(): string {
    return this._subject;
  }

  public get moderator(): Moderator {
    return this._moderator;
  }

  public changeSubject({
    subject,
    moderator,
  }: {
    subject: string;
    moderator: Moderator;
  }): void {
    Validator.assertArgumentTrue({
      canModerated: this.canModeratedBy(moderator),
    });
    Validator.assertArgumentNotEmpty({ subject });

    this._subject = subject;
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

    Validator.assertArgumentTrue({
      canModerated: this.canModeratedBy(moderator),
    });

    post._changeContent({subject, body});
  }

  private canModeratedBy(moderator: Moderator): boolean {
    return this.moderator.equals(moderator);
  }
}
