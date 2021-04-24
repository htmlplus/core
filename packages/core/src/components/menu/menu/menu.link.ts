import { createLink } from '@app/utils';
import { MenuState } from './menu.types';

export interface MenuLink {
    state?: MenuState;
    // toggle?: Function;
}

const initial = {
    state: 'closed' as MenuState,
    // toggle: () => undefined
};

export const { Link, rebind } = createLink<MenuLink>(initial);
