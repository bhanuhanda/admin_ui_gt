import React from 'react'

import { currentPageIds } from '../../helpers';
import { TABLE_HEADERS } from '../../helpers/constants';

const RenderHeader = ({ checkedRowIds, setCheckedRowIds, filteredData, indexes }) => {
    const handleAllRowsChecked = () => {
        if(JSON.stringify(currentPageIds(filteredData, indexes.si, indexes.ei).sort()) === 
            JSON.stringify(checkedRowIds.sort())) {
            setCheckedRowIds([]);
        } else {
            setCheckedRowIds(currentPageIds(filteredData, indexes.si, indexes.ei));
        }
    }

  return (
    <tr id='header-row'>
        <th>
            <input 
                type="checkbox" 
                name="select-all" 
                id="select-all" 
                checked={checkedRowIds.length > 0 && JSON.stringify(currentPageIds().sort()) 
                    === JSON.stringify(checkedRowIds.sort())} 
                onChange={handleAllRowsChecked} 
            />
        </th>
        {TABLE_HEADERS.map((col, idx) => <th key={idx}>{col}</th>)}
    </tr>
  )
}

export default RenderHeader
