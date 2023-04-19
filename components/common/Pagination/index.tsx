import React from "react";
import ReactPaginate from "react-paginate";
import Button from "components/common/Button";

const Pagination = () => {
  return (
    <div className="relative w-full min-h-[38px] flex justify-center">
      <ReactPaginate
        pageCount={25}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        initialPage={0}
        containerClassName="mt-[58px] tablet:mt-auto flex items-center"
        previousClassName="absolute top-0 left-0"
        previousLabel={<Button variant="success-text">previous</Button>}
        nextLabel={<Button variant="success">next</Button>}
        nextClassName="absolute top-0 right-0"
        pageClassName="mx-4 text-2xl text-gray"
        breakClassName="mx-4 text-2xl text-gray"
        activeLinkClassName="text-cyanblue"
      />
    </div>
  );
};

export default Pagination;
