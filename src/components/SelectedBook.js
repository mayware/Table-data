import '../styles/selected.css'

const SelectedBook = ({ selectedbook }) => {
    return (
        <div className="content">
            <div className="selected-book-card">
                <h1>Selected book</h1>
                {selectedbook.volumeInfo.title}
            </div>
        </div>
    );
}

export default SelectedBook;