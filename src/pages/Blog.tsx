import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { ArrowRight } from 'lucide-react';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Behind the Lyrics: How "No Contact" Came to Life',
    slug: 'behind-the-lyrics-no-contact',
    date: 'May 15, 2025',
    excerpt: 'In this post, I share the emotional journey that led to writing one of my most personal songs to date, and how a simple voice memo turned into the final track you hear today.',
    coverImage: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg'
  },
  {
    id: 2,
    title: 'Tour Diary: First Week on the Road',
    slug: 'tour-diary-first-week',
    date: 'April 28, 2025',
    excerpt: 'From sound check disasters to surprise fan moments, here\'s everything that happened during my first week of touring across the East Coast.',
    coverImage: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg'
  },
  {
    id: 3,
    title: 'My Songwriting Process: From Idea to Studio',
    slug: 'songwriting-process',
    date: 'April 10, 2025',
    excerpt: 'Ever wondered how a song comes together? In this post, I break down my creative process from the initial spark of inspiration to the final recording session.',
    coverImage: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg'
  },
  {
    id: 4,
    title: 'Favorite NYC Spots That Inspire My Music',
    slug: 'nyc-inspiration-spots',
    date: 'March 22, 2025',
    excerpt: 'A tour through the New York City locations that have shaped my sound and lyrics - from quiet parks where I write to the bustling streets that energize me.',
    coverImage: 'https://images.pexels.com/photos/2346813/pexels-photo-2346813.jpeg'
  },
];

const Blog = () => {
  return (
    <div className="animate-fadeIn">
      <PageHeader 
        title="Blog" 
        subtitle="Thoughts, stories, and behind-the-scenes from Bruklin"
        imageUrl="https://images.pexels.com/photos/3013855/pexels-photo-3013855.jpeg"
      />
      
      <section className="section bg-black">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold mb-3 hover:text-accent-400 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-accent-400 font-medium inline-flex items-center hover:text-accent-300 transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;