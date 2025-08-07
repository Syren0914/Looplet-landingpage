import { ButtonLink } from "@/common/button";

interface BlogPostCardProps {
  _id: string;
  _title: string;
  _slug: string;
  excerpt?: string;
  publishedAt?: string;
  author?: {
    _title: string;
    image?: {
      url: string;
      alt: string | null;
    };
  };
}

export function BlogPostCard({ _id, _title, _slug, excerpt, publishedAt, author }: BlogPostCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-[--border] bg-[--surface-secondary] p-6 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
      <div className="flex items-start gap-4">
        {author?.image && (
          <img
            alt={author.image.alt ?? author._title}
            className="h-10 w-10 rounded-full"
            src={author.image.url}
          />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
            {_title}
          </h3>
          {excerpt && (
            <p className="mt-2 text-[--text-secondary] dark:text-[--dark-text-secondary]">
              {excerpt}
            </p>
          )}
          <div className="mt-4 flex items-center gap-4 text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
            {author && <span>{author._title}</span>}
            {publishedAt && <span>{new Date(publishedAt).toLocaleDateString()}</span>}
          </div>
        </div>
      </div>
      <ButtonLink href={`/blog/${_slug}`} className="mt-auto">
        Read more
      </ButtonLink>
    </article>
  );
}
