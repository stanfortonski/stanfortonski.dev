export type MinimizeButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const MinimizeButton = ({ onClick }: MinimizeButtonProps) => (
    <button className="modal-btn btn-minimize" onClick={onClick}>
        _
    </button>
);
