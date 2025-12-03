import React from "react";
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Github, href: "https://github.com/Shatakshi-gupta-ggits", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shatakshi1", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="w-full bg-card py-8 border-t border-border">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © 2025 Shatakshi Gupta. Built with 
            <Heart className="w-4 h-4 text-pulse-500 fill-pulse-500 animate-pulse" />
            and powered by cutting-edge technology.
          </p>
          
          <div className="flex items-center gap-3">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-pulse-500 hover:bg-pulse-50 dark:hover:bg-pulse-900/30 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
