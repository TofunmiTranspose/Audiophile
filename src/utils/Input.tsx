const Input = ({
  type,
  id,
  label,
  placeholder,
  span,
}: {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  span?: number;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${span === 2 ? "col-span-2" : ""}`}>
      <label htmlFor={id} className="text-sm font-bold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border border-gray-200 rounded md:rounded-lg p-2"
      />
    </div>
  );
};

export default Input;
