import { Component } from '@stencil/core';

@Component({
  tag: 'app-opportunities'
})
export class AppOpportunities {

  render() {
    return (
      <div class="opportunities">
        <app-hero background-url="assets/bg-hero-mountain.jpg">
          <span slot="header">OpenForge is hiring two amazing developers!</span>
          <span slot="body">
            Looking for a new adventure? Want to know if you're the right fit
            for the team?
            <br />
            <br />
            Scroll down to find out!
          </span>
        </app-hero>
      </div>
    );
  }
}
