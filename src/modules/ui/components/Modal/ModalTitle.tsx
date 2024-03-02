import { type ComponentProps } from 'react';
import classNames from 'classnames';

export const ModalTitle = ({ children, className }: ComponentProps<any>) => (
    <div className={classNames('modal__title', className)}>{children}</div>
);
