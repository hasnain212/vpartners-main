import React from 'react';
import "../Annoucement-bar/AnnouncementBar.css"

const AnnouncementBar = () => {
  const handleClick = () => {
    // Open a new page when the message is clicked
    window.open('/new-page-url', '_blank');
  };

  return (
    <div className="announcement-bar" onClick={handleClick}>
      <p>Your Premium Partner in PVC Products  →</p>
    </div>
  );
};

export default AnnouncementBar;