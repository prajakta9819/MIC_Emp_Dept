const initialState = {
  departments: [
    { id: 1, name: "Technology" },
    { id: 2, name: "HR" },
    { id: 3, name: "Finance" }
  ],
  employees: [
    {
      id: 1,
      name: "Siddhesh Koyande",
      deptId: 1,
      deptName: "Technology"
    },
    {
      id: 2,
      name: "Prajakta Pakhale",
      deptId: 2,
      deptName: "HR"
    },
    {
      id: 3,
      name: "Priyanka Pakhale",
      deptId: 3,
      deptName: "Finance"
    },
    {
      id: 4,
      name: "Yatish Jariyal",
      deptId: 3,
      deptName: "Finance"
    }
  ]
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  let local, updatedState;
  switch (type) {
    case "STORE_DATA_IN_LOCAL_STORAGE":
      local = localStorage.getItem("mic_data");
      if (!local) {
        localStorage.setItem("mic_data", JSON.stringify(state));
        return state;
      } else {
        local = JSON.parse(local);
        return local;
      }
    case "EDIT_EMPLOYEE_DETAILS":
      const { id, name, value } = payload;
      updatedState = state.employees.map((emp) => {
        if (emp.id === id) {
          if (name === "deptId") {
            const deptName = state.departments.filter(
              (dept) => dept.id === Number(value)
            )[0].name;
            return {
              ...emp,
              [name]: value,
              deptName: deptName
            };
          } else
            return {
              ...emp,
              [name]: value
            };
        } else return emp;
      });
      updatedState = {
        ...state,
        employees: [...updatedState]
      };
      localStorage.setItem("mic_data", JSON.stringify(updatedState));
      return updatedState;
    case "EDIT_DEPARTMENT_NAME":
      updatedState = state.departments.map((dept) => {
        if (dept.id === payload.id) {
          return {
            ...dept,
            name: payload.name
          };
        } else return dept;
      });
      updatedState = {
        ...state,
        departments: [...updatedState]
      };
      localStorage.setItem("mic_data", JSON.stringify(updatedState));
      return updatedState;
    case "DELETE_DEPARTMENT":
      updatedState = state.departments.filter((dept) => dept.id !== payload);
      const employees = state.employees.filter((emp) => emp.deptId !== payload);
      updatedState = {
        employees: [...employees],
        departments: [...updatedState]
      };
      localStorage.setItem("mic_data", JSON.stringify(updatedState));
      return updatedState;
    case "DELETE_EMPLOYEE":
      updatedState = state.employees.filter((emp) => emp.id !== payload);
      updatedState = {
        ...state,
        employees: [...updatedState]
      };
      localStorage.setItem("mic_data", JSON.stringify(updatedState));
      return updatedState;
    case "ADD_DEPARTMENT":
      const newDept = {
        id:
          state.departments.length === 0
            ? 0
            : Number(state.departments[state.departments.length - 1].id) + 1,
        name: payload
      };
      updatedState = {
        ...state,
        departments: [...state.departments, newDept]
      };
      localStorage.setItem("mic_data", JSON.stringify(updatedState));
      return updatedState;

    case "ADD_EMPLOYEE":
      const deptName = state.departments.filter(
        (dept) => dept.id == payload.deptId
      )[0].name;
      const newEmp = {
        id:
          state.employees.length === 0
            ? 0
            : Number(state.employees[state.employees.length - 1].id) + 1,
        name: payload.name,
        deptId: Number(payload.deptId),
        deptName: deptName
      };
      updatedState = {
        ...state,
        employees: [...state.employees, newEmp]
      };
      localStorage.setItem("mic_data", JSON.stringify(updatedState));
      return updatedState;

    default:
      return state;
  }
};

export default reducer;
