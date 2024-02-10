import { useState } from 'react'

// mui
import { FiEdit, FiTrash, FiSave, FiX } from "react-icons/fi";

const RenderRows = ({ filteredData, setFilteredData, checkedRowIds, setCheckedRowIds, indexes }) => {
    const [editRowDetails, setEditRowDetails] = useState({});

    const handleRowChecked = (id) => {
        if(checkedRowIds.includes(id)) {
            setCheckedRowIds(checkedRowIds.filter(checkedId => checkedId !== id))
        } else {
            setCheckedRowIds([...checkedRowIds, id])
        }
    }

    const handleDeleteRecord = (id) => {
        setFilteredData(filteredData.filter(item => item.id !== id));
    }

    const handleEditRow = () => {
        const updatedData = filteredData.slice();
        let index = -1;
        updatedData.forEach((row, idx) => {
            if(row.id === editRowDetails.id) {
                index = idx;
            }
        });

        updatedData.splice(index, 1, editRowDetails);

        setFilteredData(updatedData);
        setEditRowDetails({})
    }

    return filteredData.slice(indexes.si, indexes.ei).map((row) => editRowDetails?.id === row.id ? (
        <tr key={editRowDetails.id}>
            <td>
                <input 
                    type="checkbox" 
                    name="edit-row" 
                    id="edit-row" 
                    checked={checkedRowIds.includes(row.id)} 
                    disabled 
                />
            </td>
            <td><input 
                type='text' 
                value={editRowDetails.name} 
                onChange={(e) => setEditRowDetails({ ...editRowDetails, name: e.target.value})} 
            /></td>
            <td><input 
                type='text' 
                value={editRowDetails.email} 
                onChange={(e) => setEditRowDetails({ ...editRowDetails, email: e.target.value})} 
            /></td>
            <td><input 
                type='text' 
                value={editRowDetails.role} 
                onChange={(e) => setEditRowDetails({ ...editRowDetails, role: e.target.value})} 
            /></td>
            <td id='actions-td'>
                <button className='save'><FiSave size={18} color='#2266FF' onClick={handleEditRow} /></button>
                <button className='cancel'><FiX size={18} color='red' onClick={() => setEditRowDetails({})} /></button>
            </td>
        </tr>
    ) : (
        <tr key={row.id} className={`${checkedRowIds.includes(row.id) ? 'grey-bg' : 'white-bg'}`}>
            <td>
                <input 
                    type="checkbox" 
                    name="select-row" 
                    id="select-row" 
                    checked={checkedRowIds.includes(row.id)} 
                    onChange={() => handleRowChecked(row.id)} 
                />
            </td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.role.substring(0, 1).toUpperCase() + row.role.substring(1)}</td>
            <td id='actions-td'>
                <button className='edit'><FiEdit size={18} onClick={() => setEditRowDetails(row)} /></button>
                <button className='delete'><FiTrash size={18} color='red' onClick={() => handleDeleteRecord(row.id)} /></button>
            </td>
        </tr>
    ))
}

export default RenderRows
