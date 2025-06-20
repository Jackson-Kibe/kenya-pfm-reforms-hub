
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  FileText, 
  ArrowRight, 
  Play,
  Target,
  CheckCircle,
  Award
} from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className="animate-counter-up">{count}{suffix}</span>;
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroStats = [
    { number: 8, suffix: '', label: 'Key Reform Areas' },
    { number: 60, suffix: '+', label: 'Published Reports' },
    { number: 10, suffix: '', label: 'Years of Progress' },
    { number: 47, suffix: '', label: 'Counties Supported' }
  ];

  const navigationCards = [
    {
      title: 'Explore the Strategy',
      description: 'Discover our comprehensive PFM Strategy 2023-2028 and Key Result Areas',
      icon: Target,
      path: '/strategy',
      color: 'bg-primary'
    },
    {
      title: 'Download Reports',
      description: 'Access our latest publications, evaluations, and research documents',
      icon: FileText,
      path: '/reports',
      color: 'bg-emerald-600'
    },
    {
      title: 'See Reforms in Action',
      description: 'Real stories of transformation and impact across Kenya',
      icon: TrendingUp,
      path: '/reforms',
      color: 'bg-purple-600'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team for partnerships and inquiries',
      icon: Users,
      path: '/contact',
      color: 'bg-orange-600'
    }
  ];

  const latestUpdates = [
    {
      title: 'Digital Transformation in County Governments',
      excerpt: 'New initiatives to modernize financial systems across 47 counties',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop'
    },
    {
      title: 'SAGE System Enhancement',
      excerpt: 'Latest improvements to the Salary and Payroll Management System',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop'
    },
    {
      title: 'Public Participation Framework',
      excerpt: 'Engaging citizens in budget processes for better accountability',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % latestUpdates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Reforming Public Finance for a
                  <span className="text-blue-200"> Better Kenya</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Strengthening financial management systems across government for improved transparency, accountability, and service delivery.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold">
                  <Link to="/strategy">
                    Explore Our Strategy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-semibold">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Overview
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Impact at a Glance</h3>
                <div className="grid grid-cols-2 gap-6">
                  {heroStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-blue-200">
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-blue-100 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
              Discover Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive approach to public financial management reform across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationCards.map((card, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {card.description}
                  </p>
                  <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark">
                    <Link to={card.path} className="inline-flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Summary */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-6">
                PFM Strategy 2023-2028
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive strategy focuses on eight key result areas to transform public financial management in Kenya, ensuring better service delivery and accountability.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Enhanced Budget Credibility and Transparency',
                  'Strengthened Revenue Administration',
                  'Improved Expenditure Management',
                  'Digital Financial Management Systems'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-secondary-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/strategy">
                  View Full Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Achievement Highlights</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-blue-100">Counties with improved PFM systems</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">KSh 2.1T</div>
                    <div className="text-blue-100">Better managed public resources</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">3M+</div>
                    <div className="text-blue-100">Citizens benefiting from reforms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Carousel */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay informed about our ongoing reforms and achievements
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              {latestUpdates.map((update, index) => (
                <div
                  key={index}
                  className={`${index === currentSlide ? 'block' : 'hidden'} animate-fade-in`}
                >
                  <Card className="border-0 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative">
                        <img
                          src={update.image}
                          alt={update.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <div className="text-sm text-primary font-semibold mb-2">
                          {new Date(update.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                          {update.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {update.excerpt}
                        </p>
                        <Button variant="outline" className="self-start">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {latestUpdates.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Us in Transforming Kenya's Public Finance
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Partner with us to strengthen public financial management systems and improve service delivery for all Kenyans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold">
                <Link to="/reports">
                  Download Resources
                  <BookOpen className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
