import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, FileText, Calculator, Shield, Download, ExternalLink, Facebook, Mail, FileCheck } from 'lucide-react'
import './App.css'

// Template configuration object - customize this for each guide
const defaultConfig = {
  // Product Information
  productName: "Travel Allowance & Logbook Guide",
  productYear: "2025",
  productDescription: "The complete SARS-compliant guide and logbook for maximizing your travel allowance deductions in 2025",
  
  // Purchase Information
  payhipUrl: "https://payhip.com/b/oxV0l",
  
  // Hero Section
  heroTitle: "Master Your Travel Allowances",
  heroSubtitle: "The complete SARS-compliant guide and logbook for maximizing your travel allowance deductions in 2025",
  
  // Features Section
  featuresTitle: "Everything You Need for SARS Compliance",
  featuresSubtitle: "Our comprehensive solution includes both an expert guide and a professional Excel logbook to ensure you maximize your travel allowance deductions",
  
  // Guide Details
  guideTitle: "Complete Travel Allowance Solution",
  guideDescription: "Our comprehensive package includes everything you need to understand, track, and maximize your travel allowance deductions for the 2025 tax year.",
  
  // Features Cards
  features: [
    {
      icon: FileText,
      title: "33-Page Expert Guide",
      description: "Comprehensive coverage of travel allowances, SARS requirements, and tax optimization strategies",
      items: [
        "Understanding travel allowances",
        "SARS logbook requirements", 
        "Business vs personal travel",
        "Tax calculation methods"
      ]
    },
    {
      icon: Calculator,
      title: "Professional Excel Logbook",
      description: "Automated calculations, visual summaries, and SARS-compliant record keeping",
      items: [
        "Automated km calculations",
        "Monthly & annual summaries",
        "Visual charts & insights", 
        "SARS compliance check"
      ]
    },
    {
      icon: Shield,
      title: "SARS Compliant",
      description: "Fully compliant with 2025 SARS requirements and prescribed rates",
      items: [
        "2025 prescribed rates (R4.76/km)",
        "IRP5 codes 3701/3702 coverage",
        "Audit-ready documentation",
        "Professional formatting"
      ]
    }
  ],
  
  // Guide Details Items
  guideItems: [
    {
      icon: FileCheck,
      title: "Expert Guide (33 Pages)",
      description: "Detailed explanations of travel allowances, SARS requirements, and optimization strategies written by tax professionals."
    },
    {
      icon: Calculator,
      title: "Professional Excel Logbook", 
      description: "Automated calculations, visual summaries, and professional formatting that meets all SARS requirements."
    },
    {
      icon: Shield,
      title: "2025 Compliance",
      description: "Updated for the latest SARS rates and requirements, ensuring your deductions are fully compliant."
    }
  ],
  
  // Key Topics
  keyTopics: [
    "What is a Travel Allowance?",
    "SARS Logbook Requirements",
    "Business vs Personal Travel", 
    "How Travel Allowances Are Taxed",
    "SARS Rates for Business Travel (2025)",
    "Maximizing Deductions"
  ],
  
  // Purchase Section
  purchaseTitle: "Get Your Complete Travel Allowance Solution",
  purchaseSubtitle: "Don't leave money on the table. Get the professional tools you need to maximize your travel allowance deductions for 2025.",
  packageTitle: "Complete Package",
  packageSubtitle: "Expert Guide + Professional Logbook",
  packageItems: [
    "33-page expert guide (PDF)",
    "Professional Excel logbook",
    "2025 SARS compliance", 
    "Instant digital download"
  ]
}

function LandingPageTemplate({ config = defaultConfig }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#27AE60] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TaxEasy_ZA</h1>
                <p className="text-sm text-[#27AE60] font-medium">Simplify SARS. Maximize Refunds.</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[#27AE60] transition-colors">Features</a>
              <a href="#guide" className="text-gray-700 hover:text-[#27AE60] transition-colors">Guide</a>
              <a href="#purchase" className="text-gray-700 hover:text-[#27AE60] transition-colors">Get Started</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#27AE60] to-[#2ECC71] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-[#F1C40F] text-black hover:bg-[#F39C12]">
              {config.productYear} Tax Year Edition
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {config.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              {config.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F1C40F] text-black hover:bg-[#F39C12] text-lg px-8 py-4"
                onClick={() => window.open(config.payhipUrl, '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Get Your Guide Now
              </Button>
              <Button 
                size="lg" 
                className="bg-[#F1C40F] text-black hover:bg-[#F39C12] text-lg px-8 py-4"
                onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {config.featuresTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {config.featuresSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-[#27AE60] transition-colors">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-[#27AE60] mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-[#27AE60] mr-2" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guide Details Section */}
      <section id="guide" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#F1C40F] text-black">
                What's Included
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {config.guideTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {config.guideDescription}
              </p>
              
              <div className="space-y-6">
                {config.guideItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#27AE60] rounded-full flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Topics Covered</h3>
              <div className="grid grid-cols-1 gap-4">
                {config.keyTopics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#27AE60]" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-20 bg-[#27AE60]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {config.purchaseTitle}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {config.purchaseSubtitle}
          </p>
          
          <Card className="max-w-md mx-auto bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">{config.packageTitle}</CardTitle>
              <CardDescription className="text-lg">
                {config.packageSubtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#27AE60]">Available Now</span>
              </div>
              <ul className="text-left space-y-2 mb-6">
                {config.packageItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#27AE60] mr-2" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                size="lg" 
                className="w-full bg-[#27AE60] hover:bg-[#229954] text-white"
                onClick={() => window.open(config.payhipUrl, '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Purchase on Payhip
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#27AE60] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">TaxEasy_ZA</h3>
                  <p className="text-sm text-[#27AE60]">Simplify SARS. Maximize Refunds.</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Professional tax guidance and tools for South African taxpayers. 
                Helping you navigate SARS requirements and maximize your refunds.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://docs.google.com/document/d/1MWXHqvQFPhl--3mH1LtnQvoz4shRm4fXMQvH9iA5M2Q/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.google.com/document/d/1QF4pDoj65Op0aG4y1C8HygfPYFDj0RxXimA3lANbAPs/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.google.com/document/d/1jIqJ9312PIt6AJ-dN6aco9XcJ80BYk1Ly-hRrIzPxuI/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://web.facebook.com/TaxEasyZA/?notif_id=1758451849391684&notif_t=page_user_activity&ref=notif" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:support@taxeasy.co.za" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {config.productYear} TaxEasy_ZA – All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPageTemplate

