type ButtonProps = {
  label: string;
  disabled?: boolean;
};

export default function Button({ label, disabled }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      style={{
        width: "100%",
        padding: 10,
        marginTop: 10,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {label}
    </button>
  );
}
