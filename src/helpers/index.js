export const filterString = (str, qry) => {
    return str.toLowerCase().indexOf(qry.toLowerCase()) >= 0;
}

export const currentPageIds = (data, startInd, endInd) => {
    return data.slice(startInd, endInd).map(row => row.id);
}
