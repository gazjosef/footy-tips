interface ButtonProps {
  title: string;
}
export default function Button({ title }: ButtonProps) {
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
    >
      {title}
    </button>
  );
}
