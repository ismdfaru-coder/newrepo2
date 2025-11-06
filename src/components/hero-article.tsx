import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/types';
import { Film } from 'lucide-react';

interface HeroArticleProps {
  article: Article;
}

export function HeroArticle({ article }: HeroArticleProps) {
  const isVideo = !!article.videoUrl;

  return (
    <div className="relative w-full bg-black group">
      <div className="relative w-full h-[60vh] md:h-[70vh] max-h-[600px]">
        {isVideo && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
            <Film className="h-16 w-16 text-white/90" />
          </div>
        )}
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          data-ai-hint={article.imageHint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pb-12 md:pb-16">
            <div className="max-w-3xl">
              <Link 
                href={`/category/${article.category.slug}`}
                className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-white/90 hover:text-white transition-colors"
              >
                {article.category.name}
              </Link>
              <Link href={`/article/${article.slug}`}>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-4 hover:underline cursor-pointer">
                  {article.title}
                </h1>
              </Link>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed line-clamp-2 font-light">
                {article.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
                <span>{article.author.name}</span>
                <span>•</span>
                <span>{article.publishedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
