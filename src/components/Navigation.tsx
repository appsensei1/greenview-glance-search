
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">GreenView</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-[#9b87f5] transition-colors">Home</Link>
            <Link to="/jobs" className="hover:text-[#9b87f5] transition-colors">Jobs</Link>
            <Link to="/candidates" className="hover:text-[#9b87f5] transition-colors">Candidates</Link>
            <Link to="/employers" className="hover:text-[#9b87f5] transition-colors">Employers</Link>
            <Link to="/services" className="hover:text-[#9b87f5] transition-colors">Services</Link>
            <Link to="/about" className="hover:text-[#9b87f5] transition-colors">About</Link>
            <Link to="/contact" className="hover:text-[#9b87f5] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
