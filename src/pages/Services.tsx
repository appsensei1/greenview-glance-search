
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Network, Briefcase, Users, Building2, Handshake } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-10 w-10 mb-2 text-[#9b87f5]" />,
      title: "Technical Recruitment",
      description: "Specialized recruitment services for software developers, engineers, and IT professionals."
    },
    {
      icon: <Network className="h-10 w-10 mb-2 text-[#9b87f5]" />,
      title: "IT Staffing Solutions",
      description: "Comprehensive staffing solutions for temporary, contract-to-hire, and permanent positions."
    },
    {
      icon: <Briefcase className="h-10 w-10 mb-2 text-[#9b87f5]" />,
      title: "Executive Search",
      description: "Strategic placement of C-level and senior technical leadership positions."
    },
    {
      icon: <Users className="h-10 w-10 mb-2 text-[#9b87f5]" />,
      title: "Team Building",
      description: "Building cohesive technical teams that align with your organization's goals and culture."
    },
    {
      icon: <Building2 className="h-10 w-10 mb-2 text-[#9b87f5]" />,
      title: "Government Contracting",
      description: "Specialized recruitment for government contractors in healthcare and technology sectors."
    },
    {
      icon: <Handshake className="h-10 w-10 mb-2 text-[#9b87f5]" />,
      title: "Consultation Services",
      description: "Expert guidance on workforce planning, market analysis, and recruitment strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1A1F2C] text-white py-20 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Professional services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Comprehensive recruitment and staffing solutions tailored to your needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
