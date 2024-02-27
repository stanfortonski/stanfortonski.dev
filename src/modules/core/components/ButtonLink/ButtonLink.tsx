export type ButtonLinkProps = {
    to: string;
    target?: string;
    className?: string;
    onClick?: CallableFunction;
    children: React.ReactNode;
};

export const ButtonLink = ({
    to,
    className,
    onClick,
    children,
    target = undefined,
    ...props
}: ButtonLinkProps) => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        onClick?.(e);
        if (target !== undefined) window.open(to, target);
        else window.location.href = to;
    };

    return (
        <button type="button" className={className} onClick={handleClick} {...props}>
            {children}
        </button>
    );
};
