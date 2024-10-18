'use client';

import { useState, useEffect } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLenis } from '@/lib/lenis'

export default function Menu() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('intro');
  const { theme, setTheme } = useTheme()
  const lenis = useLenis();

  useEffect(() => {
    const controlMenuBar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY) {
          if (currentScrollY - lastScrollY > 32) {
            setIsVisible(false);
            setLastScrollY(currentScrollY);
          }
        } else {
          if (lastScrollY - currentScrollY > 32) {
            setIsVisible(true);
            setLastScrollY(currentScrollY);
          }
        }

        const sections = ['intro', 'play', 'style', 'glyphs', 'about'];
        const activeSection = sections.find(section => {
          const rect = document.getElementById(section)?.getBoundingClientRect();
          const halfWindowHeight = window.innerHeight / 2;
          return rect && rect.top <= halfWindowHeight && rect.bottom >= halfWindowHeight;
        });
        
        if (activeSection) {
          setActiveSection(activeSection);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlMenuBar);

      return () => {
        window.removeEventListener('scroll', controlMenuBar);
      };
    }
  }, [lastScrollY]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleNavigation = (section: string) => {
    const targetElement = document.getElementById(section);
    if (targetElement && lenis) {
      lenis.scrollTo(targetElement);
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 transition-transform duration-200 ease-in-out z-30 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 items-center py-4 pl-1 pr-4 md:p-4 max-h-16 w-full bg-background">
        {/* Empty left column on sm screens */}
        <div className="hidden sm:flex"></div>

        {/* Menubar: left-aligned on small screens, center-aligned on sm and above */}
        <div className="flex justify-start sm:justify-center z-50">
          <Menubar className="border-none shadow-none bg-transparent">
            {[
              { name: 'Intro', id: 'intro' },
              { name: 'Play', id: 'play' },
              { name: 'Style', id: 'style' },
              { name: 'Glyphs', id: 'glyphs' },
              { name: 'About', id: 'about' }
            ].map((item) => (
              <MenubarMenu key={item.id}>
                <MenubarTrigger 
                  className={`px-2 cursor-pointer transition-color duration-200 ${activeSection === item.id ? 'text-muted-foreground' : 'hover:text-muted-foreground'}`}
                  onClick={() => handleNavigation(item.id)}>
                  {item.name}
                </MenubarTrigger>
              </MenubarMenu>
            ))}
          </Menubar>
        </div>

        {/* Right aligned button */}
        <div className="flex justify-end z-40">
          <Button size="icon" className='w-8 h-8' onClick={toggleTheme}>
            {theme === 'light' ? <Moon strokeWidth={1} className="h-4 w-4" /> : <Sun strokeWidth={1} className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </div>
  );
}