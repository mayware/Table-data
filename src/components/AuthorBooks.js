const AuthorBooks = ({ author }) => {
    return (
        <div className="author-books-list">
            {author.items.map((book) => (
                <div className="author-book-row" key={book.id}>
                    {book.volumeInfo.title}
                </div>
            ))}
        </div>
    );
}

export default AuthorBooks;