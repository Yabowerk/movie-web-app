interface Prop {
  onClick: () => void;
}
const Alert = ({ onClick }: Prop) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      Alert
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      />
    </div>
  );
};

export default Alert;
