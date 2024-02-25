import { type ComponentProps } from 'react';

export const ModalHeader = ({ children, className = '' }: ComponentProps<any>) => (
    <div className={`modal__header ${className}`}>{children}</div>
);
