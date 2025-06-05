import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Music2, Download, ExternalLink } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{backgroundImage: "url('https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg')"}}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </motion.div>
        
        <div className="container-custom relative z-10 text-center px-4">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            BRUKLIN
          </motion.h1>
          
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
              { icon: "spotify", url: "https://open.spotify.com", color: "bg-green-600 hover:bg-green-700" },
              { icon: "apple", url: "https://music.apple.com", color: "bg-pink-600 hover:bg-pink-700" },
              { icon: "youtube", url: "https://youtube.com", color: "bg-red-600 hover:bg-red-700" },
              { icon: "amazon", url: "https://music.amazon.com", color: "bg-blue-600 hover:bg-blue-700" }
            ].map((platform) => (
              <a 
                key={platform.icon}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} p-4 rounded-full transition-transform hover:scale-110`}
              >
                <Music2 className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
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