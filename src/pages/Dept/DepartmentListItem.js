import React from "react";

const DepartmentListItem = ({
  department,
  editId,
  handleEdit,
  setEditId,
  handleDelete
}) => {
  return editId !== department.id ? (
    <tr>
      <td>{`dept_${department.id}`}</td>
      <td>{department.name}</td>
      <td>
        <button className="btn-edit" onClick={() => setEditId(department.id)}>
          Edit
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            handleDelete(department.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{`dept_${department.id}`}</td>
      <td>
        <input
          type="text"
          placeholder="Enter dept name"
          value={department.name}
          onChange={(e) => handleEdit(e.target.value)}
        />
      </td>
      <td>
        <button className="btn-edit" onClick={() => setEditId(null)}>
          Save
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            handleDelete(department.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DepartmentListItem;
