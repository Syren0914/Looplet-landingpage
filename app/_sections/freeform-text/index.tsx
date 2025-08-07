import { RichText } from "@/components/rich-text";

interface FreeformTextProps {
  _id: string;
  content: {
    json: {
      content: string;
    };
  };
}

export function FreeformText({ _id, content }: FreeformTextProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="prose prose-zinc mx-auto max-w-none dark:prose-invert">
        <RichText content={content.json.content} />
      </div>
    </section>
  );
}
