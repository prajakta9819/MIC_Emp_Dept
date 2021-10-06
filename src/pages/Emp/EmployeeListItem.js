import React from "react";
import { useSelector } from "react-redux";

const EmployeeListItem = ({
  employee,
  editId,
  handleEdit,
  setEditId,
  handleDelete
}) => {
  const { departments } = useSelector((state) => state);

  return editId !== employee.id ? (
    <tr>
      <td>{`emp_${employee.id}`}</td>
      <td>{employee.name}</td>
      <td>{`dept_${employee.deptId}`}</td>
      <td>{employee.deptName}</td>
      <td>
        <button className="btn-edit" onClick={() => setEditId(employee.id)}>
          Edit
        </button>

        <button
          className="btn-delete"
          onClick={() => {
            handleDelete(employee.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{`emp_${employee.id}`}</td>
      <td>
        <input
          type="text"
          placeholder="Enter dept name"
          value={employee.name}
          onChange={(e) => handleEdit("name", e.target.value)}
        />
      </td>
      <td>{`dept_${employee.deptId}`}</td>
      <td>
        <select onChange={(e) => handleEdit("deptId", e.target.value)}>
          {departments.map((dept) => (
            <option key={`dept_option_${dept.id}`} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <button className="btn-edit" onClick={() => setEditId(null)}>
          Save
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            handleDelete(employee.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EmployeeListItem;
