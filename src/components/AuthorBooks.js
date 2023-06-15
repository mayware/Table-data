import { Link } from "react-router-dom";

const AuthorBooks = ({ author, selectBook }) => {

    return (
        <div className="author-books-list">
            {author.items.map((book) => (
                <Link to={`/selected/${book.id}`} className="author-book-row" key={book.id} onClick={() => { selectBook(book) }}>
                    <div className="author-book-author">
                        {book.volumeInfo.authors}
                    </div>
                    <div className="author-book-title">
                        {book.volumeInfo.title}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default AuthorBooks;