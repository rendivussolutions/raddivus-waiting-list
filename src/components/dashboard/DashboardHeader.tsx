import { Users, Wallet, ChevronRight } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 border-b border-white/[0.06]">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-white/[0.06] flex items-center justify-center">
            <Users className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/60" />
          </div>
          <div className="flex flex-col">
            <span className="text-white/40 text-3xs md:text-3xs uppercase tracking-wider leading-none">
              Users
            </span>
            <span className="text-white text-2xs md:text-xs font-semibold leading-tight">
              12,847
            </span>
          </div>
        </div>
        <div className="w-px h-6 bg-white/[0.06]" />
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-white/[0.06] flex items-center justify-center">
            <Wallet className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/60" />
          </div>
          <div className="flex flex-col">
            <span className="text-white/40 text-3xs md:text-3xs uppercase tracking-wider leading-none">
              Balance
            </span>
            <span className="text-white text-2xs md:text-xs font-semibold leading-tight">
              $84,291
            </span>
          </div>
        </div>
      </div>
      <button
        className="flex items-center gap-0.5 text-white/40 hover:text-white/70 transition-colors"
        aria-label="View all stats"
      >
        <span className="text-3xs md:text-2xs uppercase tracking-wider">
          View All
        </span>
        <ChevronRight className="w-3 h-3" />
      </button>
    </div>
  );
}
