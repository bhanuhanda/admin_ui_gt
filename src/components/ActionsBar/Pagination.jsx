import React from 'react'

// css
import './ActionsBar.css'

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const buildPaginationButtons = () => {
        const paginationButtons = []
        for(let i=0; i<totalPages; i+=1) {
          paginationButtons.push(i);
        }
    
        return paginationButtons.map((idx) => 
          <button key={idx} 
            className={`${idx === currentPage ? `footer-btn footer-btn-active` : `footer-btn`} ${idx+1}-page`}
            onClick={() => setCurrentPage(idx)}
          >
            {idx+1}
          </button>)
      }

  return (
    <div id="pagination-container">
        <button
            className='first-page footer-btn' 
            disabled={currentPage === 0} 
            onClick={() => setCurrentPage(0)}
        >
            {'<<'}
        </button> 

        <button
            className='previous-page footer-btn' 
            disabled={currentPage === 0} 
            onClick={() => setCurrentPage(currentPage - 1)}
        >
            {'<'}
        </button>

        {buildPaginationButtons()}

        <button
            className='next-page footer-btn' 
            disabled={currentPage === totalPages - 1} 
            onClick={() => setCurrentPage(currentPage + 1)}
        >
            {'>'}
        </button>

        <button
            className='last-page footer-btn' 
            disabled={currentPage === totalPages - 1} 
            onClick={() => setCurrentPage(totalPages - 1)}
        >
            {'>>'}
        </button>
    </div>
  )
}

export default Pagination