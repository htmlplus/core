import { Component, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';
import { AlignSelfs, Columns, Offsets, Orders } from './grid-item.types';

/**
 * Use as many hp-grid-items as you want inside a hp-grid to layout your content.
 * @group grid
 * @slot - The default slot
 */
@Component({
  tag: 'plus-grid-item',
  styleUrl: 'grid-item.scss',
  shadow: true,
})
export class GridItem {

  /**
   * Aligns the grid-item vertically in its container (grid).
   * It overrides the align-items property of its parent.
   */
  @Prop({ reflect: true })
  alignSelf?: AlignSelfs = 'auto';

  /**
   * Aligns the grid-item vertically in its container (grid) for extra-small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for extra-small breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfXs?: AlignSelfs;

  /**
   * Aligns the grid-item vertically in its container (grid) for small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for small breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfSm?: AlignSelfs;

  /**
   * Aligns the grid-item vertically in its container (grid) for medium display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for medium breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfMd?: AlignSelfs;

  /**
   * Aligns the grid-item vertically in its container (grid) for large display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for large breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfLg?: AlignSelfs;

  /**
   * Aligns the grid-item vertically in its container (grid) for extra-large display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for extra-large breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfXl?: AlignSelfs;

  /**
   * Specifies the number of columns for extra-small viewports (mobile phones).
   * It also determines the number of columns for bigger display sizes when
   * other upper breakpoints (sm, md, lg, and xl) are not specified.
   */
  @Prop({ reflect: true })
  xs?: Columns;

  /**
   * Specifies the number of columns for small viewports (smartphones).
   * It also determines the number of columns for bigger display sizes when
   * other upper breakpoints (md, lg, and xl) are not specified.
   */
  @Prop({ reflect: true })
  sm?: Columns;

  /**
   * Specifies the number of columns for medium viewports (tablets).
   * It also determines the number of columns for bigger display sizes when
   * other upper breakpoints (lg and xl) are not specified.
   */
  @Prop({ reflect: true })
  md?: Columns;

  /**
   * Specifies the number of columns for large viewports (desktop).
   * It also determines the number of columns for bigger display sizes when
   * the upper breakpoint (xl) is not specified.
   */
  @Prop({ reflect: true })
  lg?: Columns;

  /**
   * Specifies the number of columns for extra-large viewports (wide desktop screen).
   */
  @Prop({ reflect: true })
  xl?: Columns;

  /**
   * Hides the grid-item in extra-small display sizes (mobile phones).
   */
  @Prop({ reflect: true })
  hideXs?: boolean;

  /**
   * Hides the grid-item in small display sizes (smartphones).
   */
  @Prop({ reflect: true })
  hideSm?: boolean;

  /**
   * Hides the grid-item in medium display sizes (tablets).
   */
  @Prop({ reflect: true })
  hideMd?: boolean;

  /**
   * Hides the grid-item in large display sizes (desktop).
   */
  @Prop({ reflect: true })
  hideLg?: boolean;

  /**
   * Hides the grid-item in extra-large display sizes (wide desktop screen).
   */
  @Prop({ reflect: true })
  hideXl?: boolean;

  /**
   * Hides the grid-item in all display sizes.
   */
  @Prop({ reflect: true })
  hide?: boolean;

  /**
   * Hides the grid-item in small and larger display sizes.
   */
  @Prop({ reflect: true })
  hideSmUp?: boolean;

  /**
   * Hides the grid-item in medium and larger display sizes.
   */
  @Prop({ reflect: true })
  hideMdUp?: boolean;

  /**
   * Hides the grid-item in large and larger display sizes.
   */
  @Prop({ reflect: true })
  hideLgUp?: boolean;

  /**
   * Hides the grid-item in small and smaller display sizes.
   */
  @Prop({ reflect: true })
  hideSmDown?: boolean;

  /**
   * Hides the grid-item in medium and smaller display sizes.
   */
  @Prop({ reflect: true })
  hideMdDown?: boolean;

  /**
   * Hides the grid-item in large and smaller display sizes.
   */
  @Prop({ reflect: true })
  hideLgDown?: boolean;

  /**
   * Adds an offset space before the grid-item for extra-small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  offsetXs?: Offsets;

  /**
   * Adds an offset space before the grid-item for small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  offsetSm?: Offsets;

  /**
   * Adds an offset space before the grid-item for medium display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  offsetMd?: Offsets;

  /**
   * Adds an offset space before the grid-item for large display sizes.
   * It also applies to the larger breakpoint (xl) while that is not specified.
   */
  @Prop({ reflect: true })
  offsetLg?: Offsets;

  /**
   * Adds an offset space before the grid-item for extra-large display sizes.
   */
  @Prop({ reflect: true })
  offsetXl?: Offsets;

  /**
   * Overrides the default order of the grid-item for extra-small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  orderXs?: Orders;

  /**
   * Overrides the default order of the grid-item for small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  orderSm?: Orders;

  /**
   * Overrides the default order of the grid-item for medium display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  orderMd?: Orders;

  /**
   * Overrides the default order of the grid-item for large display sizes.
   * It also applies to the larger breakpoint (xl) while that is not specified.
   */
  @Prop({ reflect: true })
  orderLg?: Orders;

  /**
   * Overrides the default order of the grid-item for extra-large display sizes.
   */
  @Prop({ reflect: true })
  orderXl?: Orders;

  @GlobalConfig('gridItem')
  config?;

  render() {
    return (
      <slot />
    );
  }
}