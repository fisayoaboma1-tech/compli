import { useNavigate, useLocation } from "@tanstack/react-router";
import { ListTodo, BarChart3, Settings, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  onAddClick: () => void;
}

export function BottomNav({ onAddClick }: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { path: "/app", icon: ListTodo, label: "Today" },
    { path: "/insights", icon: BarChart3, label: "Insights" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-xl safe-area-bottom">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16 px-2">
        {links.map(({ path, icon: Icon, label }) => (
          <button
            key={path}
            onClick={() => navigate({ to: path })}
            className={cn(
              "flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl transition-colors",
              location.pathname === path
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}

        <button
          onClick={onAddClick}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg active:scale-95 transition-transform"
        >
          <Plus className="w-5 h-5" />
        </button>

        <button
          onClick={() => navigate({ to: "/settings" })}
          className={cn(
            "flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl transition-colors",
            location.pathname === "/settings"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Settings className="w-5 h-5" />
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </div>
    </nav>
  );
}