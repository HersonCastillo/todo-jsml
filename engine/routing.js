class Routing {
  constructor(routes, pageInstance) {
    this.currentHash = location.hash;
    this.routes = routes;
    this.currentPage = null;
    this.pageInstance = pageInstance;
    window.onhashchange = this.hashChangeEvent.bind(this);
  }

  start() {
    const currentRoute = this.manageCurrentHash();
    this.renderPage(currentRoute);
  }

  hashChangeEvent() {
    this.currentHash = location.hash;
    const currentRoute = this.manageCurrentHash();
    this.renderPage(currentRoute);
  }

  manageCurrentHash() {
    if (this.currentHash.length === 0) {
      location.href = "#";
      return null;
    }
    const pureRoute = this.currentHash.replace('#', '');
    return pureRoute.trim();
  }

  evaluateCleanZone(page) {
    if (page) {
      const currentPage = this.currentPage;
      if (currentPage) {
        return currentPage.path !== page.path;
      } else {
        return true;
      }
    }
    return false;
  }

  cleanZone() {
    this.pageInstance.renderZone.innerHTML = "";
  }

  renderPage(currentRoute) {
    const { routes } = this;
    const notFound = routes.find((route) => (route.path.includes('**')));
    const currentPage = routes.find((route) => (
      route.path === currentRoute)
      || (Boolean(route.runOnEmpty) && !currentRoute)
    );

    if (currentPage) {
      const { page, args } = currentPage;
      const renderStatus = this.evaluateCleanZone(page);
      this.currentPage = currentPage;
      if (renderStatus) {
        this.cleanZone();
        this.pageInstance.render(page, args, true);
      }
    } else if (notFound) {
      const { page, args } = notFound;
      const renderStatus = this.evaluateCleanZone(notFound);
      this.currentPage = notFound;
      if (renderStatus) {
        this.cleanZone();
        this.pageInstance.render(page, args, true);
      }
    } else {
      throw Error('Wrong routing configuration');
    }
  }
}

export default Routing;
