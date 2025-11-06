
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDataStore } from '@/hooks/use-data-store.tsx';
import { ScrollArea } from '@/components/ui/scroll-area';
import { usePublicLayout } from '../public-layout-context';

export function PublicSidebar() {
  const { categories, isInitialized } = useDataStore();
  const pathname = usePathname();
  const { setSidebarOpen } = usePublicLayout();

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };
  
  return (
    <div className="h-full flex flex-col bg-white border-r">
      <div className="p-6 border-b">
        <Link href="/" onClick={handleLinkClick}>
          <span className="font-serif text-2xl font-light tracking-tight text-foreground hover:text-muted-foreground transition-colors">
            Readme Hub
          </span>
        </Link>
      </div>
      
      <ScrollArea className="flex-1">
        <nav className="p-6">
          <ul className="space-y-6">
            <li>
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className={`block text-sm font-medium transition-colors ${
                  pathname === '/' 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Home
              </Link>
            </li>
            
            {isInitialized && categories.length > 0 && (
              <li>
                <h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
                  Categories
                </h4>
                <ul className='space-y-2'>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link 
                        href={`/category/${category.slug}`} 
                        onClick={handleLinkClick}
                        className={`block text-sm transition-colors ${
                          pathname === `/category/${category.slug}`
                            ? 'text-foreground font-medium' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </nav>
      </ScrollArea>
    </div>
  );
}
