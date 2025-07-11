'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, User, Code, Mail, ChevronDown, Send } from 'lucide-react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const form = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulando envio de email
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      form.current.reset();
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    { 
      title: "E-commerce Platform", 
      category: "Web Design", 
      description: "Modern e-commerce solution with intuitive user experience and conversion optimization"
    },
    { 
      title: "Mobile Banking App", 
      category: "UI/UX Design", 
      description: "Secure and user-friendly mobile banking application with advanced features"
    },
    { 
      title: "Brand Identity", 
      category: "Branding", 
      description: "Complete brand identity system including logo, colors, and brand guidelines"
    },
    { 
      title: "Dashboard Analytics", 
      category: "Web Design", 
      description: "Data visualization dashboard with real-time analytics and reporting"
    },
    { 
      title: "Social Media App", 
      category: "Mobile Design", 
      description: "Engaging social media platform with innovative user interaction features"
    },
    { 
      title: "Healthcare Portal", 
      category: "UI/UX Design", 
      description: "Patient-centered healthcare portal with appointment scheduling and medical records"
    }
  ];

  const services = [
    { 
      icon: <User className="w-8 h-8" />, 
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that drive conversions and user satisfaction"
    },
    { 
      icon: <Code className="w-8 h-8" />, 
      title: "Web Development",
      description: "Building responsive, fast, and SEO-optimized web applications using modern technologies"
    },
    { 
      icon: <Mail className="w-8 h-8" />, 
      title: "Brand Identity",
      description: "Developing cohesive brand experiences that resonate with your target audience"
    }
  ];

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gray-50 text-gray-900';

  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200';

  return (
    <>
      {/* Estilos inline para fontes */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Press+Start+2P&display=swap');
        
        * {
          font-family: 'Roboto', sans-serif;
        }
        
        .pixel-font {
          font-family: 'Press Start 2P', monospace;
        }
      `}</style>

      <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
        {/* Header */}
        <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-90 border-b border-opacity-20">
          <div className={`${isDarkMode ? 'bg-purple-900' : 'bg-purple-100'} border-b ${isDarkMode ? 'border-purple-700' : 'border-purple-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-2">
                  <svg width="197" height="38" viewBox="0 0 197 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="196.509" height="37.4043" rx="11.9054" fill="#572AA4" fill-opacity="0.5"/>
                    <path d="M105.858 25.808V24.614H104.664V23.42H107.052V24.614H110.634V22.226H105.858V21.032H104.664V18.644H105.858V17.45H111.828V18.644H113.022V19.838H110.634V18.644H107.052V21.032H111.828V22.226H113.022V24.614H111.828V25.808H105.858ZM117.798 25.808V18.644H115.41V17.45H122.574V18.644H120.186V25.808H117.798ZM124.962 25.808V24.614H123.768V17.45H126.156V24.614H129.738V17.45H132.126V24.614H130.932V25.808H124.962ZM133.32 25.808V17.45H139.29V18.644H140.484V19.838H141.678V23.42H140.484V24.614H139.29V25.808H133.32ZM135.708 24.614H138.096V23.42H139.29V19.838H138.096V18.644H135.708V24.614ZM144.066 25.808V24.614H146.454V18.644H144.066V17.45H151.23V18.644H148.842V24.614H151.23V25.808H144.066ZM153.618 25.808V24.614H152.424V18.644H153.618V17.45H159.588V18.644H160.782V24.614H159.588V25.808H153.618ZM154.812 24.614H158.394V18.644H154.812V24.614ZM163.17 25.808V24.614H161.976V23.42H164.364V24.614H167.946V22.226H163.17V21.032H161.976V18.644H163.17V17.45H169.14V18.644H170.334V19.838H167.946V18.644H164.364V21.032H169.14V22.226H170.334V24.614H169.14V25.808H163.17Z" fill="#B3EDEC"/>
                    <path d="M22.5498 27.4576V10.491H39.5163V12.9148H27.3974V17.7624H37.0925V20.1862H27.3974V25.0338H39.5163V27.4576H22.5498ZM41.9401 27.4576V10.491H46.7877V12.9148H49.2115V15.3386H51.6353V17.7624H54.0591V10.491H58.9066V27.4576H54.0591V22.61H51.6353V20.1862H49.2115V17.7624H46.7877V27.4576H41.9401ZM61.3304 27.4576V10.491H66.178V17.7624H68.6018V15.3386H71.0256V12.9148H73.4494V10.491H78.2969V12.9148H75.8732V15.3386H73.4494V17.7624H71.0256V20.1862H73.4494V22.61H75.8732V25.0338H78.2969V27.4576H71.0256V25.0338H68.6018V22.61H66.178V27.4576H61.3304ZM83.1445 27.4576V25.0338H80.7207V12.9148H83.1445V10.491H95.2635V12.9148H97.6873V25.0338H95.2635V27.4576H83.1445ZM85.5683 25.0338H92.8397V12.9148H85.5683V25.0338Z" fill="#E89295"/>
                  </svg>
                </div>
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={toggleTheme}
                    className={`p-2 rounded-full ${isDarkMode ? 'bg-purple-800 hover:bg-purple-700' : 'bg-purple-200 hover:bg-purple-300'} transition-colors`}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                  <nav className="hidden md:flex space-x-8">
                    <a href="#about" className={`${isDarkMode ? 'text-purple-300 hover:text-purple-200' : 'text-purple-700 hover:text-purple-800'} transition-colors`}>About</a>
                    <a href="#projects" className={`${isDarkMode ? 'text-purple-300 hover:text-purple-200' : 'text-purple-700 hover:text-purple-800'} transition-colors`}>Projects</a>
                    <a href="#contact" className={`${isDarkMode ? 'text-purple-300 hover:text-purple-200' : 'text-purple-700 hover:text-purple-800'} transition-colors`}>Contact</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="pt-20">
          <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 opacity-70 transform rotate-45 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 opacity-60 transform rotate-12 animate-bounce"></div>
                <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-br from-blue-400 to-cyan-500 opacity-50 transform -rotate-12 animate-pulse"></div>
                <div className="absolute bottom-40 right-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 opacity-70 transform rotate-45 animate-bounce"></div>
              </div>
            </div>

            <div className="relative z-10 text-center max-w-4xl">
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pixel-font text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-cyan-400 mb-4 leading-tight">
                  We transform ideas into
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pixel-font text-cyan-400 leading-tight">
                  memorable digital experiences
                </h2>
              </div>
              <p className="text-gray-300 mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                ENKO Studio creates digital experiences that blend cutting-edge aesthetics with functional design.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Projects →
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-cyan-400" />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-2xl md:text-3xl pixel-font mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Featured Projects
                </h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  A showcase of our most impactful digital solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <article key={index} className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${cardClasses} border`}>
                    <div className={`h-48 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-lg pixel-font mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm mb-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                        {project.category}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-2xl md:text-3xl pixel-font mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  About ENKO Studio
                </h2>
                <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto space-y-6`}>
                  <p>
                    We are ENKO Studio, a creative digital agency passionate about transforming innovative ideas into extraordinary digital experiences.
                  </p>
                  <p>
                    With a focus on user-centered design and cutting-edge technology, we help businesses create digital solutions that engage users and drive business growth.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className={`text-center p-8 rounded-xl ${cardClasses} border transition-all duration-300 hover:shadow-lg`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDarkMode ? 'bg-purple-800' : 'bg-purple-100'}`}>
                      <div className={`${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className={`text-lg pixel-font mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                      {service.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-2xl md:text-3xl pixel-font mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Lets Create Together
                </h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Ready to transform your ideas into digital reality? Contact us today.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className={`rounded-xl p-8 ${cardClasses} border`}>
                  <h3 className={`text-lg pixel-font mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email
                      </h4>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <a href="mailto:enkoworkspace@gmail.com" className="hover:text-purple-500 transition-colors">
                          enkoworkspace@gmail.com
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Office Hours
                      </h4>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                    
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Response Time
                      </h4>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className={`rounded-xl p-8 ${cardClasses} border`}>
                  <h3 className={`text-lg pixel-font mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Send us a Message
                  </h3>
                  
                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                      <label htmlFor="user_name" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="user_email" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
                        placeholder="Project inquiry"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="text-green-500 text-center">
                        Message sent successfully! We ll get back to you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="text-red-500 text-center">
                        Something went wrong. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={`border-t py-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 ENKO Studio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}