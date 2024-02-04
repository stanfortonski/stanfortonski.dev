import { type ComponentProps } from 'react';

import './styles.css';

export const Modal = ({ className, children }: ComponentProps<any>) => (
    <div className={`modal ${className}`}>{children}</div>
);
