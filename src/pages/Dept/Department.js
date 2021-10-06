import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDepartment,
  deleteDepartment,
  deleteEmployee,
  editDepartmentName
} from "../../redux/actions/actions";
import AddModal from "./AddModal";
import DepartmentListItem from "./DepartmentListItem";

function Department(props) {
  const { departments } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleDelete = (id) => {
    dispatch(deleteDepartment(id));
  };

  useEffect(() => {
    const filteredList = departments.filter(
      (dept) =>
        dept.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        `dept_${dept.id}`.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredList);
  }, [searchValue]);

  const handleAdd = (name) => {
    dispatch(addDepartment(name));
    setShow(false);
  };

  const handleEdit = (name) => {
    dispatch(editDepartmentName(editId, name));
  };

  return (
    <div>
      <h1>Department Page</h1>
      <input
        className="input"
        placeholder="Search Department"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="btn-addDept" onClick={() => setShow(true)}>
        Add New Department
      </button>
      <AddModal
        show={show}
        onClose={() => setShow(false)}
        handleAdd={handleAdd}
      />

      <table>
        <thead>
          <th>Department Id</th>
          <th>Department Name</th>
          <th>Modify</th>
        </thead>
        <tbody>
          {searchValue === ""
            ? departments &&
              departments.map((department) => (
                <DepartmentListItem
                  key={`dept_${department.id}`}
                  department={department}
                  editId={editId}
                  handleEdit={handleEdit}
                  setEditId={setEditId}
                  handleDelete={handleDelete}
                />
              ))
            : searchResults.map((department) => (
                <DepartmentListItem
                  key={department.id}
                  department={department}
                  editId={editId}
                  handleEdit={handleEdit}
                  setEditId={setEditId}
                  handleDelete={handleDelete}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Department;
