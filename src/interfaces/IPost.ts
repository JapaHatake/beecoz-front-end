import { IInteresed } from "./IInterested";

export interface IPost {
    id: number;
    title: string;
    tags: Array<string>;
    imageSource: string;
    interested: Array<IInteresed>;
  }