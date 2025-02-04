import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Candidates = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#1A1F2C] text-white py-20 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Professional working"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            For Candidates
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Your next cleared opportunity awaits
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Security Clearance Levels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Confidential", "Secret", "Top Secret", "TS/SCI"].map((level, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5]" />
                  <span>{level}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Our streamlined process makes it easy to find your next role:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Submit your resume</li>
                <li>Initial screening call</li>
                <li>Clearance verification</li>
                <li>Client introduction</li>
                <li>Offer and placement</li>
              </ol>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            Browse Open Positions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Candidates;