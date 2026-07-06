export function Boolbadage({ type, message0, message1 }) {
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

export function Boolbadage_3message({ type, message0, message1, message2 }) {
  // مشخص کردن کلاس‌های رنگی بر اساس مقدار type
  const getBadgeStyles = () => {
    switch (type) {
      case "0":
        return "bg-green-50 text-green-700 border border-green-200"; // نقد
      case "1":
        return "bg-blue-50 text-blue-700 border border-blue-200";   // اقساط
      case "2":
        return "bg-amber-50 text-amber-700 border border-amber-200"; // هر دو روش
      default:
        return "bg-gray-50 text-gray-700 border border-gray-200";
    }
  };

  // مشخص کردن متن بر اساس مقدار type
  const getMessage = () => {
    if (type === "0") return message0;
    if (type === "1") return message1;
    if (type === "2") return message2;
    return "";
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-xs font-semibold ${getBadgeStyles()}`}
    >
      {getMessage()}
    </span>
  );
}




