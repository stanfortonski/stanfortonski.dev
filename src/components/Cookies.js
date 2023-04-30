import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import CloseButton from './Frame/CloseButton';
import Modal from './Modal';

const Cookies = () => {
    const [show, setShow] = useState(window.localStorage.getItem('cookies') ? false : true);

    const { formatMessage } = useIntl();
    const onClose = () => {
        window.localStorage.setItem('cookies', true);
        setShow(false);
    };

    return (
        <>
            {show && (
                <Modal className="notification text-center">
                    <Modal.Header>
                        <Modal.Title>Cookies</Modal.Title>
                        <CloseButton onClick={onClose} />
                    </Modal.Header>
                    <Modal.Body>
                        <FormattedMessage id="cookies.description" />
                        <a
                            className="anr"
                            rel="nofollow noreferrer noopener"
                            href={formatMessage({ id: 'cookies.link.url' })}
                        >
                            <FormattedMessage id="Read more" />
                        </a>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default Cookies;
