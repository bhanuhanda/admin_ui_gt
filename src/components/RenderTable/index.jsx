import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// helpers
import { filterString } from '../../helpers';
import { pageLimit } from '../../helpers/constants';

// css
import './RenderTable.css'
import RenderRows from './RenderRows';
import RenderHeader from './RenderHeader';

const RenderTable = ({ 
    searchQuery, 
    filteredData, 
    setFilteredData, 
    data, 
    currentPage, 
    setCurrentPage, 
    deleteSelection, 
    setDeleteSelection, 
    checkedRowIds, 
    setCheckedRowIds 
}) => {
    const [indexes, setIndexes] = useState({
        si: 0,
        ei: 0
    })
    
    useEffect(() => {
        // handle filtering
        if(searchQuery !== '') {
            setFilteredData(data.filter((record) => {
                return filterString(record.name, searchQuery) || filterString(record.email, searchQuery) || filterString(record.role, searchQuery);
            }));
            setCurrentPage(0);
        } else {
            setFilteredData(data);
        }
    }, [searchQuery, data, setFilteredData, setCurrentPage])

    useEffect(() => {
        // handle paginated records
        const ind = currentPage * pageLimit;
        setIndexes({
            si: ind,
            ei: ind + pageLimit
        })
    }, [currentPage])

    useEffect(() => {
        // whenever page changes or filtering is done, clearing the checkboxes selection
        setCheckedRowIds([]);
    }, [currentPage, filteredData, setCheckedRowIds])

    useEffect(() => {
        // handling "delete selected" functionality
        if(deleteSelection) {
            setDeleteSelection(false);

            const updatedData = filteredData.filter(item => !checkedRowIds.includes(item.id));
            setFilteredData(updatedData);
        }
    }, [deleteSelection, checkedRowIds, filteredData, setFilteredData, setDeleteSelection])

  return (
    <div id="table-container">
        <table id='table-wrapper'>
            <thead>
                <RenderHeader checkedRowIds={checkedRowIds} setCheckedRowIds={setCheckedRowIds} filteredData={filteredData} indexes={indexes} />
            </thead>
            <tbody id='body-rows'>
                <RenderRows filteredData={filteredData} setFilteredData={setFilteredData} checkedRowIds={checkedRowIds} setCheckedRowIds={setCheckedRowIds} indexes={indexes} />
            </tbody>
        </table>
    </div>
  )
}

RenderTable.propTypes = {
    searchQuery: PropTypes.string,
    filteredData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        role: PropTypes.string,
    })),
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        role: PropTypes.string,
    })),
    setFilteredData: PropTypes.func,
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    deleteSelection: PropTypes.bool,
    setDeleteSelection: PropTypes.func,
    checkedRowIds: PropTypes.arrayOf(PropTypes.string),
    setCheckedRowIds: PropTypes.func
}

export default RenderTable
