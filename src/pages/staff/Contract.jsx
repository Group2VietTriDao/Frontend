import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Contract = () => {
  const [pageCount, setPageCount] = useState(4)
  const handlePageClick = () => {

  }
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className='flex space-x-4'
        activeClassName='bg-blue-500'
        activeLinkClassName='bg-blue-500'
        nextClassName=''
        pageClassName=''
        breakClassName=''
        disabledClassName=''
        nextLinkClassName=''
        pageLinkClassName=''
        previousClassName=''
        breakLinkClassName=''
        containerClassName=''
        disabledLinkClassName=''
        previousLinkClassName=''
      />

    </>
  )
}
export default Contract