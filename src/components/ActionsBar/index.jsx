import PropTypes from 'prop-types'

// pages
import DeleteSelected from './DeleteSelected'
import Pagination from './Pagination'

// css
import './ActionsBar.css'

const ActionsBar = ({ totalPages, currentPage, setCurrentPage, setDeleteSelection, checkedRowIds }) => {
  return (
    <div id="actions-container">
        <DeleteSelected checkedRowIds={checkedRowIds} setDeleteSelection={setDeleteSelection} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

ActionsBar.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  setDeleteSelection: PropTypes.func,
  checkedRowIds: PropTypes.arrayOf(PropTypes.string)
}

export default ActionsBar
