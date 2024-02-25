import { type ComponentProps } from 'react';

export const ModalTitle = ({ children, className = '' }: ComponentProps<any>) => (
    <span className={`modal__title ${className}`}>{children}</span>
);
