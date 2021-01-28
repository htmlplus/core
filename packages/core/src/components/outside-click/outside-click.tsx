import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Bind, GlobalConfig, OutsideClick as OutsideClickCore } from '@app/services';

/**
 * TODO
 * @development
 * @examples default
 */
@Component({
  tag: 'plus-outside-click',
  styleUrl: 'outside-click.scss',
  shadow: true
})
export class OutsideClick {

  /**
   * TODO
   */
  @Prop()
  disabled?: boolean;

  /**
   * TODO
   */
  @Prop()
  once?: boolean;

  /**
  * TODO
  */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusOutsideClick!: EventEmitter;

  @GlobalConfig('outsideClick')
  config?;

  @Element()
  $host!: HTMLElement;

  @Bind
  callback() {

    if (this.disabled) return;

    this.plusOutsideClick.emit();

    this.once && this.disconnectedCallback();
  }

  connectedCallback() {
    OutsideClickCore.add(this.$host, this.callback);
  }

  disconnectedCallback() {
    OutsideClickCore.remove(this.$host);
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
