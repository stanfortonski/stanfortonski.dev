import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { Modal, ModalBody, ModalHeader, ModalTitle, ModalFooter } from '../Modal';
import { CloseButton } from './CloseButton';
import { ExpandButton } from './ExpandButton';
import { MinimizeButton } from './MinimizeButton';

const DEFAULT_Z_INDEX = 1;
const EXPANDED_Z_INDEX = 9999;

const STATUSES = {
    default: 'default',
    minimized: 'minimized',
    expanding: 'expanding',
    expanded: 'expanded',
    closing: 'closing',
};

const FrameExpandedVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.225, delay: 0.05 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const Frame = ({
    title,
    footer,
    children,
    showExpand,
    showClose,
    showMinimize,
    className,
}) => {
    const [status, setStatus] = useState(STATUSES.default);
    const modalRef = useRef();
    const [layoutId] = useState(uuidv4());
    const inExpanded =
        status === STATUSES.expanding ||
        status === STATUSES.expanded ||
        status === STATUSES.closing;
    const zIndex = inExpanded ? EXPANDED_Z_INDEX : DEFAULT_Z_INDEX;

    useEffect(() => {
        if (status === STATUSES.expanding) {
            const delay =
                FrameExpandedVariant.animate.transition.duration * 1000 +
                FrameExpandedVariant.animate.transition.delay * 1000;
            setTimeout(() => {
                setStatus(STATUSES.expanded);
            }, delay);
        } else if (status === STATUSES.closing) {
            const delay = FrameExpandedVariant.exit.transition.duration * 1000;
            setTimeout(() => {
                setStatus(STATUSES.default);
            }, delay);
        }

        if (inExpanded) {
            document.body.style.overflowY = 'hidden';
        } else document.body.style.overflowY = 'visible';
    }, [status, inExpanded]);

    const onExpand = () => {
        if (status === STATUSES.minimized) {
            setStatus(STATUSES.default);
            setTimeout(() => {
                setStatus(STATUSES.expanding);
            }, 200);
        } else {
            setStatus(STATUSES.expanding);
        }
    };

    const onClose = () => {
        setStatus(STATUSES.closing);
    };

    const onMinimizeToggle = () => {
        setStatus((prevState) =>
            prevState === STATUSES.minimized ? STATUSES.default : STATUSES.minimized,
        );
    };

    return (
        <AnimateSharedLayout>
            <motion.div layoutId={layoutId} style={{ zIndex }}>
                {status !== STATUSES.expanded ? (
                    <Modal className={className}>
                        <div ref={modalRef}>
                            <ModalHeader>
                                <ModalTitle>{title}</ModalTitle>
                                {showExpand && <ExpandButton onClick={onExpand} />}
                                {showMinimize && <MinimizeButton onClick={onMinimizeToggle} />}
                            </ModalHeader>

                            <motion.div
                                initial={{ height: status === STATUSES.minimized ? 0 : 'auto' }}
                                animate={{ height: status !== STATUSES.minimized ? 'auto' : 0 }}
                            >
                                <ModalBody>{children}</ModalBody>

                                {footer && <ModalFooter>{footer}</ModalFooter>}
                            </motion.div>
                        </div>
                    </Modal>
                ) : (
                    <div
                        style={{
                            width: modalRef.current.parentNode.clientWidth ?? 1,
                            height: modalRef.current.parentNode.clientHeight ?? 1,
                        }}
                    ></div>
                )}
            </motion.div>

            <AnimatePresence>
                {inExpanded && (
                    <motion.div
                        layoutId={layoutId}
                        className="modal-overlay"
                        variants={FrameExpandedVariant}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        style={{ pointerEvents: 'auto', zIndex: EXPANDED_Z_INDEX }}
                    >
                        <Modal className={className}>
                            <ModalHeader>
                                <ModalTitle>{title}</ModalTitle>
                                {showClose && <CloseButton onClick={onClose} />}
                            </ModalHeader>

                            <ModalBody>{children}</ModalBody>

                            {footer && <ModalFooter>{footer}</ModalFooter>}
                        </Modal>
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

Frame.defaultProps = {
    title: '',
    showExpand: true,
    showClose: true,
    showMinimize: true,
    className: '',
};

Frame.propTypes = {
    title: PropTypes.any,
    footer: PropTypes.node,
    showExpand: PropTypes.bool,
    showClose: PropTypes.bool,
    showMinimize: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
};
