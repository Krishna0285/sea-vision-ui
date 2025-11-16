import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Upload, Radio, Map, Trash2, FileText, History, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Upload Image",
      description: "Upload drone or satellite imagery for AI-powered plastic detection",
      icon: Upload,
      gradient: "from-primary to-primary/80",
      path: "/detection",
    },
    {
      title: "Live Detection",
      description: "Real-time plastic detection from video feeds and streaming sources",
      icon: Radio,
      gradient: "from-secondary to-secondary/80",
      path: "/detection",
    },
    {
      title: "Plastic Heatmap",
      description: "Interactive density maps showing concentration across regions",
      icon: Map,
      gradient: "from-accent to-accent/80",
      path: "/heatmap",
    },
    {
      title: "Cleanup Suggestions",
      description: "AI-generated cleanup strategies and resource optimization plans",
      icon: Trash2,
      gradient: "from-primary to-secondary",
      path: "/cleanup",
    },
    {
      title: "Export Reports",
      description: "Generate comprehensive reports and analytics on plastic detection",
      icon: FileText,
      gradient: "from-secondary to-accent",
      path: "/reports",
    },
    {
      title: "History",
      description: "Review past detections, analyses, and generated insights",
      icon: History,
      gradient: "from-accent to-primary",
      path: "/history",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCgyMTAgMTAwJSA0MCUgLyAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              SeaVision Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Real-time ocean plastic insights powered by AI analysis
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => navigate("/detection")}
                className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg rounded-xl"
              >
                Start Detection <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/heatmap")}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl"
              >
                View Heatmap
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse-glow" />
                <p className="text-sm text-muted-foreground font-medium">Active Scans</p>
              </div>
              <p className="text-4xl font-bold text-foreground">1,247</p>
              <p className="text-sm text-secondary mt-1">+12% from last week</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
                <p className="text-sm text-muted-foreground font-medium">Plastic Detected</p>
              </div>
              <p className="text-4xl font-bold text-foreground">3.2M</p>
              <p className="text-sm text-accent mt-1">pieces identified</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                <p className="text-sm text-muted-foreground font-medium">Areas Covered</p>
              </div>
              <p className="text-4xl font-bold text-foreground">842</p>
              <p className="text-sm text-primary mt-1">km² analyzed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
                onClick={() => navigate(feature.path)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
