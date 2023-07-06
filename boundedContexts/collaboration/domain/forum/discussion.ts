import { UUID } from "@common/domain/uuid";
import { Post } from "@collaboration/domain/forum/post";
import { Author } from "@collaboration/domain/collaborator/author";
import { Validator } from "@common/validation/validator";

export class Discussion {
  private _id: UUID;
  private _forumId: UUID;
  private _subject: string;
  private _author: Author;
  private _isClosed: boolean;

  private constructor({
    forumId,
    subject,
    author,
  }: {
    forumId: UUID;
    subject: string;
    author: Author;
  }) {
    Validator.assertArgumentNotEmpty({ subject });

    this._id = new UUID();
    this._forumId = forumId;
    this._subject = subject;
    this._author = author;
    this._isClosed = false;
  }

  /**
   * @access \@collaboration/domain/*
   * @memberof Discussion
   */
  public static _createNew({
    forumId,
    subject,
    author,
  }: {
    forumId: UUID;
    subject: string;
    author: Author;
  }): Discussion {
    return new Discussion({
      forumId,
      subject,
      author,
    });
  }

  public get id(): UUID {
    return this._id;
  }

  public set id(value: UUID) {
    this._id = value;
  }

  public get forumId(): UUID {
    return this._forumId;
  }

  public set forumId(value: UUID) {
    this._forumId = value;
  }

  public get subject(): string {
    return this._subject;
  }

  public set subject(value: string) {
    this._subject = value;
  }

  public get author(): Author {
    return this._author;
  }

  public set author(value: Author) {
    this._author = value;
  }

  public get isClosed(): boolean {
    return this._isClosed;
  }

  public close() {
    Validator.assertStateFalse({ isClosed: this.isClosed });

    this._isClosed = true;
  }

  public post({
    subject,
    body,
    author,
  }: {
    subject: string;
    body: string;
    author: Author;
  }): Post {
    Validator.assertStateFalse({ isClosed: this.isClosed });

    return Post._createNew({
      subject,
      body,
      discussionId: this.id,
      forumId: this.forumId,
      author,
    });
  }
}
