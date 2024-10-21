import "./petListingHeader.css";

function PetListingHeader() {
  return (
    <div className="pet-listings-header">
      <h1>Pet Listings</h1>
      <div className="rectangles">
        <div className="tag">
          <p1>Dog</p1>
        </div>
        <div className="tag">
          <p1>Cat</p1>
        </div>
        <input
          type="text"
          placeholder="Search for pets"
          className="searchBar"
        ></input>
      </div>
    </div>
  );
}

export default PetListingHeader;
