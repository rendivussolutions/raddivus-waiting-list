import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Bell,
  Users,
  FileText,
  HelpCircle,
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function SidebarItem({ icon, label, isActive = false }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-default transition-colors ${
        isActive
          ? "bg-white/[0.08] text-white"
          : "text-white/40 hover:text-white/60"
      }`}
      aria-label={label}
    >
      <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="text-2xs md:text-2xs font-medium hidden md:block">
        {label}
      </span>
    </div>
  );
}

export function DashboardSidebar() {
  return (
    <div className="flex flex-col gap-1 px-2 py-3 border-r border-white/[0.06] w-10 md:w-32 flex-shrink-0">
      <div className="flex items-center gap-1.5 px-2 mb-3">
        <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <span className="text-emerald-400 text-3xs md:text-2xs font-bold">
            R
          </span>
        </div>
        <span className="text-white text-2xs md:text-xs font-semibold hidden md:block">
          Raddivus
        </span>
      </div>

      <SidebarItem
        icon={<LayoutDashboard className="w-3.5 h-3.5" />}
        label="Dashboard"
        isActive
      />
      <SidebarItem
        icon={<BarChart3 className="w-3.5 h-3.5" />}
        label="Analytics"
      />
      <SidebarItem icon={<Users className="w-3.5 h-3.5" />} label="Customers" />
      <SidebarItem
        icon={<FileText className="w-3.5 h-3.5" />}
        label="Reports"
      />
      <SidebarItem
        icon={<Bell className="w-3.5 h-3.5" />}
        label="Notifications"
      />

      <div className="mt-auto">
        <SidebarItem
          icon={<Settings className="w-3.5 h-3.5" />}
          label="Settings"
        />
        <SidebarItem
          icon={<HelpCircle className="w-3.5 h-3.5" />}
          label="Help"
        />
      </div>
    </div>
  );
}
