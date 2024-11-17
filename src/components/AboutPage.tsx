import { Github, Linkedin, Mail } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Team Overview */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Meet the Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The innovative minds behind Certify, working to revolutionize certificate verification through blockchain technology.
          </p>
        </section>

        {/* Team Members */}
        <section className="grid md:grid-cols-2 gap-12">
          {/* Ethan */}
          <Card className="p-8 bg-gradient-to-br from-purple-900/50 to-black border-purple-500/20">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Ethan Kiran Dsouza</h2>
                <p className="text-purple-400">UI/UX Designer & User Experience Strategist</p>
              </div>
              <p className="text-gray-300">
                Computer Science and Engineering student at St. Joseph Engineering College with a CGPA of 7.96/10. 
                Leading UI/UX design and user experience strategy for Certify.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-white">Experience</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Co-founder at Fade - Led marketing strategies</li>
                  <li>Automation specialist at Paul Street</li>
                  <li>Marketing lead at Quantamise Code</li>
                  <li>Campaign manager at Pawzz Foundation</li>
                </ul>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-purple-400">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-purple-400">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-purple-400">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Darren */}
          <Card className="p-8 bg-gradient-to-br from-purple-900/50 to-black border-purple-500/20">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Darren Pereira</h2>
                <p className="text-purple-400">Lead Developer & Blockchain Expert</p>
              </div>
              <p className="text-gray-300">
                Computer Science and Engineering student specializing in blockchain development. 
                Leading the technical development of Certify's secure verification system.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-white">Expertise</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Smart Contract Development</li>
                  <li>Blockchain Architecture</li>
                  <li>Full-stack Development</li>
                  <li>System Security</li>
                </ul>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-purple-400">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-purple-400">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-purple-400">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Journey Section */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <Card className="p-8 bg-gradient-to-br from-purple-900/50 to-black border-purple-500/20">
            <p className="text-gray-300 leading-relaxed">
              Ethan and Darren met at St. Joseph Engineering College, bonding over their shared vision of using technology 
              to solve real-world challenges. Their complementary skills in design and development led to the creation of 
              Certify, a revolutionary platform that makes certificate verification secure, efficient, and cost-effective.
              Through countless hours of research, development, and user testing, they've built a solution that addresses 
              the growing need for reliable digital verification in education and beyond.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;