function Boolbadage({ type, message0, message1 }) {
  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-1 rounded-lg text-xs font-semibold ${
        type === "0"
          ? "bg-green-50 text-amber-300"
          : "bg-gray-100 text-green-500"
      }`}
    >
      {type === "0" ? message0 : message1}
    </span>
  );
}

export default Boolbadage;