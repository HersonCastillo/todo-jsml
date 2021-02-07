class Storage {
  static key = 'todo';
  static list = [];

  static init(evaluation = true) {
    const item = localStorage.getItem(this.key);
    if (!!item && evaluation) {
      try {
        const records = JSON.parse(item);
        this.list = [...records];
      } catch (ex) {
        this.init(false);
      }
    } else {
      localStorage.setItem(this.key, '[]');
    }
  }

  static add(task) {
    this.list = [
      ...this.list,
      task,
    ];
    return this.updateStorageRecords();
  }

  static delete(id) {
    this.list = [
      ...this.list.filter((item) => (item.id !== id)),
    ];
    return this.updateStorageRecords();
  }

  static update(id, task) {
    const currentItem = this.list.find((item) => (item.id === id));
    if (currentItem) {
      const itemUpdated = {
        ...currentItem,
        ...task,
      };
      this.list = [
        ...this.list.filter((item) => (item.id !== id)),
        itemUpdated,
      ];
      return this.updateStorageRecords();
    }
    return false;
  }

  static get() {
    return this.list;
  }

  static getOne(id) {
    return this.list.find((task) => (task.id === id));
  }

  static updateStorageRecords() {
    try {
      localStorage.setItem(this.key, JSON.stringify(this.list));
      return true;
    } catch (ex) {
      console.error(ex);
      return false;
    }
  }
}

export default Storage;
