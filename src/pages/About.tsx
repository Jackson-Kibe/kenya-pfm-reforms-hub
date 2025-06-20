
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
  Shield
} from 'lucide-react';

const About = () => {
  const mandateItems = [
    {
      icon: Target,
      title: 'Strategic Coordination',
      description: 'Coordinate implementation of PFM reforms across all government levels'
    },
    {
      icon: Users,
      title: 'Stakeholder Engagement',
      description: 'Facilitate collaboration between government, development partners, and citizens'
    },
    {
      icon: Cog,
      title: 'System Strengthening',
      description: 'Enhance financial management systems and processes for better efficiency'
    },
    {
      icon: Shield,
      title: 'Accountability',
      description: 'Promote transparency and accountability in public resource management'
    }
  ];

  const teamStructure = [
    {
      title: 'Secretariat Head',
      description: 'Overall leadership and strategic direction'
    },
    {
      title: 'M&E Unit',
      description: 'Monitoring, evaluation, and performance tracking'
    },
    {
      title: 'Communications',
      description: 'Stakeholder engagement and public communications'
    },
    {
      title: 'Technical Teams',
      description: 'Specialized expertise in various PFM areas'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About PFMRS
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              The Public Financial Management Reforms Secretariat is the coordinating body for all PFM reforms in Kenya, established under the National Treasury to drive transformation in public finance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center animate-slide-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Kenya with efficient, transparent, and accountable public financial management systems that deliver quality services to all citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To coordinate and facilitate the implementation of public financial management reforms for improved governance and service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, transparency, accountability, innovation, and excellence in all our reform initiatives and stakeholder engagements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mandate and Functions */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-6">
                Our Mandate & Functions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                PFMRS was established to provide strategic leadership and coordination for public financial management reforms across Kenya, ensuring systematic and coherent implementation of improvements.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Key Responsibilities</h3>
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
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
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

      {/* Organizational Structure */}
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

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamStructure.map((unit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
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
              <Card className="bg-primary text-white">
                <CardContent className="p-8">
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

      {/* Achievements Timeline */}
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

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
              
              <div className="space-y-12">
                {[
                  {
                    year: '2013',
                    title: 'PFMRS Establishment',
                    description: 'Secretariat established to coordinate PFM reforms under the National Treasury'
                  },
                  {
                    year: '2018',
                    title: 'First Strategy Implementation',
                    description: 'Successful completion of PFM Strategy 2013-2018 with significant achievements'
                  },
                  {
                    year: '2023',
                    title: 'New Strategy Launch',
                    description: 'Launch of PFM Strategy 2023-2028 with enhanced focus on digital transformation'
                  },
                  {
                    year: '2024',
                    title: 'Digital Milestone',
                    description: 'Major progress in digitizing government financial systems across all counties'
                  }
                ].map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-1/2 px-6">
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
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
