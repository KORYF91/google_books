import axios from 'axios';

export default {
    getBookInfo: function (title) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" +title );
    },
    getSavedBooks: function(){
        return axios.get("/api/books");
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData)
    },
    deleteBook: function(id){
        return axios.delete("/api/books" +id);
    }
}