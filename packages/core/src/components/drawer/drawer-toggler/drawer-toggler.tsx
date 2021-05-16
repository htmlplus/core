import { Component, Host, Prop, h, State } from '@stencil/core';
import { Inject, reconnect } from '../drawer/drawer.link';

/**
 * @group drawer
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
@Component({
  tag: 'plus-drawer-toggler',
  styleUrl: 'drawer-toggler.scss',
  shadow: true,
})
export class DrawerToggler {

  /**
   * This property helps you to attach which drawer this toggler controls. 
   * It doesn't matter where the drawer toggler is. 
   * You can put the drawer's toggler inside or outside of the drawer. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Prop()
  connector?: string;

  @Inject()
  @State()
  open1?: boolean;

  @Inject()
  toggle?: Function = () => console.log('TODO: can not use out of drawer');

  get attributes() {
    return {
      'role': 'button',
      'state': this.open1 ? 'open' : 'close',
      'onClick': () => this.toggle()
    }
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    switch (name) {

      case 'connector':

        reconnect(this);

        break;
    }
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot>
          {this.open1 ? 'Close' : 'Open'}
        </slot>
        {/* TODO */}
        {/* <slot name="close" /> */}
        {/* <slot name="open" /> */}
      </Host>
    )
  }
}
