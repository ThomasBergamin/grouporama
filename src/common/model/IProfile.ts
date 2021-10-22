export interface IProfile {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly email: string;
  readonly posts: string[];
  readonly comments: string[];
  readonly bookmarkedPosts: string[];
}
