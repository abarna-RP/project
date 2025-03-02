import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <span className="text-lg font-bold text-white" >Page {page}</span>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
