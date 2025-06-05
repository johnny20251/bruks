import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { ExternalLink } from 'lucide-react';

// Press data
const pressItems = [
  {
    id: 1,
    publication: 'Billboard',
    title: '"Rising Star Bruklin Shines with Debut Single" - Billboard Hot 100',
    date: 'April 15, 2025',
    excerpt: 'New York native Bruklin makes a stunning entrance to the pop scene with her infectious debut single...',
    url: 'https://billboard.com'
  },
  {
    id: 2,
    publication: 'Rolling Stone',
    title: 'Bruklin: Gen Z\'s Newest Pop Sensation',
    date: 'March 27, 2025',
    excerpt: 'With vulnerable lyrics and a voice beyond her years, 17-year-old Bruklin is poised to become the voice of her generation...',
    url: 'https://rollingstone.com'
  },
  {
    id: 3,
    publication: 'Pitchfork',
    title: 'Review: Bruklin - "No Contact" (7.8)',
    date: 'February 10, 2025',
    excerpt: 'On her third single, Bruklin continues to showcase her songwriting prowess and emotional depth...',
    url: 'https://pitchfork.com'
  },
  {
    id: 4,
    publication: 'The New York Times',
    title: 'From Brooklyn to Bruklin: A Hometown Hero Rises',
    date: 'January 22, 2025',
    excerpt: 'The streets of New York have shaped countless musical careers, but few have embraced their roots as authentically as teen sensation Bruklin...',
    url: 'https://nytimes.com'
  },
  {
    id: 5,
    publication: 'Variety',
    title: 'Bruklin Signs Major Label Deal Following Viral TikTok Success',
    date: 'December 5, 2024',
    excerpt: 'In a competitive bidding war, Starlight Records has secured rising star Bruklin to a multi-album deal worth...',
    url: 'https://variety.com'
  },
  {
    id: 6,
    publication: 'NPR Music',
    title: 'Tiny Desk Concert: Bruklin Brings Raw Emotion to Intimate Performance',
    date: 'November 18, 2024',
    excerpt: 'In one of our most captivating Tiny Desk concerts of the year, 17-year-old pop artist Bruklin delivered stripped-down versions of her growing catalog...',
    url: 'https://npr.org'
  },
];

const Press = () => {
  return (
    <div className="animate-fadeIn">
      <PageHeader 
        title="Press" 
        subtitle="Media coverage and features"
        imageUrl="https://images.pexels.com/photos/3756775/pexels-photo-3756775.jpeg"
      />
      
      <section className="section bg-black">
        <div className="container-custom max-w-4xl">
          <div className="mb-12">
            <a 
              href="https://bruklin.us/wp-content/uploads/2025/04/Electronic-Press-Kit-Bruklin-updated.pdf"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-primary inline-flex items-center"
            >
              <ExternalLink size={16} className="mr-2" />
              Grab Bruklin's Press Kit – Media Goodies Inside!
            </a>
          </div>
          
          <div className="space-y-10">
            {pressItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className="border-b border-gray-800 pb-8 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a 
                  href={item.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <span className="text-sm text-gray-400 mb-1 block">{item.date}</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{item.excerpt}</p>
                  <p className="text-secondary-400 font-medium flex items-center">
                    Read on {item.publication}
                    <ExternalLink size={14} className="ml-2" />
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;