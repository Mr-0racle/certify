import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import WorkingSection from './WorkingSection';
import ReviewSection from './ReviewSection';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

const LandingPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };

  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <WorkingSection />
      <ReviewSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <Card className="p-6 bg-gradient-to-br from-purple-900/50 to-black border-purple-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Name</label>
                <Input className="bg-black/50 border-purple-500/20 focus:border-purple-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Email</label>
                <Input type="email" className="bg-black/50 border-purple-500/20 focus:border-purple-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Message</label>
                <Textarea className="bg-black/50 border-purple-500/20 focus:border-purple-500" />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;