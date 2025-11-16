import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Anchor, Cpu, Layers, Download, TrendingUp, Users, DollarSign } from "lucide-react";

export default function Cleanup() {
  const cleanupMethods = [
    {
      title: "Manual Boat Cleanup",
      icon: Ship,
      description: "Traditional vessel-based collection with trained crew",
      cost: "$45,000",
      manpower: "12-15 personnel",
      duration: "2-3 weeks",
      efficiency: 75,
      gradient: "from-primary to-primary/80",
    },
    {
      title: "Net Sweep Operation",
      icon: Anchor,
      description: "Large-scale trawling with specialized collection nets",
      cost: "$62,000",
      manpower: "8-10 personnel",
      duration: "1-2 weeks",
      efficiency: 85,
      gradient: "from-secondary to-secondary/80",
    },
    {
      title: "Autonomous Cleanup Drones",
      icon: Cpu,
      description: "AI-powered autonomous surface vehicles for plastic collection",
      cost: "$38,000",
      manpower: "3-4 supervisors",
      duration: "3-4 weeks",
      efficiency: 90,
      gradient: "from-accent to-accent/80",
    },
    {
      title: "Hybrid Method",
      icon: Layers,
      description: "Combination of manual operations and autonomous systems",
      cost: "$55,000",
      manpower: "6-8 personnel",
      duration: "2 weeks",
      efficiency: 95,
      gradient: "from-primary to-secondary",
    },
  ];

  const impactZones = [
    { zone: "Zone A - Caribbean", type: "Bottles & Bags", difficulty: "Medium", priority: "High" },
    { zone: "Zone B - Pacific", type: "Fishing Nets", difficulty: "High", priority: "Critical" },
    { zone: "Zone C - Mediterranean", type: "Microplastics", difficulty: "Low", priority: "Medium" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Cleanup Suggestions</h1>
          <p className="text-muted-foreground">AI-generated cleanup strategies and resource optimization</p>
        </div>

        {/* Overview Panel */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Impact Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-foreground">3.2M</p>
              <p className="text-sm text-muted-foreground">Pieces Detected</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-3">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-foreground">Bottles</p>
              <p className="text-sm text-muted-foreground">Dominant Type</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-foreground">842 km²</p>
              <p className="text-sm text-muted-foreground">Area Impacted</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-foreground">High</p>
              <p className="text-sm text-muted-foreground">Cleanup Priority</p>
            </div>
          </div>
        </Card>

        {/* Cleanup Methods */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recommended Action Plans</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cleanupMethods.map((method, index) => (
              <Card
                key={method.title}
                className="overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${method.gradient}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center shrink-0`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Est. Cost</p>
                      <p className="text-sm font-semibold text-foreground">{method.cost}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Manpower</p>
                      <p className="text-sm font-semibold text-foreground">{method.manpower}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Duration</p>
                      <p className="text-sm font-semibold text-foreground">{method.duration}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Efficiency</span>
                      <span className="text-xs font-semibold text-foreground">{method.efficiency}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${method.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${method.efficiency}%` }}
                      />
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Plan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Zones */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Priority Impact Zones</h2>
          <div className="space-y-4">
            {impactZones.map((zone) => (
              <div
                key={zone.zone}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{zone.zone}</h4>
                  <p className="text-sm text-muted-foreground">Dominant: {zone.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Difficulty</p>
                    <span className="text-sm font-semibold text-foreground">{zone.difficulty}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      zone.priority === "Critical"
                        ? "bg-destructive/20 text-destructive"
                        : zone.priority === "High"
                        ? "bg-accent/20 text-accent"
                        : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    {zone.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
