import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, TrendingUp, PieChart, BarChart3, MapPin } from "lucide-react";

export default function Reports() {
  const reportTypes = [
    {
      title: "Detection Summary",
      description: "Comprehensive overview of all plastic detection activities",
      icon: FileText,
      color: "text-primary",
    },
    {
      title: "Concentration Timeline",
      description: "Historical trends of plastic concentration over time",
      icon: TrendingUp,
      color: "text-secondary",
    },
    {
      title: "Heatmap Trends",
      description: "Geographic distribution and density patterns",
      icon: MapPin,
      color: "text-accent",
    },
    {
      title: "Type Breakdown",
      description: "Analysis by plastic type and composition",
      icon: PieChart,
      color: "text-primary",
    },
    {
      title: "Region Comparison",
      description: "Comparative analysis across different ocean regions",
      icon: BarChart3,
      color: "text-secondary",
    },
    {
      title: "Resource Estimation",
      description: "Cleanup resource requirements and cost projections",
      icon: Download,
      color: "text-accent",
    },
  ];

  const insights = [
    { label: "Total Scans", value: "1,247", change: "+12.3%", positive: true },
    { label: "Pieces Detected", value: "3.2M", change: "+8.7%", positive: false },
    { label: "Areas Analyzed", value: "842 km²", change: "+15.4%", positive: true },
    { label: "Avg Confidence", value: "94.2%", change: "+2.1%", positive: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate comprehensive reports and export insights</p>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {insights.map((insight) => (
            <Card key={insight.label} className="p-6">
              <p className="text-sm text-muted-foreground mb-1">{insight.label}</p>
              <p className="text-3xl font-bold text-foreground mb-2">{insight.value}</p>
              <p
                className={`text-sm font-semibold ${
                  insight.positive ? "text-secondary" : "text-accent"
                }`}
              >
                {insight.change} from last period
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Report Configuration */}
          <Card className="p-6 lg:col-span-1">
            <h2 className="text-lg font-bold text-foreground mb-6">Report Configuration</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Report Type
                </label>
                <select className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground">
                  <option>Detection Summary</option>
                  <option>Concentration Timeline</option>
                  <option>Heatmap Trends</option>
                  <option>Type Breakdown</option>
                  <option>Region Comparison</option>
                  <option>Resource Estimation</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                  />
                  <input
                    type="date"
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Region Filter
                </label>
                <select className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground">
                  <option>All Regions</option>
                  <option>Pacific Ocean</option>
                  <option>Atlantic Ocean</option>
                  <option>Indian Ocean</option>
                  <option>Mediterranean</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Export Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    PDF
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    CSV
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                <Download className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </Card>

          {/* Available Reports */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-bold text-foreground mb-6">Available Reports</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reportTypes.map((report) => (
                  <div
                    key={report.title}
                    className="p-4 rounded-lg border border-border hover:border-primary hover:shadow-[var(--shadow-card)] transition-all cursor-pointer group"
                  >
                    <report.icon className={`w-8 h-8 ${report.color} mb-3 group-hover:scale-110 transition-transform`} />
                    <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
                    <p className="text-xs text-muted-foreground">{report.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Report Preview */}
            <Card className="p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Report Preview</h2>
              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Configure report settings and click generate to preview
                </p>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" size="sm">
                    View Sample
                  </Button>
                  <Button size="sm" className="bg-primary text-white">
                    Generate Preview
                  </Button>
                </div>
              </div>
            </Card>

            {/* Recent Reports */}
            <Card className="p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Recent Reports</h2>
              <div className="space-y-3">
                {[
                  { name: "Detection Summary - Q4 2024", date: "2 days ago", size: "2.4 MB" },
                  { name: "Pacific Region Analysis", date: "1 week ago", size: "1.8 MB" },
                  { name: "Cleanup Resource Report", date: "2 weeks ago", size: "3.1 MB" },
                ].map((report) => (
                  <div
                    key={report.name}
                    className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{report.name}</p>
                        <p className="text-xs text-muted-foreground">{report.date} · {report.size}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                    </Button>
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
