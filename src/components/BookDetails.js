import '../styles/details.css'
import AuthorBooks from './AuthorBooks';
import useAxios from '../useAxios';
import { useState, useEffect } from 'react';

const BookDetails = ({ selectedRow }) => {

    const [currentAuthor, setCurrentAuthor] = useState('');
    const [url, setUrl] = useState('');
    useEffect(() => {
        setCurrentAuthor(selectedRow.volumeInfo.authors);
    }, [selectedRow])

    useEffect(() => {
        const newUrl = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${currentAuthor}&key=AIzaSyB_DtGjM49I7Rk-CLkYoxN5odpW68vUdyM&maxResults=16`;

        if (url !== newUrl) {
            setUrl(newUrl);
        }
    }, [currentAuthor, url]);

    const { data: author, error, loading } = useAxios(url);


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
                                {selectedRow.volumeInfo.publishedDate ? (selectedRow.volumeInfo.publishedDate) : (<span className="unavailable-msg">Title is unavailable</span>)}
                            </span>
                        </div>
                        <div className="book-kind book-info">
                            <span className='book-key-title'>kind:</span>
                            <span className='book-value'>
                                {selectedRow.volumeInfo.categories ? (selectedRow.volumeInfo.categories) : (<span className="unavailable-msg">Title is unavailable</span>)}
                            </span>
                        </div>
                        <div className="book-country book-info">
                            <span className='book-key-title'>Country:</span>
                            <span className='book-value'>{selectedRow.saleInfo.country ? (selectedRow.saleInfo.country) : (<span className="unavailable-msg">Title is unavailable</span>)}</span>
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
                <div className="authors-books-list">
                    {currentAuthor}
                    {author && <AuthorBooks author={author} />}
                </div>
            </div>
        </div>
    );
}

export default BookDetails;