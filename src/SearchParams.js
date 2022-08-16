import { useState } from "react";

const SearchParams = () => {
  // const location = "Seattle, WA";

  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
