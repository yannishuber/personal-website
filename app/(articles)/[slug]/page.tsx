import Article from "@/components/article";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const { metadata } = await import(`@/articles/${slug}/${slug}.mdx`);

  if (!metadata) {
    return {
      title: "Yannis Huber",
      description:
        "I'm a developer from Bern, Switzerland. Drop a line at me@yannishuber.ch",
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/articles/${slug}/${slug}.mdx`);

  return (
    <Article
      title={metadata.title}
      date={metadata.date}
    >
      <Post />
    </Article>
  );
}

export function generateStaticParams() {
  return [{ slug: "animations", }, { slug: "vetra" }, { slug: "mrcs" }];
}

export const dynamicParams = false;
