import React, { useState, useEffect } from "react";
import EmployeeListItem from "./EmployeeListItem";
import AddEmp from "./AddEmp";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  deleteEmployee,
  editEmployeeDetails
} from "../../redux/actions/actions";

function Employee() {
  const { employees, departments } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const filteredList = employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        `emp_${emp.id}`.toLowerCase().includes(searchValue.toLowerCase()) ||
        `dept_${emp.deptId}`
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        emp.deptName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredList);
  }, [searchValue]);

  const handleEdit = (name, value) => {
    dispatch(editEmployeeDetails(editId, name, value));
    // setEmployees(updatedList);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleAdd = (name, deptId) => {
    dispatch(addEmployee({ name, deptId }));
    setShow(false);
  };

  return (
    <div>
      <AddEmp
        show={show}
        onClose={() => setShow(false)}
        handleAdd={handleAdd}
        departments={departments}
      />
      <h1>Employee Page</h1>
      <input
        className="input"
        placeholder="Search Employee"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="btn-addDept" onClick={() => setShow(true)}>
        Add New Employee
      </button>

      <table>
        <thead>
          <th>Employee Id</th>
          <th>Employee Name</th>
          <th>Department Id</th>
          <th>Department Name</th>
          <th>Modify</th>
        </thead>
        <tbody>
          {searchValue === ""
            ? employees &&
              employees.map((employee) => (
                <EmployeeListItem
                  key={`demp_${employee.id}`}
                  employee={employee}
                  editId={editId}
                  handleEdit={handleEdit}
                  setEditId={setEditId}
                  handleDelete={handleDelete}
                  departments={departments}
                />
              ))
            : searchResults.map((employee) => (
                <EmployeeListItem
                  key={employee.id}
                  employee={employee}
                  editId={editId}
                  handleEdit={handleEdit}
                  setEditId={setEditId}
                  handleDelete={handleDelete}
                  departments={departments}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
