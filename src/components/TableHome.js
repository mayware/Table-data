import '../styles/table.css'
import TableData from './TableData';
import { useState, useEffect } from 'react';
import useAxios from '../useAxios';


const TableHome = () => {

    const { data, error, loading } = useAxios('https://jsonplaceholder.typicode.com/users');

    return (
        <div className="content">
            <div className="table-area">
                <div className="table">
                    <div className='table-header'>
                        <div className='table-header-row'>
                            <button className='table-header-item'>ID</button>
                            <button className='table-header-item'>Author</button>
                            <button className='table-header-item'>Title</button>
                            <button className='table-header-item'>Kind</button>
                        </div>
                    </div>
                    <div className="table-body">
                        <div className="table-body-col">
                            {data && <TableData data={data} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableHome;