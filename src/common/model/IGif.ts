import { IComment } from './IComment';
export interface IGif {
  readonly id: string;
  readonly userId: string;
  readonly title: string;
  readonly url: string;
  readonly isAFile?: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly comments?: IComment[];
}
