import { Car, IdCard, MapPin, Percent, Star } from "lucide-react";

function Progressbarandheader({ current_step, title, body }) {
  return (
    <div className="text-center">
      {/* هدر کوچک بالا - ارتفاع کمتر */}
      <div className="flex items-center justify-center gap-2">
        <div className="text-orange-500 bg-orange-50 p-1.5 rounded-xl">
          <Car size={24} />
        </div>
        <h2 className="font-bold text-gray-900 text-lg">بیمه خودرو</h2>
      </div>

      {/* استپ‌بار - فاصله کمتر */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {[1, 2, 3, 4, 5].map((step) => (
          <span
            key={step}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              step <= current_step ? "bg-orange-500 w-12" : "bg-gray-200 w-12"
            }`}
          />
        ))}
      </div>

      {/* تیتر اصلی - فاصله کمتر (mt-10 -> mt-5) */}
      <h1 className="mt-5 text-2xl md:text-3xl font-black text-gray-900">
        {title}
      </h1>

      {/* متن توضیحات */}
      <p className="mt-2 text-gray-500 text-sm">{body}</p>
    </div>
  );
}

export default Progressbarandheader;
