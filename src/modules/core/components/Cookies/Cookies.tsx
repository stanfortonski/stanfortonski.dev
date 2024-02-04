import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CloseButton } from '../../../ui/components/Frame/CloseButton';
import { Modal, ModalHeader, ModalTitle, ModalBody } from '../../../ui/components/Modal';
import './styles.css';

export const Cookies = () => {
    const [show, setShow] = useState<boolean>(() =>
        window.localStorage.getItem('cookies') === 'true' ? false : true,
    );

    const { formatMessage } = useIntl();
    const onClose = () => {
        window.localStorage.setItem('cookies', 'true');
        setShow(false);
    };

    return (
        <>
            {show && (
                <Modal className="cookies">
                    <ModalHeader>
                        <ModalTitle>Cookies</ModalTitle>
                        <CloseButton onClick={onClose} />
                    </ModalHeader>
                    <ModalBody>
                        <FormattedMessage id="cookies.description" />
                        <a
                            className="anr"
                            rel="nofollow noreferrer noopener"
                            href={formatMessage({ id: 'cookies.link.url' })}
                        >
                            <FormattedMessage id="Read more" />
                        </a>
                    </ModalBody>
                </Modal>
            )}
        </>
    );
};
