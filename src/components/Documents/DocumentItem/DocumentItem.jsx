function DocumentItem({ id, title, desc, icon: Icon }) {
  return (
    <button className="w-full bg-white rounded-2xl px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-3 text-right hover:border-orange-200 hover:shadow-orange-100/50 transition-all">
      <span className="w-9 h-9 shrink-0 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
        {id}
      </span>

      <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
        <Icon size={26} strokeWidth={2} />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 text-base md:text-lg">
          {title}
        </h3>

        <p className="mt-1 text-gray-500 text-xs md:text-sm leading-5">
          {desc}
        </p>
      </div>
    </button>
  );
}

export default DocumentItem;
