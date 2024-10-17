import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "../../../components/admin/AdminComponents/navbar/Navbar";
import { useActiveLink } from "../../../hooks/useActiveLink";
import Sidebar from "../../../components/admin/AdminComponents/sidebar/Sidebar";
import "./Collaborators.css";

export default function Collaborators() {
  const { activeLink, setActiveLink } = useActiveLink();

  // Sample data for upcoming events
  const upcomingEvents = [
    { id: 1, title: "Music Fest", date: "2023-11-15", attendees: 250 },
    { id: 2, title: "Book Reading", date: "2023-11-22", attendees: 150 },
    { id: 3, title: "Beach Cleanup", date: "2023-11-30", attendees: 80 },
    { id: 4, title: "Food Festival", date: "2023-12-05", attendees: 300 },
  ];

  // Sample data for collaborations
  const collaborations = [
    { id: 1, title: "Dog Haven Build", date: "2023-10-15" },
    { id: 2, title: "Event Planning Meet", date: "2023-09-28" },
    { id: 3, title: "Park Community Day", date: "2023-10-01" },
    { id: 4, title: "Rescue Collaboration", date: "2023-10-05" },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const collaborationsPerPage = 4;

  // Calculate the current collaborations to display
  const indexOfLastCollaboration = (currentPage + 1) * collaborationsPerPage;
  const indexOfFirstCollaboration =
    indexOfLastCollaboration - collaborationsPerPage;
  const currentCollaborations = collaborations.slice(
    indexOfFirstCollaboration,
    indexOfLastCollaboration
  );

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
            <h1 className="title">Upcoming Events</h1>
            <div className="row mb-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                >
                  <div className="custom-card h-100 d-flex flex-column ">
                    <div
                      className="custom-card-img-container"
                      style={{ width: "100%", height: "200px", padding: "0" }}
                    >
                      {event.image ? (
                        <img
                          src={event.image}
                          className="custom-card-img-top"
                          alt={event.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div className="custom-card-img-top d-flex justify-content-center align-items-center">
                          <span>No Image Available</span>
                        </div>
                      )}
                    </div>
                    <div
                      className="custom-card-body text-center"
                      style={{ width: "100%" }}
                    >
                      <h5 className="custom-card-title">{event.title}</h5>
                      <p className="custom-card-text">Date: {event.date}</p>
                      <p className="custom-card-text">
                        Attendees: {event.attendees}
                      </p>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => alert(`View Event: ${event.title}`)}
                        style={{ width: "100%" }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h1 className="title">Shelter Collaborations</h1>
            <div className="collaborations-management">
              <div className="row">
                {currentCollaborations.map((collaboration) => (
                  <div key={collaboration.id} className="col-12 col-md-6 mb-4">
                    <div className="custom-card h-100 d-flex flex-row align-items-center">
                      <div className="custom-card-body">
                        <h5 className="custom-card-title">
                          {collaboration.title}
                        </h5>
                        <p className="custom-card-text">
                          Date: {collaboration.date}
                        </p>
                        <button
                          className="btn btn-outline-primary"
                          onClick={() =>
                            alert(`View Collaboration: ${collaboration.title}`)
                          }
                        >
                          View Details
                        </button>
                      </div>
                      <div className="custom-card-img-container">
                        {collaboration.image ? (
                          <img
                            src={collaboration.image}
                            className="custom-card-img-right"
                            alt={collaboration.title}
                          />
                        ) : (
                          <div className="custom-card-img-right d-flex justify-content-center align-items-center">
                            <span>No Image Available</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ReactPaginate
                previousLabel={<span>&laquo; Previous</span>}
                nextLabel={<span>Next &raquo;</span>}
                breakLabel={<span>...</span>}
                pageCount={Math.ceil(
                  collaborations.length / collaborationsPerPage
                )}
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
