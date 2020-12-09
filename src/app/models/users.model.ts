export class User {
    id : number;
    username : string;
    mail : string;
    token : string;
    isActive : boolean;
    isAdmin : boolean;
}

export class NewUser {
    username : string;
    mail : string;
    password : string;
}