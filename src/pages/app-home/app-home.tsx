import { Component } from '@stencil/core';

@Component({
  tag: 'app-home'
})
export class AppHome {

  render() {
    return (
      <div>
        <app-hero
          link-url="mailto:hello@openforge.io"
        >
          <span slot="header">We are thinkers, makers &amp; doers</span>
          <span slot="body">
            Work with our team of highly skilled consultants, developers, and
            designers to develop solutions and processes to fit your
            requirements.
          </span>
          <span slot="link">Learn More</span>
        </app-hero>

        <section id="approach">
          <div class="container">
            <h2>
              <span class="small">Our Approach</span>
              We use the latest technology to build your business. Let's show
              you how!
            </h2>
            <div>
              <div>
                <h3>
                  <span class="small">First </span>Consulting
                </h3>
                <p>
                  Are you ready to challenge your assumptions? We'll help you
                  identify your goals and guide you along the way in 1:1 and
                  group sessions.
                </p>
              </div>
              <div>
                <h3>
                  <span class="small">Second </span>User experience Design
                </h3>
                <p>
                  Whether you're looking to design an interactive user interface
                  or make improvements to your current app's user experience,
                  we're here to help.
                </p>
              </div>
              <div>
                <h3>
                  <span class="small">Third </span>Development
                </h3>
                <p>
                  We're experts in mobile and web app development. We specialize
                  in web technologies including Ionic, React, Stencil, Angular,
                  Node, MongoDB, and MySQL.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
