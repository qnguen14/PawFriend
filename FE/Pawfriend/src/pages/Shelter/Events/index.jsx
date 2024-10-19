import React from 'react';
import "./Events.css";
const Events = () => {
    return (
        <div className="event-management">
          <h1>Event Management</h1>
    
          {/* Form to Add New Event */}
          <div className="add-event-form">
            <h2>Add New Event</h2>
            <form>
              <div className="form-group">
                <label>Event Name</label>
                <input type="text" placeholder="Enter event name" />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Enter event description"></textarea>
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="Enter event location" />
              </div>
              <button type="submit" className="add-btn">Add Event</button>
            </form>
          </div>
    
          {/* Event List */}
          <div className="event-list">
            <h2>Event List</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
                <tr>
                  <td>Adoption Day</td>
                  <td>2024-12-01</td>
                  <td>Shelter Location A</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
                {/* Add more events dynamically here */}
              </tbody>
            </table>
          </div>
        </div>
      );
};
export default Events;