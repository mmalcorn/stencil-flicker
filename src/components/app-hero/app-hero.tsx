import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-hero',
  styleUrl: 'app-hero.scss',
})
export class AppHero {
  @Prop() linkUrl: string;

  render() {
    return (
      <header class="hero">
        <div>
          <div>
            <div>
              <h2>
                <slot name="header" />
              </h2>

              <p>
                <slot name="body" />
              </p>
              <a href={this.linkUrl} class="btn btn-primary" target="_blank">
                <slot name="link" />
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
