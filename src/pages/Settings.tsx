import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Moon, Sun, Bell, Key, Info, User } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your SeaVision preferences and configuration</p>
        </div>

        <div className="space-y-6">
          {/* Appearance */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                {isDark ? <Moon className="w-5 h-5 text-white" /> : <Sun className="w-5 h-5 text-white" />}
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">Appearance</h2>
                <p className="text-sm text-muted-foreground">Customize the visual theme</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
                </div>
                <Button
                  onClick={toggleTheme}
                  variant="outline"
                  className={`${isDark ? 'bg-primary text-white' : 'bg-background'}`}
                >
                  {isDark ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
                  {isDark ? 'Dark' : 'Light'}
                </Button>
              </div>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">Notifications</h2>
                <p className="text-sm text-muted-foreground">Manage alert preferences</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Detection Alerts</p>
                  <p className="text-sm text-muted-foreground">Notify when detection completes</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Critical Severity Alerts</p>
                  <p className="text-sm text-muted-foreground">Alert for high-risk detections</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Weekly Reports</p>
                  <p className="text-sm text-muted-foreground">Receive summary emails</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded" />
              </div>
            </div>
          </Card>

          {/* API Management */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Key className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">API Keys</h2>
                <p className="text-sm text-muted-foreground">Manage integration credentials</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">API Key</label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value="sk_test_4eC39HqLyjWDarjtT1zdp7dc"
                    readOnly
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-muted text-foreground"
                  />
                  <Button variant="outline">Copy</Button>
                  <Button variant="outline">Regenerate</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Profile */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">Profile</h2>
                <p className="text-sm text-muted-foreground">Account information</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  defaultValue="Ocean Research Team"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  defaultValue="team@seavision.io"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                />
              </div>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Save Changes
              </Button>
            </div>
          </Card>

          {/* System Info */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Info className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">System Information</h2>
                <p className="text-sm text-muted-foreground">Version and model details</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Application Version</p>
                <p className="font-semibold text-foreground">v2.4.1</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">AI Model Version</p>
                <p className="font-semibold text-foreground">PlasticNet-v3.2</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Last Updated</p>
                <p className="font-semibold text-foreground">Jan 15, 2024</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <p className="font-semibold text-secondary">Active</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
