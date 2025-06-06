import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare = ({ url, title }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-accent-400 transition-colors"
            aria-label={`Share on ${link.name}`}
          >
            <Icon size={20} />
          </a>
        );
      })}
      <button
        onClick={copyToClipboard}
        className="p-2 hover:text-accent-400 transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon size={20} />
      </button>
    </div>
  );
};

export default SocialShare;