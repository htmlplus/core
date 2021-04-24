export type MenuAlignX = 'pointer' | 'start' | 'end' | 'left' | 'right' | 'center';
export type MenuAlignY = 'pointer' | 'top' | 'center' | 'bottom';
export type MenuGrowX = 'auto' | 'start' | 'end' | 'left' | 'right' | 'both';
export type MenuGrowY = 'auto' | 'top' | 'both' | 'bottom';
export type MenuTrigger = 'right-click' | 'left-click';
export type MenuState = 'open' | 'opening' | 'opened' | 'close' | 'closing' | 'closed';
export interface MenuGlobalState {
  instances?: Array<any>;
}
