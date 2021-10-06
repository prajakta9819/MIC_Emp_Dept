import React, { useState } from "react";

function AddModal({ show, onClose, handleAdd }) {
  const [name, setName] = useState("");

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">New Department addition:</h2>
        </div>
        <div className="modal-body">
          <h4>{"To add new Department, provide below details -->"}</h4>
          <input
            placeholder="Department Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="modal-add" onClick={() => handleAdd(name)}>
            Add
          </button>
          <button className="modal-close" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
