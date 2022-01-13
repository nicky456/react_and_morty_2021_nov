import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({handlePageClick}) => {


  return (
    <div className="char-pagination container">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={42}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"paginationBtns"}
        activeClassName={"btn-pagi-active"}
        pageClassName={"btn-pagi"}
      />
    </div>
  )
}

export default Pagination
