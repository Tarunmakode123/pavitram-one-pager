"use client";

import React from "react";
import { SITE_CONFIG, SocialLink } from "@/config/siteConfig";
import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className = "", iconSize = 18 }: SocialLinksProps) {
  const getSocialIcon = (platform: SocialLink["platform"]) => {
    switch (platform) {
      case "Instagram":
        return <Instagram size={iconSize} />;
      case "Facebook":
        return <Facebook size={iconSize} />;
      case "LinkedIn":
        return <Linkedin size={iconSize} />;
      case "YouTube":
        return <Youtube size={iconSize} />;
      case "Twitter":
        return <Twitter size={iconSize} />;
      default:
        return <Instagram size={iconSize} />;
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SITE_CONFIG.socialLinks.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow Pavitram Properties on ${social.platform}`}
          className="w-9 h-9 rounded-xl bg-white/5 border border-gray-800 hover:border-pavitram-orange hover:bg-pavitram-orange hover:text-white text-gray-400 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
        >
          {getSocialIcon(social.platform)}
        </a>
      ))}
    </div>
  );
}
