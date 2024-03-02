import { isBrowser } from '../../utils/helpers';

export const useLocation = () => {
    let pathname = '';
    if (isBrowser()) {
        pathname = window.location.pathname.replace('/en/', '').replace('/pl/', '');
    }
    return {
        pathname,
    };
};
