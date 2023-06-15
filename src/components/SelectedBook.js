import '../styles/selected.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const SelectedBook = ({ selectedBook, selectBookId }) => {

    const { id } = useParams();
    useEffect(() => {
        selectBookId(id);
    }, [id, selectBookId])

    return (
        <div className="content">
            <div className="selected-book-card">
                <div className="selected-book-card-inner">
                    <div className="selected-book-cover">
                        {selectedBook.volumeInfo.imageLinks ? (
                            <img
                                src={selectedBook.volumeInfo.imageLinks.thumbnail}
                                alt="book-cover"
                                className="selected-book-cover-img"
                            />
                        ) : (
                            <div className="cover-unavailable-info">Book cover is unavailable</div>
                        )}
                    </div>
                    <div className="selected-books-brief-info">
                        <div className="selected-book-author book-info">
                            <span className='selected-book-key-title'>Author:</span>
                            <span className='selected-book-value'>
                                {selectedBook.volumeInfo.authors ? (selectedBook.volumeInfo.authors) : (<span className="unavailable-msg">Author is unavailable</span>)}
                            </span>
                        </div>
                        <div className="selected-book-title book-info">
                            <span className='selected-book-key-title'>Title:</span>
                            <span className='selected-book-value'>{selectedBook.volumeInfo.title ? (selectedBook.volumeInfo.title) : (<span className="unavailable-msg">Title is unavailable</span>)}</span>
                        </div>
                        <div className="selected-book-year book-info">
                            <span className='selected-book-key-title'>Year:</span>
                            <span className='selected-book-value'>
                                {selectedBook.volumeInfo.publishedDate ? (selectedBook.volumeInfo.publishedDate) : (<span className="unavailable-msg">Publish year is unavailable</span>)}
                            </span>
                        </div>
                        <div className="selected-book-kind book-info">
                            <span className='selected-book-key-title'>Kind:</span>
                            <span className='selected-book-value'>
                                {selectedBook.volumeInfo.categories ? (selectedBook.volumeInfo.categories) : (<span className="unavailable-msg">Kind is unavailable</span>)}
                            </span>
                        </div>
                        <div className="selected-book-country book-info">
                            <span className='selected-book-key-title'>Country:</span>
                            <span className='selected-book-value'>{selectedBook.saleInfo.country ? (selectedBook.saleInfo.country) : (<span className="unavailable-msg">Country is unavailable</span>)}</span>
                        </div>
                    </div>
                    <div className="selected-book-desc-area">
                        <div className="selected-books-desc-header">Description</div>
                        <div className="selected-books-desc-info">
                            <span className="selected-book-desciption">
                                {selectedBook.volumeInfo.description ? (selectedBook.volumeInfo.description) : (<span className="unavailable-msg">Description is unavailable</span>)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedBook;