'use client';
import BasicMarkdown from "@/components/basic-markdown";
import UnterminatedBlockParsing from "@/components/unterminated-block-parsing";

export default function Home() {
  return (
    <div className="px-4">
      <h2>Basic Markdown Support</h2>
      <BasicMarkdown />

      <h2>Unterminated Block Parsing</h2>
      <UnterminatedBlockParsing />
    </div>
  );
}
