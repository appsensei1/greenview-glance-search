
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Building2, Users, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1A1F2C] text-white py-20 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Professional background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Christian Chiacchio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Technical Recruitment Professional specializing in Software Development and IT
          </p>
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            View My Experience
          </Button>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
          Areas of Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2">
            <CardHeader>
              <Shield className="h-10 w-10 mb-2 text-[#9b87f5]" />
              <CardTitle>Technical Recruitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Specialized in recruiting software developers, data analysts, and IT professionals across multiple technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Building2 className="h-10 w-10 mb-2 text-[#9b87f5]" />
              <CardTitle>Government Contracting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Experience with government contractors and managing client relationships in healthcare and technology sectors.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Users className="h-10 w-10 mb-2 text-[#9b87f5]" />
              <CardTitle>Healthcare Recruitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Expertise in placing medical directors, nursing practitioners, and healthcare professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-12 text-[#1A1F2C]">
                Technical Expertise
              </h2>
              <div className="grid gap-6">
                {[
                  "Java, C, C++, Ruby, Python Development",
                  "SAP ABAP and Technical Recruitment",
                  "UI/UX Designers and Frontend Development",
                  "Healthcare Technology Solutions",
                  "Project Management",
                  "Business Development"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-[#9b87f5] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Looking for expert recruitment services in technology and healthcare? Let's discuss how I can help you find the perfect talent for your organization.
          </p>
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
