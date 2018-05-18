import { Component, Prop } from '@stencil/core';
import { ActiveRouter } from '@stencil/router';

@Component({
  tag: 'my-component',
  shadow: true
})
export class MyComponent {
  @Prop()
  activeRouter: ActiveRouter;
  unsubscribe: () => void;

  render() {
    return (
    <div>
      <div class="container">
        <a class="navbar-brand" href="#">
          <h1>
            <img alt="OpenForge"/>
          </h1>
        </a>

        <div>
          <ul>
            <li>
              <stencil-route-link
                url="/"
                exact={true}
                anchorClass="nav-link"
                activeClass="active"
              >
                Home
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link
                url="/about"
                exact={true}
                anchorClass="nav-link"
                activeClass="active"
              >
                About
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link
                url="/opportunities"
                exact={true}
                anchorClass="nav-link"
                activeClass="active"
              >
                Opportunities
              </stencil-route-link>
            </li>
          </ul>
        </div>
      </div>

      <main>
        <stencil-router>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route
            url="/about"
            component="app-about"
            exact={true}
          />
          <stencil-route
            url="/opportunities"
            component="app-opportunities"
            exact={true}
          />
        </stencil-router>
      </main>
    </div>
    );
  }
}
