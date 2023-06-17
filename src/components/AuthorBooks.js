import { Link } from "react-router-dom";

const AuthorBooks = ({ author, selectBook }) => {

    return (
        <div className="author-books-list">
            {author.items.map((book) => (
                <Link to={`/selected/${book.id}`} className="author-book-row" key={book.id} onClick={() => { selectBook(book) }}>
                    <div className="author-book-author">
                        {book.volumeInfo.authors ? (book.volumeInfo.authors) : (<span className="unavailable-msg">Author is unavailable</span>)}
                    </div>
                    <div className="author-book-title">
                        {book.volumeInfo.title ? (book.volumeInfo.title) : (<span className="unavailable-msg">Author is unavailable</span>)}
                    </div>
                </Link>
            ))
            }
        </div>
    );
}

export default AuthorBooks;