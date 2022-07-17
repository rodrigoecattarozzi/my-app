import ButtonLoading from "./ButtonLoading";

const Button = ({ text, type, color = "purple", loading, onClick }) => {
  if (loading) return <ButtonLoading />;

  let classColor;
  if (color === "purple") {
    classColor =
      "bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 focus:outline-none text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2";
  }
  if (color === "blue") {
    classColor =
      "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 focus:outline-none text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2";
  }
  if (color === "red") {
    classColor =
      "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 focus:outline-none text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2";
  }
  if (color === "yellow") {
    classColor =
      "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900 focus:outline-none text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2";
  }

  if (color === "emerald") {
    classColor =
      "bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-400 dark:bg-emerald-700 dark:hover:bg-emerald-800 dark:focus:ring-emerald-900 focus:outline-none text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2";
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={classColor}
    >
      {text}
    </button>
  );
};
export default Button;
