import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const MyStory = () => {
  return (
    <div className="animate-fadeIn">
      <PageHeader 
        title="My Story" 
        subtitle="From NYC streets to the world stage"
        imageUrl="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg"
      />
      
      <section className="section bg-black">
        <div className="container-custom max-w-4xl">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-accent-400">Growing Up in NYC</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Born and raised in the vibrant borough of Brooklyn, my childhood was filled with the sounds of the city. From street performers to the constant hum of subway trains, music was always part of my daily life.
                </p>
                <p className="mb-4">
                  I started singing before I could properly speak, according to my parents. By age 7, I was performing at family gatherings, and by 10, I was writing my own songs on an old keyboard my father had found.
                </p>
                <p>
                  The cultural diversity of New York City exposed me to countless musical styles and influences, from hip-hop to Broadway, all of which find their way into my music today.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/2225248/pexels-photo-2225248.jpeg" 
                  alt="Growing up in NYC" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-secondary-400">Musical Inspirations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg" 
                  alt="Musical Inspirations" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="mb-4">
                  My musical journey has been shaped by the iconic voices of our time. Artists like Ariana Grande, Billie Eilish, and Taylor Swift showed me that authentic storytelling can coexist with commercial success.
                </p>
                <p className="mb-4">
                  But I also draw inspiration from legends like Whitney Houston, whose vocal power continues to inspire me, and innovative producers like Max Martin, who crafted the sound of pop for generations.
                </p>
                <p>
                  Beyond pop, I find inspiration in R&B, indie rock, and even classical music, which I studied briefly as a child. This diverse palette of influences gives my sound its unique character.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary-400">Big Breaks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  My first real break came when a video of me performing at a small café in Greenwich Village went viral on TikTok. What started as a casual performance captured by a friend turned into 10 million views overnight.
                </p>
                <p className="mb-4">
                  This led to my first meeting with producers at Starlight Records, who offered me a development deal at just 15 years old. My debut single, "Stay Friends," released six months later, landed on several influential playlists.
                </p>
                <p>
                  Since then, I've been fortunate to work with some of the industry's most talented writers and producers, opening for established artists on tour, and building a fan base that continues to grow every day. This journey is just beginning, and I'm grateful for everyone who's been part of it.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/8412266/pexels-photo-8412266.jpeg" 
                  alt="Big breaks" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MyStory;