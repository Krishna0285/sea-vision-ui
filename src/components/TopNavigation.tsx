import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Waves, Moon, Sun, Bell, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { title: "Dashboard", path: "/" },
  { title: "Detection", path: "/detection" },
  { title: "Heatmap", path: "/heatmap" },
  { title: "Cleanup", path: "/cleanup" },
  { title: "Reports", path: "/reports" },
  { title: "History", path: "/history" },
  { title: "Settings", path: "/settings" },
];

export default function TopNavigation() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SeaVision</h1>
              <p className="text-xs text-muted-foreground">Ocean Plastic Detection</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                activeClassName="text-primary bg-primary/10"
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
