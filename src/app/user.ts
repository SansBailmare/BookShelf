export  class  User {
    id: number;
    name:string;
    email:  string;
    password:  string;
    interests: string;
}

export class Books{
    book_id: number;
    book_title: string;
    book_author: string;
    book_desc: string;
    book_image: Blob;
    book_store: string;
    book_type: string;
    book_price: number;
    
}

export class Update_FetchCategory{
    id:number;
    category:string;
}