"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Optional } from "@/lib/types/optional";
import Loading from "./Loading";
import "@/styles/markdown.css";

interface MarkdownViewerProps {
  filePath: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filePath }) => {
  const [content, setContent] = useState<Optional<string>>();

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [filePath]);

  return (
    <div className="markdown-body">
      {content ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      ) : (
        <span className="flex justify-center">
          <Loading />
        </span>
      )}
    </div>
  );
};

export default MarkdownViewer;
