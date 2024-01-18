import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const resp = await axios.get("http://localhost:8800/books")
                console.log(resp)
                setBooks(resp.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    return (
        <div>
            <h1>Book Shop</h1>
            <div className="books">
                {books.map((book) => (
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <h1>{book.title}</h1>
                        <p>{book.description}</p>
                        {/* <span>{book.price}</span> */}
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">
                    Add new book
                </Link>
            </button>
        </div>
    )
}

export default Books