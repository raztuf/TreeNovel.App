import { User } from "./users.model";

export class Chapter {
    id : number;
    title : string;
    content : string;
    date : Date;
    lastChapterI? : number;
    encyclopedia : string;
    writer : User;
}

export class Comment {
    id : number;
    content : string;
    date : Date;
    userId : number;
    chapterId : number;
}

export class Discussion {
    id : number;
    title : string;
    content : string;
    userId : string;
    date : Date;
    replyToId? : number;
}