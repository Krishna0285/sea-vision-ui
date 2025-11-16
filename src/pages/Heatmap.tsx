import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Map, Layers, Calendar, Download, Filter } from "lucide-react";

export default function Heatmap() {
  const regions = [
    { name: "Pacific Northwest", severity: "High", detected: 12450 },
    { name: "Caribbean Basin", severity: "Critical", detected: 18230 },
    { name: "Mediterranean Coast", severity: "Medium", detected: 8920 },
    { name: "Indian Ocean", severity: "High", detected: 15680 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Plastic Density Heatmap</h1>
          <p className="text-muted-foreground">Interactive visualization of ocean plastic concentration</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Control Panel */}
          <Card className="p-6 lg:col-span-1">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              Map Controls
            </h2>

            <div className="space-y-4">
              {/* Region Selector */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Region
                </label>
                <select className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground">
                  <option>All Regions</option>
                  <option>Pacific Ocean</option>
                  <option>Atlantic Ocean</option>
                  <option>Indian Ocean</option>
                </select>
              </div>

              {/* Data Layers */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Data Layers
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Drone Data</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Satellite Data</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Historical Data</span>
                  </label>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Timeline
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">24h</Button>
                  <Button size="sm" className="text-xs bg-primary text-white">7 days</Button>
                  <Button variant="outline" size="sm" className="text-xs">30 days</Button>
                </div>
              </div>

              {/* Legend */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Density Legend
                </label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-500" />
                    <span className="text-xs text-muted-foreground">Low (0-25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-yellow-500" />
                    <span className="text-xs text-muted-foreground">Medium (26-50%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-orange-500" />
                    <span className="text-xs text-muted-foreground">High (51-75%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-500" />
                    <span className="text-xs text-muted-foreground">Critical (76-100%)</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                Generate Cleanup Plan
              </Button>
            </div>
          </Card>

          {/* Map Area */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="p-6 h-[600px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-20 h-20 text-primary mx-auto mb-4 animate-pulse-glow" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground max-w-md">
                    Heatmap visualization will be displayed here with real-time plastic density data
                  </p>
                  <div className="mt-6">
                    <Button variant="outline" className="border-primary text-primary">
                      Load Map View
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Region Stats */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Region Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {regions.map((region) => (
                  <div
                    key={region.name}
                    className="p-4 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{region.name}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          region.severity === "Critical"
                            ? "bg-destructive/20 text-destructive"
                            : region.severity === "High"
                            ? "bg-accent/20 text-accent"
                            : "bg-secondary/20 text-secondary"
                        }`}
                      >
                        {region.severity}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{region.detected.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">plastic pieces detected</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
