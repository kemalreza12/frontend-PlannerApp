import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "No.",
  },
  {
    dataField: "title",
    text: "Title",
  },
  {
    dataField: "location",
    text: "Location",
  },
  {
    dataField: "date",
    text: "Date",
  },
  {
    dataField: "participant",
    text: "Participant",
  },
  {
    dataField: "note",
    text: "Note",
  },
];

const Table = (props) => {
  return (
    <div class="container mt-5">
      <ToolkitProvider keyField="id" data={props.users} columns={columns} search>
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

export default Table;
