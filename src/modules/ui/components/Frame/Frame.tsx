import { type ReactNode, useRef, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Modal, ModalBody, ModalHeader, ModalTitle, ModalFooter } from '../Modal';
import { CloseButton } from './CloseButton';
import { ExpandButton } from './ExpandButton';
import { MinimizeButton } from './MinimizeButton';
import { useFrameStatus, STATUSES } from './useFrameStatus';

export type FrameProps = {
    title: string | ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    showExpand?: boolean;
    showClose?: boolean;
    showMinimize?: boolean;
    className?: string;
};

export const FrameExpandedVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.225, delay: 0.05 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const Frame = ({
    title,
    footer,
    children,
    showExpand = true,
    showClose = true,
    showMinimize = true,
    className,
}: FrameProps) => {
    const { status, inExpanded, zIndex, onExpand, onClose, onMinimizeToggle } = useFrameStatus({
        variantAnimation: FrameExpandedVariant,
    });
    const modalRef: any = useRef<HTMLDivElement>();
    const layoutId = useId();

    return (
        <>
            <motion.div layoutId={layoutId} style={{ zIndex }}>
                {status !== STATUSES.expanded ? (
                    <Modal className={className} ref={modalRef}>
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
                    </Modal>
                ) : (
                    <div
                        style={{
                            width: modalRef?.current?.parentNode?.clientWidth ?? 1,
                            height: modalRef?.current?.parentNode?.clientHeight ?? 1,
                        }}
                    ></div>
                )}
            </motion.div>

            <AnimatePresence>
                {inExpanded && (
                    <motion.div
                        layoutId={layoutId}
                        className="modal__overlay"
                        variants={FrameExpandedVariant}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        style={{ pointerEvents: 'auto', zIndex }}
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
        </>
    );
};
