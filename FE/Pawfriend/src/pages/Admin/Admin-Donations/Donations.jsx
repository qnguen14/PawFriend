import React, { useState } from "react";
import "./Donations.css";
import Navbar from "../../../components/admin/AdminComponents/navbar/Navbar";
import Sidebar from "../../../components/admin/AdminComponents/sidebar/Sidebar";
import { useActiveLink } from "../../../hooks/useActiveLink";
import ReactPaginate from "react-paginate";

const donations = [
  {
    id: "T001",
    date: "2021-01-01",
    description: "Community Donation",
    amount: 100,
    type: "Donation",
  },
  {
    id: "T002",
    date: "2021-01-01",
    description: "Clarity Event Donation",
    amount: 100,
    type: "Direct Express",
  },
  {
    id: "T003",
    date: "2021-01-01",
    description: "Website maintenance",
    amount: 100,
    type: "Indirect Express",
  },
];

export default function Donations() {
  const { activeLink, setActiveLink } = useActiveLink();
  const [currentPage, setCurrentPage] = useState(0);
  const donationsPerPage = 10;
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  const offset = currentPage * donationsPerPage;
  const currentDonations = donations.slice(offset, offset + donationsPerPage);

  return (
    <div className="admin-layout">
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="d-flex">
        <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className="content">
          <h1>Donations</h1>
          <div className="donations-total d-flex justify-content-between row">
            <div className="col-md-4">
              <div className="donations-total-item">
                <h3>Total Donations</h3>
                <p>1000</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="donations-total-item">
                <h3>Total express</h3>
                <p>1000</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="donations-total-item">
                <h3>Net balance</h3>
                <p>1000</p>
              </div>
            </div>
          </div>
          <div className="donations-table">
            <div className="donations-table-header row">
              <h3 className="col-12">Donations</h3>
              <div className="donations-table-filters d-flex flex-column col-md-6">
                <div className="filter-item">
                  <input type="checkbox" id="donation" />
                  <label htmlFor="donation">Donation</label>
                </div>
                <div className="filter-item">
                  <input type="checkbox" id="direct-express" />
                  <label htmlFor="direct-express">Direct Express</label>
                </div>
                <div className="filter-item">
                  <input type="checkbox" id="indirect-express" />
                  <label htmlFor="indirect-express">Indirect Express</label>
                </div>
              </div>
              <div className="donations-table-export col-md-6 d-flex justify-content-end align-items-end">
                <button className="btn btn-primary"><i className="fa-solid fa-download"></i> Export</button>
              </div>
            </div>
          </div>
          <div className="donations-table-body">
            <div className="donations-table-item">
              <table className="table-donations">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th className="text-center">Amount</th>
                    <th>Type</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentDonations.map((donation) => (
                    <tr key={donation.id}>
                      <td>{donation.id}</td>
                      <td>{donation.date}</td>
                      <td>{donation.description}</td>
                      <td className="text-center">{donation.amount}</td>
                      <td>
                        <div className="badge bg-primary text-white">
                          {donation.type}
                        </div>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-primary">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ReactPaginate
              previousLabel={<span>&laquo; Previous</span>}
              nextLabel={<span>Next &raquo;</span>}
              breakLabel={<span>...</span>}
              pageCount={Math.ceil(donations.length / donationsPerPage)}
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
  );
}
