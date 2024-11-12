// MediaViewModal.js
import React from 'react';
import './Components_css/MediaViewModal.css';

function MediaViewModal({ show, mediaSrc, mediaType, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="media-view-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        {mediaType === 'image' && <img src={mediaSrc} alt="Media" className="modal-media" />}
        {mediaType === 'video' && (
          <video className="modal-media" controls>
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default MediaViewModal;
