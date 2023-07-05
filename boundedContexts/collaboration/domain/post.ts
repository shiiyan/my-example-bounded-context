import { UUID } from "@common/domain/uuid";
import { Validator } from "@common/validation/validator";
import { Author } from "@collaboration/domain/author";

export class Post {
  private _id: UUID;
  private _subject: string;
  private _body: string;
  private _discuccionId: UUID;
  private _forumId: UUID;
  private _author: Author;

  private constructor({
    subject,
    body,
    discussionId,
    forumId,
    author,
  }: {
    subject: string;
    body: string;
    discussionId: UUID;
    forumId: UUID;
    author: Author;
  }) {
    Validator.assertArgumentNotEmpty({ subject });
    Validator.assertArgumentNotEmpty({ body });

    this._id = new UUID();
    this._subject = subject;
    this._body = body;
    this._discuccionId = discussionId;
    this._forumId = forumId;
    this._author = author;
  }

  /**
   * @access \@collaboration/domain/*
   * @memberof Post
   */
  public static _CreateNew({
    subject,
    body,
    discussionId,
    forumId,
    author,
  }: {
    subject: string;
    body: string;
    discussionId: UUID;
    forumId: UUID;
    author: Author;
  }): Post {
    return new Post({
      subject,
      body,
      discussionId,
      forumId,
      author,
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
