import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';
import { CardElevation } from './card.types';

/**
 * Cards contain content and actions about a single subject.
 * @group1 card
 * @slot default - The default slot.
 * @examples default, elevation, outlined, border-color, border-width, tile, background-color, customize
 */
@Component({
  tag: 'plus-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {

  /**
   * If you want the card to have shadow, use the elevation property, 
   * And select the property value between `1` and `24`.
   */
  @Prop({ reflect: true })
  elevation?: CardElevation;

  /**
   * Use the flat property to neutralize elevation.
   */
  @Prop({ reflect: true })
  flat?: boolean;

  /**
   * If you want the card to have border, use the outlined property.
   */
  @Prop({ reflect: true })
  outlined?: boolean;

  /**
   * Use tile property to neutralize border-radius.
   */
  @Prop({ reflect: true })
  tile?: boolean;

  @GlobalConfig('card')
  config!: any;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
