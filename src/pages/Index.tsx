import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Building2, Users, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1A1F2C] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Security Cleared Talent Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Specialized recruitment for government and contractor positions requiring security clearances
          </p>
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            Find Top Talent
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
          Our Specialized Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2">
            <CardHeader>
              <Shield className="h-10 w-10 mb-2 text-[#9b87f5]" />
              <CardTitle>Security Clearance Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Specialized in placing candidates with active security clearances across various classification levels.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Building2 className="h-10 w-10 mb-2 text-[#9b87f5]" />
              <CardTitle>Government Contractors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Deep relationships with leading government contractors and agencies nationwide.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Users className="h-10 w-10 mb-2 text-[#9b87f5]" />
              <CardTitle>Talent Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access to a vast network of pre-screened, cleared professionals ready for deployment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
            Why Choose Greenview Search
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Specialized in security clearance positions",
              "20+ years of government sector experience",
              "Extensive contractor network",
              "Rapid placement capabilities",
              "Compliance expertise",
              "Dedicated account management"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-[#9b87f5] flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
          Ready to Find Your Next Security Cleared Professional?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us help you navigate the complex world of cleared recruitment
        </p>
        <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
          Contact Us Today
        </Button>
      </div>
    </div>
  );
};

export default Index;