import { type ComponentProps } from 'react';

export const ModalTitle = ({ children, className }: ComponentProps<any>) => (
    <span className={`modal-title ${className}`}>{children}</span>
);
