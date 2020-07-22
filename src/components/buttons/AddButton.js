import React, { useState } from "react";

//Components
import TaskModal from "../modals/TaskModal";

//Style
import { FcAddDatabase } from "react-icons/fc";
import { AddButtonStyle } from "../../styles";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <AddButtonStyle>
      <p>New Task</p>
      <FcAddDatabase
        className="float-center"
        size="2em"
        color="red"
        onClick={openModal}
      >
        {" "}
      </FcAddDatabase>

      <TaskModal isOpen={isOpen} closeModal={closeModal} />
    </AddButtonStyle>
  );
};

export default AddButton;
