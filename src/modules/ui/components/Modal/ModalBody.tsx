import { type ComponentProps } from 'react';
import classNames from 'classnames';

export const ModalBody = ({ children, className }: ComponentProps<any>) => (
    <div className={classNames('modal__body', className)}>{children}</div>
);
