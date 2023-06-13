import '../styles/details.css'

const BookDetails = ({ selectedRow }) => {
    return (
        <div className="content">
            <div className="details-table">
                <div className="selected-row-info">
                    <div className="book-cover">
                        {selectedRow.volumeInfo.imageLinks ? (
                            <img
                                src={selectedRow.volumeInfo.imageLinks.thumbnail}
                                alt="book-cover"
                                className="book-cover-img"
                            />
                        ) : (
                            <div className="cover-unavailable-info">Book cover is unavailable</div>
                        )}
                    </div>
                    <div className="books-brief-info">

                    </div>
                    <div className="books-desc-info">

                    </div>
                </div>
                <div className="authors-books-list"></div>
            </div>
        </div>
    );
}

export default BookDetails;