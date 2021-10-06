import React, { useEffect, useState } from "react";

function AddModal({ show, onClose, handleAdd, departments }) {
  const [name, setName] = useState("");
  const [deptId, setDeptId] = useState(null);

  useEffect(() => {
    if (!show) {
      setName("");
      setDeptId(null);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">New Employee addition:</h2>
        </div>
        <div className="modal-body">
          <h4>To add new Employee, provide below details</h4>
          <input
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select onChange={(e) => setDeptId(e.target.value)}>
            <option value="" disabled defaultValue="">
              Select a dept
            </option>
            {departments.map((dept) => (
              <option key={`emp_dept_option_${dept.id}`} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-footer">
          <button className="modal-add" onClick={() => handleAdd(name, deptId)}>
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
