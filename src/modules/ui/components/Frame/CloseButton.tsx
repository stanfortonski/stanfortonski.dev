export type CloseButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const CloseButton = ({ onClick }: CloseButtonProps) => (
    <button type="button" className="modal__button button-close" onClick={onClick}>
        <span>x</span>
    </button>
);
