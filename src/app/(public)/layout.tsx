
'use client';

import {
  PublicLayoutProvider,
  usePublicLayout,
} from './public-layout-context';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PublicSidebar } from './_components/public-sidebar';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

function PublicLayoutContent({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const { isSidebarOpen, setSidebarOpen } = usePublicLayout();

  return (
    <div className="flex min-h-screen">
      <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-72">
          <PublicSidebar />
        </SheetContent>
      </Sheet>
      <div className="flex-1 flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicLayoutProvider>
      <PublicLayoutContent>{children}</PublicLayoutContent>
    </PublicLayoutProvider>
  );
}
