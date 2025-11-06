
'use client';

import { useDataStore } from '@/hooks/use-data-store.tsx';
import PublicLayout from './(public)/layout';
import { ArticleCard } from '@/components/article-card';
import { HeroArticle } from '@/components/hero-article';

export default function Home() {
  const { articles, isInitialized } = useDataStore();

  if (!isInitialized) {
    return <PublicLayout><div className="p-8 text-center">Loading articles...</div></PublicLayout>;
  }

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <PublicLayout>
      <div className="w-full">
        {articles.length > 0 ? (
          <>
            {featuredArticle && (
              <HeroArticle article={featuredArticle} />
            )}
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-sm font-bold tracking-wider uppercase text-muted-foreground mb-8 border-b pb-4">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20 max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-light">No articles found.</h2>
            <p className="text-muted-foreground mt-4 text-lg">Please go to the admin panel to create your first article.</p>
          </div>
        )}
      </div>
    </PublicLayout>
  );
}
