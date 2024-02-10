import React from 'react'

// css
import './ActionsBar.css'

const DeleteSelected = ({ checkedRowIds, setDeleteSelection }) => {
  return (
    <div>
        <button 
            id="delete-all-btn" 
            className='delete-selected footer-btn'
            disabled={checkedRowIds.length === 0}
            onClick={() => setDeleteSelection(true)}
        >
          Delete Selected
        </button>
    </div>
  )
}

export default DeleteSelected