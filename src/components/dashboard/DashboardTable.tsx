import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";

interface TableRowData {
  name: string;
  category: string;
  revenue: string;
  change: string;
  isPositive: boolean;
  sparklinePath: string;
}

const tableData: TableRowData[] = [
  {
    name: "Enterprise Plan",
    category: "Subscription",
    revenue: "$24,891",
    change: "+12.4%",
    isPositive: true,
    sparklinePath: "M0,20 L5,18 L10,22 L15,15 L20,17 L25,10 L30,12 L35,8 L40,5",
  },
  {
    name: "API Usage",
    category: "Metered",
    revenue: "$18,204",
    change: "+8.2%",
    isPositive: true,
    sparklinePath: "M0,15 L5,17 L10,14 L15,16 L20,12 L25,13 L30,9 L35,10 L40,7",
  },
  {
    name: "Starter Plan",
    category: "Subscription",
    revenue: "$9,442",
    change: "-3.1%",
    isPositive: false,
    sparklinePath: "M0,8 L5,10 L10,9 L15,12 L20,14 L25,13 L30,16 L35,18 L40,20",
  },
  {
    name: "Add-ons",
    category: "One-time",
    revenue: "$6,118",
    change: "+21.7%",
    isPositive: true,
    sparklinePath: "M0,22 L5,20 L10,18 L15,19 L20,14 L25,11 L30,8 L35,6 L40,3",
  },
];

function Sparkline({
  path,
  isPositive,
}: {
  path: string;
  isPositive: boolean;
}) {
  return (
    <svg
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      className="flex-shrink-0"
    >
      <path
        d={path}
        stroke={isPositive ? "#34d399" : "#f87171"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DashboardTable() {
  return (
    <div className="flex flex-col gap-0 px-3 md:px-4">
      <div className="flex items-center justify-between py-2 md:py-2.5">
        <span className="text-white/50 text-2xs md:text-2xs uppercase tracking-wider font-medium">
          Revenue Streams
        </span>
        <button
          className="flex items-center gap-0.5 text-white/30 hover:text-white/60 transition-colors"
          aria-label="View all revenue streams"
        >
          <span className="text-3xs md:text-2xs">View All</span>
          <ArrowUpRight className="w-2.5 h-2.5" />
        </button>
      </div>

      <div className="flex flex-col divide-y divide-white/[0.04]">
        {tableData.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between py-2 md:py-2.5 min-w-0"
          >
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <span className="text-white text-2xs md:text-xs font-medium truncate">
                {row.name}
              </span>
              <span className="text-white/30 text-3xs md:text-2xs">
                {row.category}
              </span>
            </div>

            <div className="hidden md:flex items-center justify-center flex-shrink-0 mx-3">
              <Sparkline path={row.sparklinePath} isPositive={row.isPositive} />
            </div>

            <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
              <span className="text-white text-2xs md:text-xs font-semibold">
                {row.revenue}
              </span>
              <div className="flex items-center gap-0.5">
                {row.isPositive ? (
                  <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
                ) : (
                  <TrendingDown className="w-2.5 h-2.5 text-red-400" />
                )}
                <span
                  className={`text-3xs md:text-2xs font-medium ${row.isPositive ? "text-emerald-400" : "text-red-400"}`}
                >
                  {row.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
