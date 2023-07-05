import { UUID } from "@common/domain/uuid";
import { Author } from "@collaboration/domain/author";
import { Post } from "@collaboration/domain/post";

export class Discussion {
  private _id: UUID;
  private _forumId: UUID;
  private _subject: string;
  private _author: Author;

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

  public post({
    subject,
    body,
    author,
  }: {
    subject: string;
    body: string;
    author: Author;
  }): Post {
    return new Post({
      subject,
      body,
      discussionId: this._id,
      forumId: this._forumId,
      author,
    });
  }
}
