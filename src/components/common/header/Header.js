import React, { useState } from "react";
import "./header.css";

const Header = ({handleSubmit}) => {
  const [toggle, setToggle] = useState(false);
  const [displayData, setDisplayData] = useState({
    status: "status",
    priority: "priority"
  });

  function handleChange(event) {
    event.preventDefault();
    handleSubmit(displayData);
    const {value,name} = event.target;
    setDisplayData(prevData => {
      return {
        ...prevData,
        [name] : value
      }
    })
  }


  return (
    <div className="header">
      <div className="header_status" onMouseEnter={() => setToggle(true)} >
        <i className="ri-equalizer-line equalizer"></i>
        <button className="status_button">Display</button>
        <i className="ri-arrow-down-s-line down_arrow"></i>
      </div>
    {toggle ?   (
        <div className="header_tooltip" onMouseLeave={() => setToggle(false)} >
          <div className="tooltip">
            <form>
            <div className="status">
              <label htmlFor="grouping">Grouping</label>
              <select name="status" id="status"
                value={displayData.status}
                onClick={handleChange}
                onChange={handleChange}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="priority">
              <label htmlFor="ordering">Ordering</label>
              <select name="priority" id="priority" value={displayData.priority}
                onClick={handleChange} onChange={handleChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
            </form>
          </div>
        </div>
      ) : null }
    </div>
  );
};

export default Header;
