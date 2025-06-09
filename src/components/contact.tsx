import Link from './link';

const Contact = () => {
  type ContactMethod = {
    name: string;
    url: string;
  };

  const contactMethods: ContactMethod[] = [
    { name: '@tylerpashigian', url: 'https://x.com/tylerpashigian' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tyler-pashigian/' },
    { name: 'github', url: 'https://github.com/tylerpashigian' },
  ];

  return (
    <div className="flex gap-4">
      {contactMethods.map((method) => (
        <Link to={method.url} variant="ghost">
          {method.name}
        </Link>
      ))}
    </div>
  );
};

export default Contact;
