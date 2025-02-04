import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Shield, CheckCircle } from "lucide-react";

const Employers = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#1A1F2C] text-white py-20 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            For Employers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Access top cleared talent for your organization
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-[#9b87f5] mb-4" />
              <CardTitle>Clearance Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Specialized in placing candidates with active security clearances across all classification levels.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Building2 className="h-12 w-12 text-[#9b87f5] mb-4" />
              <CardTitle>Government Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Deep understanding of government contractor requirements and compliance needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-[#9b87f5] mb-4" />
              <CardTitle>Vast Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access to an extensive network of pre-screened, cleared professionals.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            Partner With Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Employers;