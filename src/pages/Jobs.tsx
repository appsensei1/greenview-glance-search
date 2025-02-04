import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Shield } from "lucide-react";

const Jobs = () => {
  const jobs = [
    {
      title: "Senior Cybersecurity Analyst",
      clearance: "TS/SCI",
      location: "Washington, DC",
      type: "Full-time",
    },
    {
      title: "Defense Program Manager",
      clearance: "Secret",
      location: "Arlington, VA",
      type: "Full-time",
    },
    {
      title: "Systems Engineer",
      clearance: "Top Secret",
      location: "Fort Meade, MD",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#1A1F2C] text-white py-20 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Security Cleared Positions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Browse our current openings for cleared professionals
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{job.title}</span>
                  <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                    Apply Now
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <span>{job.clearance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;