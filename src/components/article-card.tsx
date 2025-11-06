
import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/types';
import { Film } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const isVideo = !!article.videoUrl;

  return (
    <article className="flex flex-col group">
      <Link href={`/article/${article.slug}`} className="block mb-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          {isVideo && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
              <Film className="h-10 w-10 text-white/90" />
            </div>
          )}
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={article.imageHint}
          />
        </div>
      </Link>
      
      <div className="flex flex-col flex-1">
        <Link 
          href={`/category/${article.category.slug}`}
          className="inline-block mb-2 text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          {article.category.name}
        </Link>
        
        <h3 className="font-serif text-xl md:text-2xl font-light leading-tight mb-3">
          <Link href={`/article/${article.slug}`} className="hover:underline">
            {article.title}
          </Link>
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
          <span className="font-medium">{article.author.name}</span>
          <span>•</span>
          <span>{article.publishedAt}</span>
        </div>
      </div>
    </article>
  );
}
