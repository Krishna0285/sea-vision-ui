import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon, Play, Pause, Zap, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Detection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
        toast({
          title: "Image uploaded",
          description: "Ready for AI analysis",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetection = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
      toast({
        title: "Detection complete",
        description: "AI analysis finished successfully",
      });
    }, 2000);
  };

  const plasticBreakdown = [
    { type: "Bottles", count: 234, color: "bg-primary", percentage: 35 },
    { type: "Bags", count: 189, color: "bg-secondary", percentage: 28 },
    { type: "Microplastics", count: 145, color: "bg-accent", percentage: 22 },
    { type: "Fishing Nets", count: 78, color: "bg-destructive", percentage: 12 },
    { type: "Large Debris", count: 23, color: "bg-muted", percentage: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">AI Detection System</h1>
          <p className="text-muted-foreground">Upload imagery for advanced plastic detection analysis</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Panel */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Upload Image
            </h2>
            
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer group">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <ImageIcon className="w-16 h-16 mx-auto text-muted-foreground group-hover:text-primary transition-colors mb-4" />
                <p className="text-foreground font-medium mb-2">
                  Drag & drop or click to upload
                </p>
                <p className="text-sm text-muted-foreground">
                  Supported: JPG, PNG, TIFF (Max 50MB)
                </p>
              </label>
            </div>

            {uploadedImage && (
              <div className="mt-6 space-y-4 animate-slide-up">
                <div className="aspect-video rounded-lg overflow-hidden border border-border">
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Image Metadata</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Resolution:</span>
                      <span className="ml-2 text-foreground">1920x1080</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Size:</span>
                      <span className="ml-2 text-foreground">2.4 MB</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Format:</span>
                      <span className="ml-2 text-foreground">JPEG</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Captured:</span>
                      <span className="ml-2 text-foreground">Today</span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleDetection}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Run AI Detection
                    </>
                  )}
                </Button>
              </div>
            )}
          </Card>

          {/* Results Panel */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-secondary" />
              Detection Results
            </h2>

            {showResults ? (
              <div className="space-y-6 animate-slide-up">
                {/* AI Processed Image */}
                <div className="aspect-video rounded-lg overflow-hidden border-2 border-secondary/50 relative">
                  {uploadedImage && (
                    <img
                      src={uploadedImage}
                      alt="Detected"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-secondary/10" />
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    96.8% Confidence
                  </div>
                </div>

                {/* Plastic Breakdown */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-4">Plastic Type Breakdown</h3>
                  <div className="space-y-3">
                    {plasticBreakdown.map((item) => (
                      <div key={item.type}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-foreground font-medium">{item.type}</span>
                          <span className="text-sm text-muted-foreground">{item.count} pieces ({item.percentage}%)</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    View Heatmap
                  </Button>
                  <Button className="flex-1 bg-accent text-white hover:bg-accent/90">
                    <Download className="w-4 h-4 mr-2" />
                    Export Results
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[500px] text-center">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                  <ImageIcon className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">
                  Upload an image and run detection to see results
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
