import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Radio, Map, Trash2, FileText, History, ArrowRight, Globe, Zap, Shield } from "lucide-react";
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

  const capabilities = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Monitor ocean plastic across all major water bodies with satellite and drone integration",
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description: "Instant AI-powered detection with 96%+ accuracy using advanced computer vision",
    },
    {
      icon: Shield,
      title: "Actionable Insights",
      description: "Get detailed cleanup recommendations with cost estimations and resource planning",
    },
  ];

  const impactStats = [
    { value: "3.2M+", label: "Plastic Pieces Detected" },
    { value: "842 km²", label: "Ocean Areas Analyzed" },
    { value: "96.8%", label: "AI Detection Accuracy" },
    { value: "24/7", label: "Continuous Monitoring" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCgyMTAgMTAwJSA0MCUgLyAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">
          <div className="text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
              <span className="text-sm font-medium text-primary">AI-Powered Ocean Conservation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Detect Ocean Plastic
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Save Marine Life
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Advanced AI technology analyzes satellite and drone imagery to identify ocean plastic pollution, 
              generate heatmaps, and recommend efficient cleanup strategies
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                onClick={() => navigate("/detection")}
                className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg rounded-xl shadow-[var(--shadow-ocean)]"
              >
                Start Detection <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/heatmap")}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl"
              >
                Explore Heatmap
              </Button>
            </div>

            {/* Impact Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {impactStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                    <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose SeaVision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading technology for ocean plastic detection and cleanup planning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <Card
              key={capability.title}
              className="p-8 text-center hover:shadow-[var(--shadow-ocean)] transition-all duration-300 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                <capability.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{capability.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
            </Card>
          ))}
        </div>

        {/* Platform Features */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Complete Detection Platform
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Everything you need to monitor, analyze, and respond to ocean plastic pollution
          </p>
        </div>

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

        {/* Call to Action */}
        <div className="mt-24">
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
            <div className="p-12 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join the fight against ocean plastic pollution with cutting-edge AI technology
              </p>
              <Button
                onClick={() => navigate("/detection")}
                className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-10 py-6 text-lg rounded-xl shadow-[var(--shadow-ocean)]"
              >
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </Card>
        </div>
      </div>
    </div>
  );
}
