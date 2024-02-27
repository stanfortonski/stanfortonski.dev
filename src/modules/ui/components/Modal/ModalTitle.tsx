import { type ComponentProps } from 'react';
import classNames from 'classnames';

export const ModalTitle = ({ children, className }: ComponentProps<any>) => (
    <span className={classNames('modal__title', className)}>{children}</span>
);
