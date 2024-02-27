export type MinimizeButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const MinimizeButton = ({ onClick }: MinimizeButtonProps) => (
    <button type="button" className="modal__button button-minimize" onClick={onClick}>
        _
    </button>
);
