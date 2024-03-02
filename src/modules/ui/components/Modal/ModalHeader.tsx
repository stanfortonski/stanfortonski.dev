import { type ComponentProps } from 'react';
import classNames from 'classnames';

export const ModalHeader = ({ children, className }: ComponentProps<any>) => (
    <div className={classNames('modal__header', className)}>{children}</div>
);
