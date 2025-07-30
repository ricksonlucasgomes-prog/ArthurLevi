import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, TrendingUp, Users, Award, Target, Heart } from 'lucide-react';
const SponsorshipSection = () => {
  const sponsorshipBenefits = [{
    icon: Star,
    title: "Brand Association",
    description: "Associate your brand with excellence and rising talent in youth soccer"
  }, {
    icon: TrendingUp,
    title: "Growing Audience",
    description: "Reach an engaged audience of soccer fans, families, and youth sports enthusiasts"
  }, {
    icon: Users,
    title: "Community Impact",
    description: "Support youth development and inspire the next generation of athletes"
  }, {
    icon: Award,
    title: "Recognition",
    description: "Receive recognition across all Arthur's matches, media, and digital platforms"
  }];
  const sponsorshipTiers = [{
    name: "Supporter",
    price: "$500",
    period: "/month",
    features: ["Logo on training gear", "Social media mentions", "Monthly updates", "Community recognition"],
    color: "border-gray-200 bg-white"
  }, {
    name: "Partner",
    price: "$1,500",
    period: "/month",
    features: ["Logo on match jersey", "Website placement", "Match day recognition", "Exclusive content access", "Meet & greet opportunities"],
    color: "border-primary bg-primary/5",
    featured: true
  }, {
    name: "Champion",
    price: "$3,000",
    period: "/month",
    features: ["Primary jersey sponsorship", "Brand partnership content", "VIP match experiences", "Co-marketing opportunities", "Direct brand integration", "Priority access to events"],
    color: "border-yellow-400 bg-yellow-50"
  }];
  return <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Join the Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with Arthur Levi and be part of an inspiring story of dedication, 
            talent, and the pursuit of soccer excellence.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sponsorshipBenefits.map((benefit, index) => <div key={index} className="text-center p-6 rounded-xl hover:shadow-card transition-smooth hover-scale fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto rounded-full primary-gradient flex items-center justify-center shadow-elegant">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>)}
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {sponsorshipTiers.map((tier, index) => {})}
        </div>

        {/* Custom Sponsorship */}
        <div className="bg-muted rounded-2xl p-8 text-center fade-in-up">
          <div className="max-w-3xl mx-auto">
            <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Custom Partnership Opportunities
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every brand is unique, and so is every partnership. Let's work together to create 
              a custom sponsorship package that aligns with your brand values and marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <Heart className="w-5 h-5 mr-2" />
                Become a Sponsor
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Download Media Kit
              </Button>
            </div>
          </div>
        </div>

        {/* Why Sponsor Arthur */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Why Sponsor Arthur Levi?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Proven Track Record</h4>
                  <p className="text-muted-foreground">Multiple championships and individual awards demonstrate consistent excellence.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Rising Star Potential</h4>
                  <p className="text-muted-foreground">Early investment in talent that's destined for professional soccer.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Authentic Values</h4>
                  <p className="text-muted-foreground">A young athlete who embodies dedication, teamwork, and sportsmanship.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-up">
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-6 text-foreground">
                Ready to Get Started?
              </h4>
              <p className="text-muted-foreground mb-6">
                Join the growing list of brands and organizations supporting Arthur's journey 
                to professional soccer.
              </p>
              <Button className="btn-hero text-lg px-8 py-4">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SponsorshipSection;