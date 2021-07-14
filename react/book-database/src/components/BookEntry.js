import React, {useState} from 'react'
import BookRender from './BookRender'

function BookEntry(){
    const [BookTitle, setBookTitle] = useState("")
    const [Author, setAuthor] = useState("")
    const [Cover, setCover] = useState("")
    const [BookStatus, setBookStatus] = useState("")
    const [Books, setBooks] = useState([])
    
    function handleChange(event){
        const {name, value} = event.target;
        if (name === "BookTitle"){
            setBookTitle(value)
        }
        else if (name === "Author"){
            setAuthor(value)
        }
        else if (name === "Cover"){
            setCover(value)
        }
        else if (name === "BookStatus"){
            setBookStatus(value)
        }
    }
    
    function handleSubmit(event){
        if (BookTitle != "" && Author != "" && Cover != "" && BookStatus != ""){
            setBooks(prevBooks => prevBooks.concat({BookTitle, Author, Cover, BookStatus}))
            setBookTitle("")
            setAuthor("")
            setBookStatus("")
            setCover("")
            event.preventDefault()
        }
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="EntryForms"
                    type="text"
                    value={BookTitle}
                    name="BookTitle"
                    onChange={handleChange}
                    placeholder="Title"
                    />
                <br />
                <input
                    className="EntryForms"
                    type="text"
                    value={Author}
                    name="Author"
                    onChange={handleChange}
                    placeholder="Author"
                    />
                <br />
                <input
                    className="EntryForms"
                    type="text"
                    value={Cover}
                    name="Cover"
                    onChange={handleChange}
                    placeholder="Cover URL"
                    />
                <br />
                <p id="MyText">Do you have it or want it?</p>
                <label>
                    <input
                        className="BookStatusOption"
                        type="radio"
                        name="BookStatus"
                        value="Have"
                        checked={BookStatus === "Have"}
                        onChange={handleChange}
                    /> Have
                </label>
                <label>
                    <input
                        className="BookStatusOption"
                        type="radio"
                        name="BookStatus"
                        value= "Want"
                        checked= {BookStatus === "Want"}
                        onChange={handleChange}
                    /> Want
                </label>
                <br />
                <button className="EntryForms">Submit</button>
            </form>
            {Books.map((bookInfo, index) => <BookRender
                    key={index}
                    BookTitle={bookInfo.BookTitle}
                    Author={bookInfo.Author}
                    Cover={bookInfo.Cover}
                    BookStatus={bookInfo.BookStatus}
                    />)
            }
        </div>
    )
}

export default BookEntry