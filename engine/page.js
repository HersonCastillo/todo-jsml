import ChangeDetection from './change-detection.js';
import Component from './component.js';
import Routing from './routing.js';

class Page {
  constructor(page, args, renderZone) {
    this.page = page;
    this.args = args;
    this.renderZone = renderZone;
  }

  manageRoutes(routes) {
    if (routes && routes.length) {
      const routing = new Routing(routes, this);
      routing.start();
    }
  }

  appendChilds(element, childs) {
    if (childs && childs.length) {
      for (const child of childs) {
        element.appendChild(child);
      }
    }
  }

  getComponents(components) {
    if (components && components.length) {
      return components.map((component) => (
        new Component(component).render()
      ));
    }
    return [];
  }

  updateDocumentTitle(title) {
    const domTitleElement = document.querySelector('title');
    domTitleElement.innerText = title;
  }

  updateRender(page, args, zone) {
    const context = new Page(page, args, zone);
    zone.innerHTML = '';
    context.render();
  }

  applyComponents(header, body, footer, zone) {
    const headerComponents = [];
    const bodyComponents = [];
    const footerComponents = [];

    if (header && header.length) {
      headerComponents.push(...this.getComponents(header));
    }
    
    if (body && body.length) {
      bodyComponents.push(...this.getComponents(body));
    }
    
    if (footer && footer.length) {
      footerComponents.push(...this.getComponents(footer));
    }

    if (headerComponents.length) {
      this.appendChilds(zone, headerComponents);
    }
    if (bodyComponents.length) {
      this.appendChilds(zone, bodyComponents);
    }
    if (footerComponents.length) {
      this.appendChilds(zone, footerComponents);
    }

    return {
      headerComponents,
      bodyComponents,
      footerComponents,
    };
  }

  render(page = null, args = null, routing = false) {
    if (page) {
      this.page = page;
      this.args = args;
    }
    if (typeof this.page === 'function') {
      this.page = this.page({
        ...this.args,
        changeDetection: new ChangeDetection(this, this.page)
      });
    }
    const zone = this.renderZone;
    const {
      header,
      body,
      footer,
      title,
      routes,
    } = this.page;
    
    if (!routing) {
      this.manageRoutes(routes);
    }

    const components = this.applyComponents(header, body, footer, zone);

    if (title && title.length) {
      this.updateDocumentTitle(title.trim());
    }

    return {
      zone,
      components,
    };
  }
}

export default Page;
