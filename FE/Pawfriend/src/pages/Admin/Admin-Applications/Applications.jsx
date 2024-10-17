import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "../../../components/admin/AdminComponents/navbar/Navbar";
import { useActiveLink } from "../../../hooks/useActiveLink";
import Sidebar from "../../../components/admin/AdminComponents/sidebar/Sidebar";
import "./Applications.css";

export default function Applications() {
  const { activeLink, setActiveLink } = useActiveLink();

  // Sample data for applications
  const applications = [
    { id: 1, name: "John Doe", pet: "Golden Retriever", date: "2023-09-15", status: "pending|in review" },
    { id: 2, name: "Jane Smith", pet: "Bulldog", date: "2023-09-16", status: "pending|awaiting info" },
    // Add more application objects here
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const applicationsPerPage = 5;

  // Calculate the current applications to display
  const indexOfLastApplication = (currentPage + 1) * applicationsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
  const currentApplications = applications.slice(indexOfFirstApplication, indexOfLastApplication);

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="admin-layout">
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="d-flex">
        <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className="content">
          <div className="main-content container-fluid">
            <h1 className="title">Pending Adoption Applications</h1>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search..."
                style={{ maxWidth: "300px" }}
              />
              <button className="btn btn-primary">Export</button>
            </div>
            <div className="applications-management">
              <table className="applications-table">
                <thead>
                  <tr>
                    <th scope="col">Applicant Name</th>
                    <th scope="col">Pet Chosen</th>
                    <th scope="col">Submission Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentApplications.map((application) => (
                    <tr key={application.id}>
                      <td>{application.name}</td>
                      <td>{application.pet}</td>
                      <td>{application.date}</td>
                      <td>{application.status}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => alert(`View Application: ${application.name}`)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={<span>&laquo; Previous</span>}
                nextLabel={<span>Next &raquo;</span>}
                breakLabel={<span>...</span>}
                pageCount={Math.ceil(applications.length / applicationsPerPage)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
