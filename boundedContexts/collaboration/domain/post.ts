import { UUID } from "@common/domain/uuid";
import { Forum } from "./forum";
import { Validator } from "@common/validation/validator";

export class Post {
  private _id: UUID;
  private _subject: string;
  private _body: string;
  private _discuccionId: UUID;
  private _forumId: UUID;

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

  /**
   * @access \@collaboration/domain/*
   * @param {{
   *     subject: string;
   *     body: string;
   *   }} {
   *     subject,
   *     body,
   *   }
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
