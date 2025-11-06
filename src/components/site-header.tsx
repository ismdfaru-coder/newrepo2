
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { usePublicLayout } from '@/app/(public)/public-layout-context';
import { useDataStore } from '@/hooks/use-data-store.tsx';

export function SiteHeader() {
  const { toggleSidebar } = usePublicLayout();
  const { categories, isInitialized } = useDataStore();
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
              <Menu className="h-5 w-5"/>
              <span className="sr-only">Toggle Menu</span>
            </Button>
            
            <Link href="/">
              <span className="font-serif text-xl md:text-2xl font-light tracking-tight text-foreground hover:text-muted-foreground transition-colors">
                Readme Hub
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {isInitialized && categories.slice(0, 5).map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`text-sm transition-colors ${
                  pathname === `/category/${category.slug}`
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
