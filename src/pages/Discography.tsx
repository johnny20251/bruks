import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { ExternalLink, Music } from 'lucide-react';

// Song data
const songs = [
  { 
    id: 1, 
    title: 'Stay Friends', 
    coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    releaseDate: '2023',
    links: {
      spotify: 'https://open.spotify.com',
      apple: 'https://music.apple.com',
      youtube: 'https://youtube.com'
    }
  },
  { 
    id: 2, 
    title: 'Magic Show', 
    coverUrl: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg',
    releaseDate: '2023',
    links: {
      spotify: 'https://open.spotify.com',
      apple: 'https://music.apple.com',
      youtube: 'https://youtube.com'
    }
  },
  { 
    id: 3, 
    title: 'No Contact', 
    coverUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    releaseDate: '2024',
    links: {
      spotify: 'https://open.spotify.com',
      apple: 'https://music.apple.com',
      youtube: 'https://youtube.com'
    }
  },
  { 
    id: 4, 
    title: 'Daydreaming', 
    coverUrl: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg',
    releaseDate: '2024',
    links: {
      spotify: 'https://open.spotify.com',
      apple: 'https://music.apple.com',
      youtube: 'https://youtube.com'
    }
  },
  { 
    id: 5, 
    title: 'Good Cry', 
    coverUrl: 'https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg',
    releaseDate: '2025',
    links: {
      spotify: 'https://open.spotify.com',
      apple: 'https://music.apple.com',
      youtube: 'https://youtube.com'
    }
  },
  { 
    id: 6, 
    title: 'Good Cry (Acoustic)', 
    coverUrl: 'https://images.pexels.com/photos/8412268/pexels-photo-8412268.jpeg',
    releaseDate: '2025',
    links: {
      spotify: 'https://open.spotify.com',
      apple: 'https://music.apple.com',
      youtube: 'https://youtube.com'
    }
  },
];

const Discography = () => {
  const [hoveredSong, setHoveredSong] = useState<number | null>(null);

  return (
    <div className="animate-fadeIn">
      <PageHeader 
        title="Discography" 
        subtitle="Explore my musical journey"
        imageUrl="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg"
      />
      
      <section className="section bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {songs.map((song, index) => (
              <motion.div 
                key={song.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredSong(song.id)}
                onMouseLeave={() => setHoveredSong(null)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={song.coverUrl} 
                    alt={song.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  {hoveredSong === song.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                      <Music size={48} className="text-white opacity-80" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-1">{song.releaseDate}</p>
                  <h3 className="text-xl font-bold mb-4">{song.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    <a 
                      href={song.links.spotify} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm inline-flex items-center"
                    >
                      Spotify
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                    <a 
                      href={song.links.apple} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-pink-600 hover:bg-pink-700 rounded text-sm inline-flex items-center"
                    >
                      Apple
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                    <a 
                      href={song.links.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm inline-flex items-center"
                    >
                      YouTube
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discography;