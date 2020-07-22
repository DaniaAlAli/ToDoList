import { decorate, observable } from "mobx";

//Data
import tasks from "../tasks";

class TaskStore {
  tasks = tasks;

  createTask = (newTask) => {
    newTask.id = this.tasks[this.tasks.length - 1].id + 1;
    this.tasks.push(newTask);
  };

  updateMovie = (updatedTask) => {
    const task = this.tasks.find((task) => task.id === updatedTask.id);
    task.click = !task.click;
  };

  deleteTask = (taskID) => {
    this.tasks = this.tasks.filter((task) => task.id !== taskID);
    console.log(this.tasks);
  };
}

decorate(TaskStore, { tasks: observable });

const taskStore = new TaskStore();

export default taskStore;
