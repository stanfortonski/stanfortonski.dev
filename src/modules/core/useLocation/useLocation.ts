export const useLocation = () => {
    const pathname = window.location.pathname.replace('/en/', '').replace('/pl/', '');

    return {
        pathname,
    };
};
