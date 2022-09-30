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

export const loginUser = async(user)=>{
    let response;
    try {
        response = await booksApi.post("login",user);
    } catch (error) {
        console.error(error);
    }

    return response;
}

export const logoutUser = async(token)=>{ //TODO: MIGHT CHANGE THIS LOGIC AND SET THE TOKEN UP IN THE AXIOS INSTANCE
    let response;
    try {
        response = await booksApi.post("logout",{},{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          });
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

export const searchBooks = async(title)=>{
    let response;
    try {
        response = await booksApi.get(`books/search/${title}`);
    } catch (error) {
        console.error(error);
    }

    return response;
}

export const editBook = async(id, book)=>{
    let response;
    try {
        response = await booksApi.put(`books/${id}`,book);
    } catch (error) {
        console.error(error);
    }

    return response;
}

export const deleteBook = async(id)=>{
    let response;
    try {
        response = await booksApi.delete(`books/${id}`);
    } catch (error) {
        console.error(error);
    }

    return response;
}
