
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Users, 
  Cog, 
  Eye, 
  Heart, 
  Award,
  Building,
  Shield,
  MapPin,
  Calendar
} from 'lucide-react';

const About = () => {
  const mandateItems = [
    {
      icon: Target,
      title: 'Strategic Coordination',
      description: 'Coordinate implementation of PFM reforms across all government levels',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop'
    },
    {
      icon: Users,
      title: 'Stakeholder Engagement',
      description: 'Facilitate collaboration between government, development partners, and citizens',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop'
    },
    {
      icon: Cog,
      title: 'System Strengthening',
      description: 'Enhance financial management systems and processes for better efficiency',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop'
    },
    {
      icon: Shield,
      title: 'Accountability',
      description: 'Promote transparency and accountability in public resource management',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop'
    }
  ];

  const teamStructure = [
    {
      title: 'Secretariat Head',
      description: 'Overall leadership and strategic direction',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop'
    },
    {
      title: 'M&E Unit',
      description: 'Monitoring, evaluation, and performance tracking',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop'
    },
    {
      title: 'Communications',
      description: 'Stakeholder engagement and public communications',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=200&fit=crop'
    },
    {
      title: 'Technical Teams',
      description: 'Specialized expertise in various PFM areas',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=200&fit=crop'
    }
  ];

  const journeyMilestones = [
    {
      year: '2013',
      title: 'PFMRS Establishment',
      description: 'Secretariat established to coordinate PFM reforms under the National Treasury',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop'
    },
    {
      year: '2018',
      title: 'First Strategy Implementation',
      description: 'Successful completion of PFM Strategy 2013-2018 with significant achievements',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      year: '2023',
      title: 'New Strategy Launch',
      description: 'Launch of PFM Strategy 2023-2028 with enhanced focus on digital transformation',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop'
    },
    {
      year: '2024',
      title: 'Digital Milestone',
      description: 'Major progress in digitizing government financial systems across all counties',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1920&h=1080&fit=crop')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        </div>

        {/* Kenya Flag Overlay */}
        <div className="absolute bottom-8 right-8 opacity-10">
          <div className="w-20 h-12 bg-gradient-to-r from-black via-red-600 to-green-600 rounded shadow-lg"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 mr-3 text-blue-200" />
              <span className="text-blue-200 font-medium">National Treasury of Kenya</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About PFMRS
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              The Public Financial Management Reforms Secretariat is the coordinating body for all PFM reforms in Kenya, established under the National Treasury to drive transformation in public finance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values with Enhanced Visuals */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center animate-slide-up hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="relative h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Kenya with efficient, transparent, and accountable public financial management systems that deliver quality services to all citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-slide-up hover:scale-105 transition-transform duration-300 overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <div className="relative h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To coordinate and facilitate the implementation of public financial management reforms for improved governance and service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-slide-up hover:scale-105 transition-transform duration-300 overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, transparency, accountability, innovation, and excellence in all our reform initiatives and stakeholder engagements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mandate and Functions with Visual Enhancement */}
      <section className="py-16 lg:py-20 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')`
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-6">
                Our Mandate & Functions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                PFMRS was established to provide strategic leadership and coordination for public financial management reforms across Kenya, ensuring systematic and coherent implementation of improvements.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 mb-8 border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-secondary-foreground mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-primary" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Develop and implement PFM reform strategies</li>
                  <li>• Coordinate with ministries, departments, and agencies</li>
                  <li>• Monitor and evaluate reform progress</li>
                  <li>• Facilitate stakeholder engagement and capacity building</li>
                  <li>• Manage relationships with development partners</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
              {mandateItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <div className="relative h-32">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-2 left-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold text-secondary-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Organizational Structure */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-6">
              Organizational Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our lean and efficient structure enables effective coordination and implementation of PFM reforms across all levels of government.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamStructure.map((unit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up group overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-40">
                    <img 
                      src={unit.image} 
                      alt={unit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-secondary-foreground mb-3">
                      {unit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {unit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop')`
                    }}
                  />
                </div>
                <CardContent className="p-8 relative z-10">
                  <Award className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Leadership Excellence</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Our team combines deep expertise in public financial management with proven leadership in driving systemic reforms across government institutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Timeline */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A decade of systematic reforms transforming Kenya's public financial management landscape.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full hidden lg:block"></div>
              
              <div className="space-y-12">
                {journeyMilestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-full lg:w-1/2 px-6">
                      <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden group">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="relative h-48 md:h-auto">
                            <img 
                              src={milestone.image} 
                              alt={milestone.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                              {milestone.year}
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center mb-3">
                              <Calendar className="w-5 h-5 text-primary mr-2" />
                              <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
                              {milestone.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </div>
                      </Card>
                    </div>
                    
                    <div className="relative z-10 hidden lg:block">
                      <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-full lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
