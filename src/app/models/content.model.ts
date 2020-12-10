export class Chapter {
    id : number;
    title : string;
    content : string;
    userId : number;
    date : Date;
    lastChapterI? : number;
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