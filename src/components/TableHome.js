import '../styles/table.css'
import TableData from './TableData';
import { useState, useEffect } from 'react';
import useAxios from '../useAxios';


const TableHome = () => {
    const { data, error, loading } = useAxios('https://www.googleapis.com/books/v1/volumes?q=*&key=AIzaSyB_DtGjM49I7Rk-CLkYoxN5odpW68vUdyM');

    return (
        <div className="content">
            <div className="table-area">
                <div className="table">
                    <div className='table-header'>
                        <div className='table-header-row'>
                            <div className='table-header-item'>ID</div>
                            <div className='table-header-item'>Author</div>
                            <div className='table-header-item'>Title</div>
                            <div className='table-header-item'>Kind</div>
                        </div>
                    </div>
                    <div className="table-body">
                        {data && <TableData data={data} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableHome;