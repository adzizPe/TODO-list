import React from "react";

const TodoTitle = () => {
  return (
    <div className="todo-title">
      <video autoPlay loop style={{ position: "absolute", width: "100%", left: 0, top: 0, zIndex: -1 }}>
        <source src="/src/assets/img/mycat-brenxdan.mp4" type="video/mp4" />
      </video>
      <h1>Apa rencana untuk hari ini?</h1>
    </div>
  );
};

export default TodoTitle;