import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">
              Certify
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex md:items-center md:gap-6">
              <Link to="/" className="text-sm text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-sm text-gray-300 hover:text-white">
                About
              </Link>
              <a href="#features" className="text-sm text-gray-300 hover:text-white">
                Features
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-sm text-gray-300 hover:text-white"
              >
                Log in
              </Button>
              <Button
                className="rounded-full bg-white px-4 text-sm text-black hover:bg-gray-100"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;