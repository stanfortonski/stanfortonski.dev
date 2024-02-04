import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Modal, ModalBody, ModalHeader, ModalTitle } from '../Modal';
import { CloseButton } from '../Frame/CloseButton';
import './styles.css';

const navMenuOverlayVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2 },
    },
};

const navMenuVariants = {
    initial: { y: '-100%' },
    animate: {
        y: 0,
        transition: { type: 'spring', stiffness: 85 },
    },
    exit: { y: '-100%' },
};

export const Nav = () => {
    const intl = useIntl();
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevState) => {
            if (!prevState) document.body.style.overflowY = 'hidden';
            else document.body.style.overflowY = 'visible';

            return !prevState;
        });
    };

    return (
        <nav className="nav">
            <button className="nav-toggler" onClick={toggleMenu}>
                <span className="label">Menu</span>
            </button>

            <AnimatePresence>
                {show && (
                    <motion.div
                        className="nav-menu-overlay"
                        variants={navMenuOverlayVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <motion.div className="nav-menu" variants={navMenuVariants}>
                            <Modal>
                                <ModalHeader>
                                    <ModalTitle>Menu</ModalTitle>
                                    <CloseButton onClick={toggleMenu} />
                                </ModalHeader>
                                <ModalBody>
                                    <ul>
                                        <li>
                                            <Link
                                                className="btn btn-chars btn-shadows w-full mb-5"
                                                to={`/${intl.locale}`}
                                            >
                                                <FormattedMessage id="index.title" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="btn btn-chars btn-shadows w-full mb-5"
                                                to={`/${intl.locale}/projects`}
                                            >
                                                <FormattedMessage id="projects.title" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="btn btn-chars btn-shadows w-full mb-5"
                                                to={`/${intl.locale}/contact`}
                                            >
                                                <FormattedMessage id="contact.title" />
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                className="btn btn-chars btn-shadows w-full mb-5"
                                                href="https://github.com/stanfortonski"
                                            >
                                                <FormattedMessage id="My GitHub" />
                                            </a>
                                        </li>
                                    </ul>
                                </ModalBody>
                            </Modal>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
