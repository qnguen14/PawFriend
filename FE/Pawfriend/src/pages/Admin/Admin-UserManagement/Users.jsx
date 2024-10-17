import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "../../../components/admin/AdminComponents/navbar/Navbar";
import { useActiveLink } from "../../../hooks/useActiveLink";
import Sidebar from "../../../components/admin/AdminComponents/sidebar/Sidebar";
import "./Users.css";
import { fetchData, deleteData } from "../../../config/api"; // Ensure deleteData is imported

export default function Users() {
  const { activeLink, setActiveLink } = useActiveLink();

  // Sample data for users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchData("/test");
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []); // Ensure useEffect is correctly set up

  const handleDelete = async (id) => {
    try {
      await deleteData(`/test/?id=${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 5;

  // Calculate the current users to display
  const indexOfLastUser = (currentPage + 1) * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
          <div className="banner">
            <div className="banner-content">
              <span className="badge">Breaking news</span>
              <h1>Consectetur ex co</h1>
              <h2>Tempor Consectetur Est Elit</h2>
              <p>
                Dec 24, 2022 <span>5 mins read</span>
              </p>
            </div>
            <img
              src="/path/to/banner-image.jpg"
              alt="Banner"
              className="banner-image"
            />
          </div>
          <div className="main-content container-fluid">
            <h1 className="title">User Management</h1>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search users..."
                  style={{ maxWidth: "300px" }}
                />
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => alert("Filter Admins")}
                >
                  Admin
                </button>
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => alert("Filter Users")}
                >
                  User
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => alert("Filter Shelter")}
                >
                  Shelter
                </button>
              </div>
              <button
                className="btn btn-primary"
                id="add-user"
                onClick={() => alert("Add User")}
              >
                Add User
              </button>
            </div>
            <div className="user-management">
              <table className="user-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "60px" }}>
                      ID
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td style={{ width: "60px" }}>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <div className="d-md-none">
                          <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            id={`dropdownMenuButton${user.id}`}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Actions
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby={`dropdownMenuButton${user.id}`}
                          >
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() => alert(`Edit User: ${user.name}`)}
                              >
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={async () => {
                                  if (
                                    window.confirm(
                                      `Are you sure you want to delete User: ${user.name}?`
                                    )
                                  ) {
                                    try {
                                      await handleDelete(`${user.id}`);
                                      alert(
                                        `User: ${user.name} has been deleted`
                                      );
                                    } catch (error) {
                                      console.error(
                                        "Error deleting user:",
                                        error
                                      );
                                      alert(
                                        "Failed to delete user. Please try again."
                                      );
                                    }
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="d-none d-md-block">
                          <button
                            className="btn btn-warning me-2"
                            onClick={() => alert(`Edit User: ${user.name}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={async () => {
                              if (
                                window.confirm(
                                  `Are you sure you want to delete User: ${user.name}?`
                                )
                              ) {
                                try {
                                  await handleDelete(`${user.id}`);
                                  alert(`User: ${user.name} has been deleted`);
                                } catch (error) {
                                  console.error("Error deleting user:", error);
                                  alert(
                                    "Failed to delete user. Please try again."
                                  );
                                }
                              }
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={<span>&laquo; Previous</span>}
                nextLabel={<span>Next &raquo;</span>}
                breakLabel={<span>...</span>}
                pageCount={Math.ceil(users.length / usersPerPage)}
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
