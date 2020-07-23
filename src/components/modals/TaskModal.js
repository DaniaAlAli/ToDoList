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
    background: "#50524f",
    borderRadius: "30px",
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
    closeModal();
    setTask({
      name: "",
      details: "",
      status: "",
      click: true,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="New Task"
    >
      <h3
        style={{
          fontFamily: "Cabin Sketch, cursive",
          fontWeight: "bold",
          color: "#45ce00",
          fontSize: "50px",
        }}
      >
        {" "}
        Add a New Task{" "}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label
            style={{
              color: "red",
              fontFamily: "Rock Salt, cursive",
              fontSize: "20px",
            }}
          >
            Task
          </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={task.name}
            placeholder="What do you want to do ✏️ .."
          />
        </div>

        <div className="form-group">
          <label
            style={{
              color: "red",
              fontFamily: "Rock Salt, cursive",
              fontSize: "20px",
            }}
          >
            Details
          </label>
          <input
            name="details"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={task.details}
            placeholder="Tell more 📝.."
          />
        </div>
        <div className="form-group">
          <label
            style={{
              color: "red",
              fontFamily: "Rock Salt, cursive",
              fontSize: "20px",
            }}
          >
            Status
          </label>
          <input
            name="status"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={task.status}
            placeholder="Personal❓ Work❓etc.."
          />
        </div>
        <div className="form-group">
          <label
            style={{
              color: "red",
              fontFamily: "Rock Salt, cursive",
              fontSize: "20px",
            }}
          >
            Due Date
          </label>
          <input
            name="date"
            type="date"
            onChange={handleChange}
            className="form-control"
            value={task.date}
          />
        </div>
        <CreateButtonStyled
          className=" btn float-right"
          style={{
            color: "blue",
            fontFamily: "Londrina Sketch, cursive",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Add Task
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default TaskModal;
