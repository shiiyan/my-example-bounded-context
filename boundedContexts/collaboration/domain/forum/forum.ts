import { UUID } from "@common/domain/uuid";
import { Validator } from "@common/validation/validator";
import { Post } from "./post";
import { Moderator } from "@collaboration/domain/collaborator/moderator";

export class Forum {
  private _id: UUID;
  private _subject: string;
  private _moderator: Moderator;
  private _isClosed: boolean;

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
    this._isClosed = false;
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

  public get isClosed(): boolean {
    return this._isClosed;
  }

  public close() {
    Validator.assertStateFalse({ isClosed: this._isClosed });

    this._isClosed = true;
  }

  public changeSubject({
    subject,
    moderator,
  }: {
    subject: string;
    moderator: Moderator;
  }): void {
    Validator.assertStateFalse({ isClosed: this._isClosed });
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
    Validator.assertStateFalse({ isClosed: this._isClosed });
    Validator.assertArgumentTrue({
      hasOwnership: this.hasOwnership(post),
    });

    Validator.assertArgumentTrue({
      canModerated: this.canModeratedBy(moderator),
    });

    post._changeContent({ subject, body });
  }

  private hasOwnership(post: Post): boolean {
    return this._id.equals(post.forumId);
  }

  private canModeratedBy(moderator: Moderator): boolean {
    return this.moderator.equals(moderator);
  }
}