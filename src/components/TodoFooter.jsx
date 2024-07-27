import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/reducer/todoReducer";

const TodoFooter = () => {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState("all");

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
    setActiveBtn(filter); 
  };

  return (
    <div className="todo-footer card d-flex flex-row justify-content-evenly">
      <button
        onClick={() => handleFilterChange("all")}
        className={`btn ${activeBtn === "all" ? "btn-custom" : ""}`}
      >
        Semua
      </button>
      <button
        onClick={() => handleFilterChange("active")}
        className={`btn ${activeBtn === "active" ? "btn-custom" : ""}`}
      >
        masih aktif
      </button>
      <button
        onClick={() => handleFilterChange("completed")}
        className={`btn ${activeBtn === "completed" ? "btn-custom" : ""}`}
      >
        Selesai
      </button>
    </div>
  );
};

export default TodoFooter;