export const storeDataInLocalStorage = () => {
  return {
    type: "STORE_DATA_IN_LOCAL_STORAGE"
  };
};

export const addDepartment = (name) => {
  return {
    type: "ADD_DEPARTMENT",
    payload: name
  };
};

export const addEmployee = (emp) => {
  return {
    type: "ADD_EMPLOYEE",
    payload: emp
  };
};

export const deleteDepartment = (deptId) => {
  return {
    type: "DELETE_DEPARTMENT",
    payload: deptId
  };
};

export const deleteEmployee = (empId) => {
  return {
    type: "DELETE_DEPARTMENT",
    payload: empId
  };
};

export const editDepartmentName = (id, name) => {
  return {
    type: "EDIT_DEPARTMENT_NAME",
    payload: { id, name }
  };
};

export const editEmployeeDetails = (id, name, value) => {
  return {
    type: "EDIT_EMPLOYEE_DETAILS",
    payload: { id, name, value }
  };
};
