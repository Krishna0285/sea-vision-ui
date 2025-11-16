import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, Eye, RefreshCw, Calendar } from "lucide-react";
import { useState } from "react";

export default function History() {
  const [searchTerm, setSearchTerm] = useState("");

  const historyData = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
      region: "Pacific Northwest",
      date: "2024-01-15",
      plasticPercentage: 78,
      summary: "High concentration of bottles and bags detected",
      severity: "High",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400",
      region: "Caribbean Basin",
      date: "2024-01-14",
      plasticPercentage: 92,
      summary: "Critical levels of fishing nets and large debris",
      severity: "Critical",
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400",
      region: "Mediterranean Coast",
      date: "2024-01-13",
      plasticPercentage: 45,
      summary: "Moderate microplastic concentration",
      severity: "Medium",
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
      region: "Indian Ocean",
      date: "2024-01-12",
      plasticPercentage: 85,
      summary: "High density of plastic bottles and containers",
      severity: "High",
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400",
      region: "Atlantic Coast",
      date: "2024-01-11",
      plasticPercentage: 34,
      summary: "Low to moderate plastic detection",
      severity: "Low",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Detection History</h1>
          <p className="text-muted-foreground">Review past analyses and detection results</p>
        </div>

        {/* Filters & Search */}
        <Card className="p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by region or date..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground"
              />
            </div>

            {/* Region Filter */}
            <div>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground">
                <option>All Regions</option>
                <option>Pacific Ocean</option>
                <option>Atlantic Ocean</option>
                <option>Indian Ocean</option>
                <option>Mediterranean</option>
              </select>
            </div>

            {/* Severity Filter */}
            <div>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground">
                <option>All Severities</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </Card>

        {/* History Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Preview</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Region</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Plastic %</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Summary</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Severity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {historyData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-muted/30 transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <td className="px-6 py-4">
                      <img
                        src={item.thumbnail}
                        alt={item.region}
                        className="w-20 h-12 object-cover rounded-lg border border-border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-foreground">{item.region}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              item.plasticPercentage >= 75
                                ? "bg-destructive"
                                : item.plasticPercentage >= 50
                                ? "bg-accent"
                                : item.plasticPercentage >= 25
                                ? "bg-secondary"
                                : "bg-primary"
                            }`}
                            style={{ width: `${item.plasticPercentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {item.plasticPercentage}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-muted-foreground max-w-xs">{item.summary}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.severity === "Critical"
                            ? "bg-destructive/20 text-destructive"
                            : item.severity === "High"
                            ? "bg-accent/20 text-accent"
                            : item.severity === "Medium"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-primary/20 text-primary"
                        }`}
                      >
                        {item.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" title="View Details">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" title="Download">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" title="Re-run AI">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">1-5</span> of{" "}
              <span className="font-semibold text-foreground">247</span> results
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
