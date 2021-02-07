class Component {
  constructor(element, args = null) {
    this.element = element;
    this.args = args;
  }

  render() {
    if (typeof this.element === 'function') {
      const elementInstance = this.element(this.args);
      this.element = elementInstance;
    }

    return this.createElement(this.element);
  }

  createElement(element) {
    const { classes, child, events, id, tag, style, ...rest } = element;
    const domElement = document.createElement(tag);

    if (style) {
      this.assignStyle(domElement, style);
    }
    
    if (classes) {
      this.assignClasses(domElement, classes);
    }

    if (events && events.length) {
      this.assignEvents(domElement, events);
    }
    
    if (Object.keys(rest).length) {
      this.assignUnsigedProperties(domElement, rest);
    }

    if (id) {
      domElement.id = id;
    }

    if (child) {
      if (typeof child === 'string') {
        domElement.innerHTML = child;
      } else {
        if (child.length) {
          for (const currentChild of child) {
            const currentChildElement = this.createElement(currentChild);
            this.appendChild(domElement, currentChildElement);
          }
        } else {
          const childElement = this.createElement(child);
          this.appendChild(domElement, childElement);
        }
      }
    }

    return domElement;
  }

  appendChild(element, node) {
    if (element && node) {
      element.appendChild(node);
    }
  }

  assignStyle(element, style) {
    if (element && style) {
      for (const styleElement in style) {
        element.style[styleElement] = style[styleElement];
      }
    }
  }

  assignClasses(element, classes) {
    if (element && classes && classes.length) {
      for (const className of classes) {
        if (element && element.classList) {
          element.classList.add(className);
        }
      }
    }
  }

  assignEvents(element, events) {
    if (element && events && events.length) {
      for (const event of events) {
        const { name, handler } = event;
        element.addEventListener(name, handler);
      }
    }
  }

  assignUnsigedProperties(element, props) {
    if (element) {
      for (const prop in props) {
        element.setAttribute(prop, props[prop]);
      }
    }
  }
}

export default Component;
