import "./styles.css";
import mainData from "./data.json";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function App() {
  const [users, setUsers] = useState(mainData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((user) => {
      return (
        <div className="user" key={user.id}>
          <h3>{user.first_name}</h3>
          <h3>{user.last_name}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Prev."}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"prevButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
