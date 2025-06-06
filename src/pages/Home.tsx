import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Music2, Download, ExternalLink, Disc } from 'lucide-react';

const Home = () => {
  const spotifyEmbedUrl = "https://open.spotify.com/embed/track/5nujrmhLynf4yMoMtj8AQF";

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
          style={{backgroundImage: "url('https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg')"}}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </motion.div>
        
        <div className="container-custom relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-2 bg-gradient-to-r from-accent-400 to-secondary-400 text-transparent bg-clip-text">
              BRUKLIN
            </h1>
            <div className="text-xl text-accent-400 font-medium">Rising Pop Star</div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At age 17, Bruklin is turning New York's heartbeat into pop magic—touching souls worldwide.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Music2, url: "https://open.spotify.com", color: "bg-green-600 hover:bg-green-700", label: "Spotify" },
              { icon: Disc, url: "https://music.apple.com", color: "bg-pink-600 hover:bg-pink-700", label: "Apple Music" },
              { icon: Play, url: "https://youtube.com", color: "bg-red-600 hover:bg-red-700", label: "YouTube" }
            ].map((platform) => (
              <a 
                key={platform.label}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} p-4 rounded-full transition-all duration-300 hover:scale-110 group relative`}
              >
                <platform.icon className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {platform.label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="section bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Latest Release
            </h2>
            
            <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg"
                    alt="Under Your Skin"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Under Your Skin</h3>
                  <p className="text-gray-400 mb-6">Latest Single • 2025</p>
                  
                  <div className="aspect-video bg-gray-800 rounded-lg mb-6 overflow-hidden">
                    <iframe
                      src={spotifyEmbedUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="encrypted-media"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://open.spotify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex items-center gap-2"
                    >
                      <Music2 size={18} />
                      Listen Now
                    </a>
                    <a 
                      href="#"
                      className="btn btn-outline flex items-center gap-2"
                    >
                      <Download size={18} />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit & Music Player Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Explore Bruklin's World
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg" 
                alt="Press Kit" 
                className="rounded-lg shadow-xl"
              />
              <a 
                href="https://bruklin.us/wp-content/uploads/2025/04/Electronic-Press-Kit-Bruklin-updated.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
              >
                <button className="btn bg-red-600 hover:bg-red-700 flex items-center">
                  <Download className="mr-2" />
                  Download Press Kit
                </button>
              </a>
            </motion.div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Latest Release: Under Your Skin</h3>
              <div className="aspect-video bg-gray-800 rounded-lg mb-4">
                {/* Spotify embed placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <Play className="w-12 h-12" />
                </div>
              </div>
              <a 
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 flex items-center"
              >
                Listen on Spotify
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tracklist Section */}
      <section className="section bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Discography</h2>
          
          <div className="space-y-4">
            {[
              { title: "Under Your Skin", status: "NEW" },
              "Good Girl Bad Dreams",
              "Good Cry (Acoustic)",
              "Good Cry",
              "Daydreaming",
              "No Contact",
              "Stay Friends",
              "Magic Show"
            ].map((track, index) => (
              <motion.div 
                key={typeof track === 'string' ? track : track.title}
                className="bg-gray-900/50 p-6 rounded-lg flex items-center justify-between group hover:bg-gray-900 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <Play className="w-5 h-5 mr-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">
                    {typeof track === 'string' ? track : track.title}
                    {typeof track === 'object' && track.status && (
                      <span className="ml-2 text-xs bg-red-600 px-2 py-1 rounded-full">
                        {track.status}
                      </span>
                    )}
                  </span>
                </div>
                <Music2 className="w-5 h-5 text-gray-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom max-w-4xl text-center">
          <motion.img 
            src="https://images.pexels.com/photos/1764564/pexels-photo-1764564.jpeg"
            alt="Bruklin"
            className="w-64 h-64 object-cover rounded-full mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.blockquote 
            className="text-xl md:text-2xl text-gray-300 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            "At just 17, Bruklin is already emerging as a unique voice in music. With bold visuals, raw emotion, and a rare lyrical finesse, her work is where nostalgia meets edge to form a new era of pop. Whether lighting up big productions like 'Good Girl Bad Dreams,' or stripping back for raw and emotional moments, she's just getting started."
          </motion.blockquote>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-black">
        <div className="container-custom max-w-2xl">
          <form className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Final Footer Banner */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg"
            alt="Bruklin"
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-8">BRUKLIN</h2>
          <p className="text-gray-400 mb-6">© 2025 All rights reserved</p>
          <div className="flex space-x-6">
            {['instagram', 'tiktok', 'facebook', 'twitter'].map((social) => (
              <a
                key={social}
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-400 transition-colors"
              >
                <Music2 className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;