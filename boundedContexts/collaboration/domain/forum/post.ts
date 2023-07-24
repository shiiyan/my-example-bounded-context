import { UUID } from "@common/domain/uuid";
import { Validator } from "@common/validation/validator";
import { Author } from "@collaboration/domain/collaborator/author";

export class Post {
  private _id: UUID;
  private _subject: string;
  private _body: string;
  private _discuccionId: UUID;
  private _forumId: UUID;
  private _author: Author;
  private _replyToPostId: UUID;

  private constructor({
    subject,
    body,
    discussionId,
    forumId,
    author,
    replyToPostId,
  }: {
    subject: string;
    body: string;
    discussionId: UUID;
    forumId: UUID;
    author: Author;
    replyToPostId: UUID;
  }) {
    Validator.assertArgumentNotEmpty({ subject });
    Validator.assertArgumentNotEmpty({ body });

    this._id = UUID.createNew();
    this._subject = subject;
    this._body = body;
    this._discuccionId = discussionId;
    this._forumId = forumId;
    this._author = author;
    this._replyToPostId = replyToPostId;
  }

  /**
   * @access \@collaboration/domain/*
   * @memberof Post
   */
  public static _createNew({
    subject,
    body,
    discussionId,
    forumId,
    author,
    replyToPostId,
  }: {
    subject: string;
    body: string;
    discussionId: UUID;
    forumId: UUID;
    author: Author;
    replyToPostId: UUID;
  }): Post {
    return new Post({
      subject,
      body,
      discussionId,
      forumId,
      author,
      replyToPostId,
    });
  }

  public get id(): UUID {
    return this._id;
  }

  public set id(value: UUID) {
    this._id = value;
  }

  public get subject(): string {
    return this._subject;
  }

  public set subject(value: string) {
    this._subject = value;
  }

  public get body(): string {
    return this._body;
  }

  public set body(value: string) {
    this._body = value;
  }

  public get discuccionId(): UUID {
    return this._discuccionId;
  }

  public set discuccionId(value: UUID) {
    this._discuccionId = value;
  }

  public get forumId(): UUID {
    return this._forumId;
  }

  public set forumId(value: UUID) {
    this._forumId = value;
  }

  public get author(): Author {
    return this._author;
  }

  public set author(value: Author) {
    this._author = value;
  }

  public get replyToPostId(): UUID {
    return this._replyToPostId;
  }

  public set replyToPostId(value: UUID) {
    this._replyToPostId = value;
  }

  /**
   * @access \@collaboration/domain/*
   * @memberof Post
   */
  public _changeContent({
    subject,
    body,
  }: {
    subject: string;
    body: string;
  }): void {
    Validator.assertArgumentNotEmpty({ subject });
    Validator.assertArgumentNotEmpty({ body });

    this._subject = subject;
    this._body = body;
  }
}
