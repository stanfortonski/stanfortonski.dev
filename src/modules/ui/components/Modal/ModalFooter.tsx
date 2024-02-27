import { type ComponentProps } from 'react';
import classNames from 'classnames';

export const ModalFooter = ({ children, className }: ComponentProps<any>) => (
    <div className={classNames('modal__footer', className)}>{children}</div>
);
