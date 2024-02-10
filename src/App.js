import { useState, useEffect } from "react"

// constants
import { URL, pageLimit } from "./helpers/constants"

// files
import ActionsBar from "./components/ActionsBar"
import RenderTable from "./components/RenderTable"
import SearchBar from "./components/SearchBar"

// css
import "./App.css"

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [deleteSelection, setDeleteSelection] = useState(false);
  const [checkedRowIds, setCheckedRowIds] = useState([]);

  // fetch data via API
  const fetchData = async () => {
    const result = await fetch(URL);
    const jsonResponse = await result.json();

    setData(jsonResponse);
    setFilteredData(jsonResponse);
  }

  useEffect(() => {
    // fetch data on component load
    fetchData();
  }, [])

  return (
    <div id="outer-container">
      <div id="inner-container">
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        <RenderTable 
          searchQuery={searchQuery} 
          filteredData={filteredData} 
          setFilteredData={setFilteredData} 
          data={data} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}  
          deleteSelection={deleteSelection}
          setDeleteSelection={setDeleteSelection}
          checkedRowIds={checkedRowIds}
          setCheckedRowIds={setCheckedRowIds}
        />
        <ActionsBar 
          totalPages={Math.ceil(filteredData.length / pageLimit)} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          setDeleteSelection={setDeleteSelection}
          checkedRowIds={checkedRowIds}
        />
      </div>
    </div>
  )
}

export default App
