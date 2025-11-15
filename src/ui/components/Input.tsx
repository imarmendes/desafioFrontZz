type Props = {
  label: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ label, value, onChange, type = "text" }: Props) {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>{label}</label>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: 8,
          marginTop: 5,
        }}
      />
    </div>
  );
}
