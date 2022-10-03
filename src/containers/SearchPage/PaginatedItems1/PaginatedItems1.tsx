import { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ListingCardData } from 'types/Listing';

import { Items1 } from '../Items1/Items1';

interface PaginatedItemsProps1 {
  itemsPerPage: number;
  data: ListingCardData[];
}
interface SelectedItems {
  selected: number;
}

export const PaginatedItems1: FC<PaginatedItemsProps1> = ({ itemsPerPage, data }) => {
  const [currentItems, setCurrentItems] = useState<ListingCardData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: SelectedItems) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Items1 currentItems={currentItems} />
        </div>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <>
            Next <i className="far fa-chevron-right text-13 ml-5"></i>
          </>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <>
            <i className="far fa-chevron-left text-13 mr-5"></i> Previous
          </>
        }
        containerClassName="flex justify-center items-center mt-40"
        disabledClassName="hidden"
        previousClassName="flex justify-center items-center w-fit h-36 px-13 bg-light border-1 border-gray4 rounded-18 mr-8 cursor-pointer select-none"
        previousLinkClassName="flex justify-center items-center text-gray7 text-16 font-medium"
        nextClassName="flex justify-center items-center w-fit h-36 px-13 bg-light border-1 border-gray4 rounded-18 mr-8 cursor-pointer select-none"
        nextLinkClassName="flex justify-center items-center text-gray7 text-16 font-medium"
        pageClassName="flex justify-center items-center w-36 h-36 text-gray9 bg-light border-1 border-gray4 text-gray7 text-16 font-medium rounded-1/2 mr-8 cursor-pointer select-none"
        pageLinkClassName="flex justify-center items-center w-100% h-100% rounded-1/2 text-16 text-gray7"
        activeClassName="!bg-primary !border-primary"
        activeLinkClassName="flex justify-center items-center w-100% h-100% text-light"
        breakClassName="flex justify-center items-center w-36 h-36 bg-light rounded-1/2 mr-8 cursor-pointer select-none"
        breakLinkClassName="flex justify-center items-center w-100% h-100% rounded-1/2 text-16 font-medium text-gray7"
      />
    </>
  );
};
