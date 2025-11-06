import { Instagram, Linkedin, Facebook, Twitter, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  const links = [
    { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">Marian IEDC</h3>
            <p className="mt-1 text-sm text-white/70">Build. Learn. Ship. Together.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
              <Mail size={16} />
              <a className="hover:underline" href="mailto:iedc@mariancollege.edu">iedc@mariancollege.edu</a>
            </div>
            <div className="mt-1 inline-flex items-center gap-2 text-sm text-white/80">
              <MessageSquare size={16} />
              <a className="hover:underline" href="#join">Join our Discord / WhatsApp</a>
            </div>
          </div>
          <div className="flex gap-3">
            {links.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Marian Engineering College IEDC. All rights reserved.</p>
      </div>
    </footer>
  );
}
