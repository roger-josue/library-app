import axios from "axios";


export const booksApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {'Accept': 'application/json'}
});

export const registerUser = async(user)=>{
    let response;
    try {
        response = await booksApi.post("register",user);
    } catch (error) {
        console.error(error);
    }

    return response;
}

//====BOOKS====//

export const fetchBooks = async()=> {
    let books;
    try {
        books = await booksApi.get("books");
      } catch (error) {
        console.error(error);
    }
    
    return books.data;
}

export const postBook = async(book)=>{
    let response;
    try {
        response = await booksApi.post("books",book);
    } catch (error) {
        console.error(error);
    }

    return response;
}
