import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#1A1F2C] text-white py-20 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
            alt="Innovation concept"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            Leaders in Security Cleared Recruitment
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a mission to bridge the gap between cleared professionals and government contractors, we've built a reputation for excellence in security cleared recruitment.
            </p>
            <p className="text-gray-600">
              With over two decades of experience, we understand the unique challenges and requirements of staffing positions that require security clearances.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Company Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Integrity</h3>
                <p className="text-gray-600">Maintaining the highest standards of professional conduct</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Excellence</h3>
                <p className="text-gray-600">Delivering exceptional service to clients and candidates</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Security</h3>
                <p className="text-gray-600">Prioritizing information security in everything we do</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;