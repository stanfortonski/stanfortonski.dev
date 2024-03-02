import { useEffect, useState } from 'react';

export const DEFAULT_Z_INDEX = 1;
export const EXPANDED_Z_INDEX = 9999;

export enum STATUSES {
    default,
    expanding,
    expanded,
    closing,
}

export const useFrameStatus = ({ variantAnimation }: any) => {
    const [status, setStatus] = useState(STATUSES.default);
    const inExpanded =
        status === STATUSES.expanding ||
        status === STATUSES.expanded ||
        status === STATUSES.closing;
    const zIndex = inExpanded ? EXPANDED_Z_INDEX : DEFAULT_Z_INDEX;

    useEffect(() => {
        if (status === STATUSES.expanding) {
            const delay =
                variantAnimation.animate.transition.duration * 1000 +
                variantAnimation.animate.transition.delay * 1000;
            setTimeout(() => {
                setStatus(STATUSES.expanded);
            }, delay);
        } else if (status === STATUSES.closing) {
            const delay = variantAnimation.exit.transition.duration * 1000;
            setTimeout(() => {
                setStatus(STATUSES.default);
            }, delay);
        }

        if (inExpanded) {
            document.body.style.overflowY = 'hidden';
        } else document.body.style.overflowY = 'visible';
    }, [status, inExpanded, variantAnimation]);

    const onExpand = () => {
        setStatus(STATUSES.expanding);
    };

    const onClose = () => {
        setStatus(STATUSES.closing);
    };

    return {
        status,
        inExpanded,
        zIndex,
        onExpand,
        onClose,
    };
};
