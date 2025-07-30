import React from 'react';
import { ExternalLink, Download, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PressSection = () => {
  const pressFeatures = [
    {
      outlet: "Soccer Weekly Magazine",
      title: "Rising Star: Arthur Levi's Journey to Excellence",
      date: "March 10, 2024",
      type: "Feature Article",
      excerpt: "An in-depth look at the 16-year-old sensation who's capturing the attention of scouts nationwide.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=50&fit=crop",
      link: "#"
    },
    {
      outlet: "Local Sports Network",
      title: "Young Talent Leads Team to Regional Championship",
      date: "February 28, 2024",
      type: "Video Interview",
      excerpt: "Arthur discusses his winning mentality and future aspirations in professional soccer.",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=50&fit=crop",
      link: "#"
    },
    {
      outlet: "Youth Soccer Today",
      title: "Top 10 Players to Watch in 2024",
      date: "January 15, 2024",
      type: "Rankings",
      excerpt: "Arthur Levi ranks #3 in the annual list of most promising youth soccer players.",
      logo: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=100&h=50&fit=crop",
      link: "#"
    }
  ];

  const mediaStats = [
    { label: "Media Mentions", value: "47", period: "This Year" },
    { label: "Video Views", value: "125K", period: "Total" },
    { label: "Press Features", value: "12", period: "Major Outlets" },
    { label: "Social Reach", value: "85K", period: "Combined" }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            In the Spotlight
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Arthur's journey has captured the attention of sports media, journalists, 
            and soccer enthusiasts across the region.
          </p>
        </div>

        {/* Media Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {mediaStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 text-center shadow-card hover-glow transition-smooth hover-scale fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.period}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Press */}
        <div className="space-y-8 mb-16">
          {pressFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-8 shadow-card hover-glow transition-smooth hover-scale fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={feature.logo} 
                      alt={feature.outlet}
                      className="h-8 w-16 object-cover rounded"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{feature.outlet}</div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {feature.date}
                        </span>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {feature.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.excerpt}
                  </p>
                </div>
                
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Kit & Resources */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Press Kit Download */}
          <div className="bg-background rounded-2xl p-8 shadow-card fade-in-up">
            <div className="text-center">
              <Download className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Download Press Kit
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Complete media package including high-resolution photos, 
                biography, statistics, and recent achievements.
              </p>
              
              <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>High-res photos</span>
                  <span>25 images</span>
                </div>
                <div className="flex justify-between">
                  <span>Player biography</span>
                  <span>PDF format</span>
                </div>
                <div className="flex justify-between">
                  <span>Statistics sheet</span>
                  <span>Current season</span>
                </div>
                <div className="flex justify-between">
                  <span>Logo & branding</span>
                  <span>Vector files</span>
                </div>
              </div>
              
              <Button className="btn-hero w-full">
                <Download className="w-5 h-5 mr-2" />
                Download Press Kit
              </Button>
            </div>
          </div>

          {/* Media Contact */}
          <div className="bg-background rounded-2xl p-8 shadow-card fade-in-up">
            <div className="text-center">
              <Eye className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Media Inquiries
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For interviews, photo requests, or additional information, 
                please contact our media relations team.
              </p>
              
              <div className="space-y-4 mb-6 text-left">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-medium text-foreground">Media Contact</div>
                  <div className="text-sm text-muted-foreground">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">media@arthurlevi.com</div>
                  <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-medium text-foreground">Response Time</div>
                  <div className="text-sm text-muted-foreground">Same day for urgent requests</div>
                  <div className="text-sm text-muted-foreground">24-48 hours for standard inquiries</div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                Contact Media Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;