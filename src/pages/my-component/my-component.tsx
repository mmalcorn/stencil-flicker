import { Component, Prop } from '@stencil/core';
import { ActiveRouter } from '@stencil/router';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  @Prop({ context: 'activeRouter' })
  activeRouter: ActiveRouter;
  unsubscribe: () => void;

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark align-items-lg-end fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              <h1>
                <img
                  class="img-fluid"
                  src="assets/logo-openforge.png"
                  alt="OpenForge"
                />
              </h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-md-auto">
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/"
                    exact={true}
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Home
                  </stencil-route-link>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/about"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    About
                  </stencil-route-link>
                </li>
                {/* <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/contact"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Contact
                  </stencil-route-link>
                </li> */}
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <a
                    class="nav-link"
                    href="https://github.com/openforge"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
                {/* <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/opportunities"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Opportunities
                  </stencil-route-link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <stencil-router>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route
              url="/about"
              component="app-about"
              exact={true}
            />
            {/* <stencil-route
              url="/opportunities"
              component="app-opportunities"
              exact={true}
            /> */}
          </stencil-router>
        </main>
      </div>
    );
  }
}
