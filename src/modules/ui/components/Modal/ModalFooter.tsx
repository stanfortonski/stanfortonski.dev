import { type ComponentProps } from 'react';

export const ModalFooter = ({ children, className }: ComponentProps<any>) => (
    <div className={`modal-footer ${className}`}>{children}</div>
);
