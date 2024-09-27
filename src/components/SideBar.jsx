import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <div>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            consectetur molestias corporis dolor sed, amet soluta omnis veniam
            eius harum.
          </p>
        </div>
        <button>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
};
export default SideBar;
