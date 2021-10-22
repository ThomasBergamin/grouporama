export interface IPost {
  readonly id: string;
  readonly authorId: string;
  readonly title: string;
  readonly file: string;
  readonly comments: string[];
}
