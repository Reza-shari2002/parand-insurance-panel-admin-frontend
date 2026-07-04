import RowCard from "./RowCard.jsx";
import Boolbadage from "./Boolbadage.jsx";
function MobileTable({ rows, onViewDetails }){

    return(<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
        {rows.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-sm text-gray-500">
            موردی یافت نشد.
          </div>
        ) : (
          rows.map((r) => (
            <RowCard key={r.id} r={r} onViewDetails={onViewDetails} />
          ))
        )}
      </div>)
}


export default MobileTable;