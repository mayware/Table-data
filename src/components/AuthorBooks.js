import { Link } from "react-router-dom";

const AuthorBooks = ({ author, selectBook }) => {

    return (
        <div className="author-books-list">
            {author.items.map((book) => (
                <Link to="/selected" className="author-book-row" key={book.id} onClick={() => { selectBook(book) }}>
                    <div className="author-book-title">
                        {book.volumeInfo.authors}
                    </div>
                    <div className="author-book-title">
                        {book.volumeInfo.title}
                    </div>
                    <div className="author-book-kind">
                        {book.volumeInfo.categories ? (book.volumeInfo.categories) : (<span className="unavailable-msg">Book genre is unavailable</span>)}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default AuthorBooks;