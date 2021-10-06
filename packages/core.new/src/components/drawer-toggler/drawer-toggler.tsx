import { Component, Host, Property, State } from '@app/decorators';
import { createLink } from '@app/services';

const { Inject, reconnect } = createLink('Drawer');

/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
@Component()
export class DrawerToggler {

  /**
   * This property helps you to attach which drawer this toggler controls. 
   * It doesn't matter where the drawer toggler is. 
   * You can put the drawer's toggler inside or outside of the drawer. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Property()
  connector?: string;

  @Inject()
  toggle?: Function = () => console.log('TODO: can not use out of drawer');

  @Inject()
  @State()
  tunnel?: boolean;

  get attributes() {
    return {
      'role': 'button',
      'state': this.tunnel ? 'open' : 'close',
      'onClick': this.toggle
    }
  }

  get text() {
    return this.tunnel ? 'Close' : 'Open';
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
          {this.text}
        </slot>
        {/* TODO */}
        {/* <slot name="close" />
        <slot name="open" /> */}
      </Host>
    )
  }
}

