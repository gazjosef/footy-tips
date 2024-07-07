interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  autoComplete: string;
}

export default function InputField({
  label,
  type,
  id,
  name,
  placeholder,
  autoComplete,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-gray-600 text-sm font-semibold"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-0"
        autoComplete={autoComplete}
      />
    </div>
  );
}
