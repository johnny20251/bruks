import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import PageHeader from '../components/PageHeader';

// Video data
const videos = [
  {
    id: 1,
    title: 'Stay Friends - Official Music Video',
    thumbnailUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    youtubeUrl: 'https://youtube.com/watch?v=example1',
    views: '2.4M'
  },
  {
    id: 2,
    title: 'Magic Show - Official Music Video',
    thumbnailUrl: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg',
    youtubeUrl: 'https://youtube.com/watch?v=example2',
    views: '1.8M'
  },
  {
    id: 3,
    title: 'No Contact - Official Music Video',
    thumbnailUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg',
    youtubeUrl: 'https://youtube.com/watch?v=example3',
    views: '3.2M'
  },
  {
    id: 4,
    title: 'Daydreaming - Official Music Video',
    thumbnailUrl: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg',
    youtubeUrl: 'https://youtube.com/watch?v=example4',
    views: '1.5M'
  },
  {
    id: 5,
    title: 'Good Cry - Official Music Video',
    thumbnailUrl: 'https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg',
    youtubeUrl: 'https://youtube.com/watch?v=example5',
    views: '4.7M'
  },
  {
    id: 6,
    title: 'Stay Friends - Behind The Scenes',
    thumbnailUrl: 'https://images.pexels.com/photos/8412268/pexels-photo-8412268.jpeg',
    youtubeUrl: 'https://youtube.com/watch?v=example6',
    views: '982K'
  },
  {
    id: 7,
    title: 'Bruklin - Summer Tour Diary',
    thumbnailUrl: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg',
    youtubeUrl: 'https://youtube.com/watch?v=example7',
    views: '1.1M'
  },
  {
    id: 8,
    title: 'Acoustic Session - No Contact',
    thumbnailUrl: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg',
    youtubeUrl: 'https://youtube.com/watch?v=example8',
    views: '736K'
  }
];

const Videos = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  return (
    <div className="animate-fadeIn">
      <PageHeader 
        title="Videos" 
        subtitle="Music videos, live performances, and behind-the-scenes footage"
        imageUrl="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg"
      />
      
      <section className="section bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <motion.div 
                key={video.id}
                className="relative group rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-video relative">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                      hoveredVideo === video.id ? 'bg-opacity-60' : 'bg-opacity-30'
                    } flex items-center justify-center`}>
                      <div className={`rounded-full bg-accent-600 p-3 transition-transform duration-300 ${
                        hoveredVideo === video.id ? 'scale-110' : 'scale-100'
                      }`}>
                        <Play fill="white" className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs">
                      {video.views} views
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900">
                    <h3 className="text-lg font-medium line-clamp-1">{video.title}</h3>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;