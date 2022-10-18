import axios from "axios";

export const booksApi = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {'Accept': 'application/json'}
});

booksApi.defaults.withCredentials = true;

export const registerUser = async(user)=>{
    let response;
    try {
        await booksApi.get("sanctum/csrf-cookie");
        response = await booksApi.post("api/register",user);
    } catch (error) {
        console.error(error);
    }

    return response.data;
}

export const loginUser = async(user)=>{
    let response;
    try {
        await booksApi.get("sanctum/csrf-cookie");
        response = await booksApi.post("api/login",user);
    } catch (error) {
        console.error(error);
    }

    return response.data;
}

export const logoutUser = async(userToken)=>{
    let response;
    try {
        response = await booksApi.post("api/logout",{},{
            headers: {
              'Authorization': `Bearer ${userToken}` 
            }
          });
    } catch (error) {
        console.error(error);
    }

    return response.data;
}


//====BOOKS====//

export const fetchBooks = async()=> {
    let books;
    try {
        books = await booksApi.get("api/books");
        books.data.map( book => {
            if(book.url === null){
                book.url = "";
            }
            if(book.image_url === null){
                book.image_url = "";
            }
        })
      } catch (error) {
        console.error(error);
    }
    
    return books.data;
}

export const postBook = async(book,userToken)=>{
    let response;
    try {
        response = await booksApi.post("api/books",book,{
            headers: {
              'Authorization': `Bearer ${userToken}` 
            }
          });
    } catch (error) {
        console.error(error);
    }

    return response.data;
}

export const searchBooks = async(title)=>{
    let response;
    try {
        response = await booksApi.get(`api/books/search/${title}`);
    } catch (error) {
        console.error(error);
    }

    return response.data;
}

export const putBook = async(id, book,userToken)=>{
    let response;
    try {
        response = await booksApi.put(`api/books/${id}`,book,{
            headers: {
              'Authorization': `Bearer ${userToken}` 
            }
          });
    } catch (error) {
        console.error(error);
    }

    return response.data;
}

export const deleteBook = async(id,userToken)=>{
    let response;
    try {
        response = await booksApi.delete(`api/books/${id}`,{
            headers: {
              'Authorization': `Bearer ${userToken}` 
            }
          });
    } catch (error) {
        console.error(error);
    }

    return response.data;
}
