class Task {
  constructor(name, description) {
    this.id = Math.round(Math.random() * 1e5);
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
  }
}

export default Task;
