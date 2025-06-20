import React, { useState, useEffect, useRef } from 'react';
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
  Award,
  X,
  Share2,
  ExternalLink
} from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', isVisible }: { 
  end: number; 
  duration?: number; 
  suffix?: string;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
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
  }, [end, duration, isVisible]);

  return <span className="animate-counter-up">{count}{suffix}</span>;
};

const DynamicTypewriter = () => {
  const phrases = ['transparency', 'accountability', 'efficiency', 'service delivery', 'digital finance'];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = phrases[currentPhrase];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhrase, typingSpeed, phrases]);

  return (
    <span className="text-blue-200 border-r-2 border-blue-200 pr-1 animate-pulse">
      {currentText}
    </span>
  );
};

const VideoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden animate-scale-in">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold">Kenya's Public Finance Reform Journey</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Kenya PFM Reform Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);
  const countersRef = useRef<HTMLDivElement>(null);
  
  const heroStats = [
    { number: 60, suffix: '+', label: 'Reports Published' },
    { number: 8, suffix: '', label: 'Key Result Areas' },
    { number: 10, suffix: '+', label: 'Years of Reform' },
    { number: 25, suffix: '+', label: 'Development Partners' }
  ];

  const navigationCards = [
    {
      title: 'Explore the Strategy',
      description: 'Discover our comprehensive PFM Strategy 2023-2028 and Key Result Areas',
      icon: Target,
      path: '/strategy',
      color: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=250&fit=crop'
    },
    {
      title: 'Download Reports',
      description: 'Access our latest publications, evaluations, and research documents',
      icon: FileText,
      path: '/reports',
      color: 'bg-emerald-600',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    },
    {
      title: 'See Reforms in Action',
      description: 'Real stories of transformation and impact across Kenya',
      icon: TrendingUp,
      path: '/reforms',
      color: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team for partnerships and inquiries',
      icon: Users,
      path: '/contact',
      color: 'bg-orange-600',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop'
    }
  ];

  const latestUpdates = [
    {
      title: 'Digital Transformation in County Governments',
      excerpt: 'New initiatives to modernize financial systems across 47 counties',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop'
    },
    {
      title: 'SAGE System Enhancement',
      excerpt: 'Latest improvements to the Salary and Payroll Management System',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop'
    },
    {
      title: 'Public Participation Framework',
      excerpt: 'Engaging citizens in budget processes for better accountability',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop'
    }
  ];

  const reformStories = [
    {
      title: 'Digital Pension Disbursement',
      excerpt: 'Streamlining pension payments through digital platforms, reaching over 200,000 retirees nationwide.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop',
      impact: '200,000+ beneficiaries'
    },
    {
      title: 'County Audit Digitization',
      excerpt: 'Transforming audit processes in all 47 counties with real-time monitoring and transparent reporting.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      impact: '47 counties transformed'
    },
    {
      title: 'Youth Employment Initiative',
      excerpt: 'Creating opportunities through reformed public financial management in youth-focused programs.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=300&fit=crop',
      impact: '50,000+ jobs created'
    }
  ];

  const reformPartners = [
    {
      name: 'World Bank',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop',
      url: 'https://www.worldbank.org/en/country/kenya',
      description: 'Supporting public financial management reforms'
    },
    {
      name: 'European Union',
      logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200&h=100&fit=crop',
      url: 'https://ec.europa.eu/international-partnerships/where-we-work/kenya_en',
      description: 'Promoting governance and accountability'
    },
    {
      name: 'GESDeK',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop',
      url: 'https://www.kfw.de/About-KfW/KfW-office-worldwide/Sub-Sahara-Africa/Kenya/',
      description: 'Government Economic Strategy for Devolution in Kenya'
    },
    {
      name: 'PASEDE',
      logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=100&fit=crop',
      url: 'https://www.devolution.go.ke/',
      description: 'Public Administration and Service Efficiency for Devolution Enhancement'
    },
    {
      name: 'UNICEF',
      logo: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=100&fit=crop',
      url: 'https://www.unicef.org/kenya/',
      description: 'Supporting child-focused public financial management'
    },
    {
      name: 'KfW',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop',
      url: 'https://www.kfw.de/About-KfW/KfW-office-worldwide/Sub-Sahara-Africa/Kenya/',
      description: 'German Development Bank'
    },
    {
      name: 'International Monetary Fund',
      logo: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=200&h=100&fit=crop',
      url: 'https://www.imf.org/en/Countries/KEN',
      description: 'Supporting fiscal policy and economic reforms'
    },
    {
      name: 'African Development Bank',
      logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=100&fit=crop',
      url: 'https://www.afdb.org/en/countries/east-africa/kenya',
      description: 'Financing infrastructure and governance projects'
    },
    {
      name: 'Swedish International Development',
      logo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=100&fit=crop',
      url: 'https://www.sida.se/en/sidas-international-work/africa/kenya',
      description: 'Supporting democratic governance and human rights'
    },
    {
      name: 'PFM Academy',
      logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop',
      url: 'https://pfm.go.ke/',
      description: 'Building capacity in public financial management'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % latestUpdates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Background Imagery */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/90 to-primary-light/80"></div>
        </div>

        {/* Floating Reform Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-20 h-20 bg-white/5 rounded-full animate-pulse flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white/60" />
          </div>
          <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '1s' }}>
            <FileText className="w-12 h-12 text-white/60" />
          </div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/10 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '2s' }}>
            <Target className="w-6 h-6 text-white/60" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '3s' }}>
            <Award className="w-8 h-8 text-white/60" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Animated Headlines */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="block animate-slide-up" style={{ animationDelay: '0ms' }}>
                    Reforming Public Finance
                  </span>
                  <span className="block animate-slide-up" style={{ animationDelay: '80ms' }}>
                    for a
                  </span>
                  <span className="block text-blue-200 animate-slide-up" style={{ animationDelay: '160ms' }}>
                    Better Kenya
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
                  Strengthening financial management systems across government for improved{' '}
                  <DynamicTypewriter />
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-blue-50 font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Link to="/strategy">
                    Explore Our Strategy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Reform Video
                </Button>
              </div>
            </div>

            {/* Enhanced KPI Section with Visual Background */}
            <div className="relative">
              <div 
                ref={countersRef}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop')`
                    }}
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-center animate-fade-in relative z-10">Our Impact at a Glance</h3>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {heroStats.map((stat, index) => (
                    <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="text-3xl lg:text-4xl font-bold text-blue-200">
                        <AnimatedCounter 
                          end={stat.number} 
                          suffix={stat.suffix} 
                          isVisible={countersVisible}
                        />
                      </div>
                      <div className="text-sm text-blue-100 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards with Enhanced Imagery */}
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
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 animate-slide-up hover:scale-105 hover:-translate-y-1 overflow-hidden" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
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

      {/* Our Reform Partners Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=1080&fit=crop')`
            }}
          />
        </div>

        {/* Floating Reform Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-16 h-16 bg-primary/5 rounded-full animate-pulse flex items-center justify-center">
            <Target className="w-6 h-6 text-primary/30" />
          </div>
          <div className="absolute bottom-32 left-16 w-20 h-20 bg-primary/5 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '2s' }}>
            <TrendingUp className="w-8 h-8 text-primary/30" />
          </div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary/5 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '4s' }}>
            <FileText className="w-5 h-5 text-primary/30" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
              Our Reform Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              PFMR works in collaboration with key development partners to advance public financial management reforms in Kenya, 
              fostering transparency, accountability, and improved service delivery across all government levels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {reformPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full bg-white hover:bg-gray-50 border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative w-full h-20 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden group-hover:bg-gray-200 transition-colors duration-300">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-secondary-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {partner.description}
                      </p>
                    </div>

                    <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs font-medium mr-1">Visit Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Partnership Impact Stats */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Development Partners</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-primary mb-2">$2.5B+</div>
                <div className="text-sm text-muted-foreground">Reform Investment</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-primary mb-2">47</div>
                <div className="text-sm text-muted-foreground">Counties Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Summary with Visual Enhancement */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop')`
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              {/* ... keep existing code (strategy content) */}
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                {/* Background Image for Achievement Card */}
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop')`
                    }}
                  />
                </div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <Award className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Achievement Highlights</h3>
                </div>
                <div className="space-y-4 relative z-10">
                  {/* ... keep existing code (achievement highlights) */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reforms in Action Stories */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
              Reforms in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories of transformation and impact across Kenya's public financial management
            </p>
          </div>

          <div className="space-y-12">
            {reformStories.map((story, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {story.impact}
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {story.excerpt}
                    </p>
                    <div className="flex space-x-4">
                      <Button variant="outline" className="flex-1">
                        Read Full Story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Latest Updates Carousel */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay informed about our ongoing reforms and achievements
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              {latestUpdates.map((update, index) => (
                <div
                  key={index}
                  className={`${index === currentSlide ? 'block' : 'hidden'} animate-fade-in`}
                >
                  <Card className="border-0 shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-64 md:h-full">
                        <img
                          src={update.image}
                          alt={update.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                        <div className="text-sm text-primary font-semibold mb-2 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
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
                        <Button variant="outline" className="self-start hover:scale-105 transition-transform duration-200">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Enhanced Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {latestUpdates.map((_, index) => (
                <button
                  key={index}
                  className={`w-12 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action with Background */}
      <section className="py-16 lg:py-20 bg-primary text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=1080&fit=crop')`
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Us in Transforming Kenya's Public Finance
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Partner with us to strengthen public financial management systems and improve service delivery for all Kenyans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-semibold hover:scale-105 transition-transform duration-200">
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold hover:scale-105 transition-all duration-200">
                <Link to="/reports">
                  Download Resources
                  <BookOpen className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
};

export default Home;
