import { User } from "./users.model";

export class Chapter {
    id : number;
    title : string;
    content : string;
    date : Date;
    writer : User;
    lastChapterId : number;
    encyclopedia : string;
}

export class ChapterToApi {
    id : number;
    title : string;
    content : string;
    date : Date;
    userId : number;
    lastChapterId : number;
    encyclopedia : string;
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