import DesktopTable from '../DashboardTable/DesktopTable'
import MobileTable from '../DashboardTable/MobileTable'

function DashboardTable({ rows, onViewDetails }) {
  return (
    <div className="w-full">
      {/* Mobile / Tablet */}
    <MobileTable rows={rows} onViewDetails={onViewDetails}></MobileTable>

      {/* Desktop */}
    <DesktopTable rows={rows} onViewDetails={onViewDetails}></DesktopTable>
    </div>
  );
}

export default DashboardTable;
