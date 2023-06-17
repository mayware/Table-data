import '../styles/details.css'
import AuthorBooks from './AuthorBooks';
import useAxios from '../useAxios';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const BookDetails = ({ selectedRow, selectBook, selectBookId }) => {
    const { id } = useParams();
    const { data: author, error, loading } = useAxios(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${selectedRow.volumeInfo.authors[0]}&key=AIzaSyB_DtGjM49I7Rk-CLkYoxN5odpW68vUdyM&maxResults=16`);

    useEffect(() => {
        selectBookId(id);
    }, [id, selectBookId])

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
                        <div className="book-author book-info">
                            <span className='book-key-title'>Author:</span>
                            <span className='book-value'>
                                {selectedRow.volumeInfo.authors ? (selectedRow.volumeInfo.authors) : (<span className="unavailable-msg">Author is unavailable</span>)}
                            </span>
                        </div>
                        <div className="book-title book-info">
                            <span className='book-key-title'>Title:</span>
                            <span className='book-value'>{selectedRow.volumeInfo.title ? (selectedRow.volumeInfo.title) : (<span className="unavailable-msg">Title is unavailable</span>)}</span>
                        </div>
                        <div className="book-year book-info">
                            <span className='book-key-title'>Year:</span>
                            <span className='book-value'>
                                {selectedRow.volumeInfo.publishedDate ? (selectedRow.volumeInfo.publishedDate) : (<span className="unavailable-msg">Publish year is unavailable</span>)}
                            </span>
                        </div>
                        <div className="book-kind book-info">
                            <span className='book-key-title'>Kind:</span>
                            <span className='book-value'>
                                {selectedRow.volumeInfo.categories ? (selectedRow.volumeInfo.categories) : (<span className="unavailable-msg">Kind is unavailable</span>)}
                            </span>
                        </div>
                        <div className="book-country book-info">
                            <span className='book-key-title'>Country:</span>
                            <span className='book-value'>{selectedRow.saleInfo.country ? (selectedRow.saleInfo.country) : (<span className="unavailable-msg">Country is unavailable</span>)}</span>
                        </div>
                    </div>
                    <div className="book-desc-area">
                        <div className="books-desc-header">Description</div>
                        <div className="books-desc-info">
                            <span className="book-desciption">
                                {selectedRow.volumeInfo.description ? (selectedRow.volumeInfo.description) : (<span className="unavailable-msg">Description is unavailable</span>)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="author-booklist-area">
                    <div className="books-desc-header">More books by this author</div>
                    <div className="authors-books-list">
                        {author && <AuthorBooks author={author} selectBook={selectBook} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;