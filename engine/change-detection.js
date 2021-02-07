class ChangeDetection {
  constructor(page, pageFunction) {
    this.page = page;
    this.pageFunction = pageFunction;
  }

  update() {
    const { args, renderZone, updateRender } = this.page;
    updateRender(this.pageFunction, args, renderZone);
  }
}

export default ChangeDetection;