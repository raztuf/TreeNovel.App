import { User } from "./users.model";

export class Chapter {
    id : number;
    title : string;
    content : string;
    date : Date;
    writer : User;
    lastChapterId : number;
    encyclopedia : string;
    categoryName : string;
}

export class ChapterToApi {
    id : number;
    title : string;
    content : string;
    date : Date;
    userId : number;
    lastChapterId : number;
    encyclopedia : string;
    categoryName : string;
}

export class CommentToApi {
    id : number;
    content : string;
    date : Date;
    userId : number;
    chapterId : number;
}

export class Comment {
    id : number;
    content : string;
    date : Date;
    writer : User;
    chapterId : number;
}

export class DiscussionToApi {
    id : number;
    title : string;
    content : string;
    userId : number;
    date : Date;
    replyToId : number;
}

export class Discussion {
    id : number;
    title : string;
    content : string;
    writer : User;
    date : Date;
    replyToId : number;
}

export class Article {
    id : number;
    title : string;
    date : Date;
    content : string;
}

export class Report {
    id : number;
    title : string;
    userId : number;
    date : Date;
    content : string;
    subject : string;
}

export class Category {
    id : number;
    name : string;
    sidebar : string;
}