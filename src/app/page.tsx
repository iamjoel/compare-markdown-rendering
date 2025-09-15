'use client';
import BasicMarkdown from "@/components/basic-markdown";
import UnterminatedBlockParsing from "@/components/unterminated-block-parsing";
import GitHubFlavoredMarkdown from "@/components/github-flavored-markdown";
import Plugin from "@/components/plugin";

export default function Home() {
  return (
    <div className="px-4">
      <h2>Basic Markdown Support</h2>
      <BasicMarkdown />

      <h2>Unterminated Block Parsing</h2>
      <UnterminatedBlockParsing />

      <h2>GitHub Flavored Markdown</h2>
      <GitHubFlavoredMarkdown />

      <h2>Plugin(remarkPlugins and rehypePlugins)</h2>
      <Plugin />
    </div>
  );
}
