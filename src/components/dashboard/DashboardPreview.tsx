import { Layers, Database, Shield, Coins } from "lucide-react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardWelcome } from "./DashboardWelcome";
import { DashboardTable } from "./DashboardTable";
import { ExchangeCard } from "./ExchangeCard";

export function DashboardPreview() {
  return (
    <div
      className="relative w-full max-w-4xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden backdrop-blur-md"
      style={{
        boxShadow:
          "0 0 80px rgba(0, 0, 0, 0.4), inset 0 0 60px rgba(255, 255, 255, 0.03)",
      }}
    >
      <div className="flex min-h-[320px] md:min-h-[420px]">
        <DashboardSidebar />

        <div className="flex flex-col flex-1 min-w-0">
          <DashboardHeader />
          <DashboardWelcome />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3">
            <ExchangeCard
              icon={<Layers className="w-3.5 h-3.5 text-blue-400" />}
              name="Operations"
              value="$32,481"
              change="+14.2%"
              isPositive={true}
            />
            <ExchangeCard
              icon={<Database className="w-3.5 h-3.5 text-violet-400" />}
              name="Data Sync"
              value="$18,927"
              change="+8.7%"
              isPositive={true}
            />
            <ExchangeCard
              icon={<Shield className="w-3.5 h-3.5 text-emerald-400" />}
              name="Security"
              value="$12,094"
              change="-2.3%"
              isPositive={false}
            />
            <ExchangeCard
              icon={<Coins className="w-3.5 h-3.5 text-amber-400" />}
              name="Billing"
              value="$27,316"
              change="+19.5%"
              isPositive={true}
            />
          </div>

          <DashboardTable />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </div>
  );
}
