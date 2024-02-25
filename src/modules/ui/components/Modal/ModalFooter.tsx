import { type ComponentProps } from 'react';

export const ModalFooter = ({ children, className = '' }: ComponentProps<any>) => (
    <div className={`modal__footer ${className}`}>{children}</div>
);
