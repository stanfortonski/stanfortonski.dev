import { type ComponentProps } from 'react';

export const ModalHeader = ({ children, className }: ComponentProps<any>) => (
    <div className={`modal-header ${className}`}>{children}</div>
);
