import { type ComponentProps } from 'react';

export const ModalBody = ({ children, className }: ComponentProps<any>) => (
    <div className={`modal-body ${className}`}>{children}</div>
);
