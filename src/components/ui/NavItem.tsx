import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
}

export const NavItem = ({ icon, text }: NavItemProps) => {
  return (
    <div className="flex items-center space-x-2 text-white/80 hover:text-white cursor-pointer">
      {icon}
      <span>{text}</span>
      <ChevronDown className="h-4 w-4" />
    </div>
  );
}; 