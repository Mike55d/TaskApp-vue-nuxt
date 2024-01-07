import { defineStore } from "pinia";
import { v4 as uid } from "uuid";
import type { Task } from "./types";

type TodoState = {
  tasks: Task[];
};

export const todoStore = defineStore("todo", {
  state: (): TodoState => ({
    tasks: [],
  }),
  getters: {},
  actions: {
    async addTask(title: string) {
      this.tasks.push({ id: uid(), title, completed: false });
    },
    async toggleStatusTask(id: string) {
      this.tasks = this.tasks.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : task
      );
    },
    async deleteTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});
