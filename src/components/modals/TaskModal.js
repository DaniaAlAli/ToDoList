import React, { useState } from "react";
import Modal from "react-modal";

//Style
import { CreateButtonStyled } from "../../styles";

//Store
import taskStore from "../../store/TaskStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TaskModal = ({ isOpen, closeModal }) => {
  const [task, setTask] = useState({
    name: "",
    details: "",
    status: "",
    click: true,
  });

  const handleChange = (event) => {
    const newTask = { ...task, [event.target.name]: event.target.value };
    setTask(newTask);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    taskStore.createTask(task);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="New Task"
    >
      <h3> Add a New Task </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={task.name}
          />
        </div>

        <div className="form-group">
          <label>Details</label>
          <input
            name="details"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={task.details}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input
            name="status"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={task.status}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            name="date"
            type="date"
            onChange={handleChange}
            className="form-control"
            value={task.date}
          />
        </div>
        <CreateButtonStyled className=" btn float-right">
          Add Task
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default TaskModal;
