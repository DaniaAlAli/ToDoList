import { decorate, observable } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

  fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/tasks");
      this.tasks = res.data;
    } catch (error) {
      console.log("error", error);
    }
  };

  createTask = async (newTask) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newTask);
      this.tasks.push(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  updateTask = async (taskID) => {
    try {
      await axios.put(`http://localhost:8000/tasks/${taskID}`);
      const task = this.tasks.find((task) => task.id === +taskID);
      task.click = !task.click;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  deleteTask = async (taskID) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskID}`);
      this.tasks = this.tasks.filter((task) => task.id !== taskID);
    } catch (error) {
      console.log("ItemStore -> deleteItem -> error", error);
    }
  };
}

decorate(TaskStore, { tasks: observable });

const taskStore = new TaskStore();
taskStore.fetchTasks();
export default taskStore;
