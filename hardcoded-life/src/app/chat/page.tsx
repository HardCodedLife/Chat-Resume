"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Message } from "@/types/chat";

const SUGGESTED_CHIPS = [
  "我最拿手的 3 件事？",
  "關於 n8n，我實作過什麼？",
  "給我 3 天，我能做出什麼 Demo？",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      const modelMessage: Message = { role: "model", content: data.content };
      
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Optional: Add an error message to the chat
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "抱歉，我目前無法回應。請稍後再試。" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateDemo = () => {
    sendMessage("給我 3 天，我能做出什麼 Demo？");
  };

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="flex-none p-4 border-b border-slate-800 flex items-center gap-4 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
        <Link href="/">
          <Button variant="ghost" size="sm" className="-ml-2">
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back
          </Button>
        </Link>
        <h1 className="font-bold text-lg">AI HardCodedLife</h1>
      </header>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 space-y-4">
            <p>我是 AI 分身，請隨意提問。</p>
          </div>
        )}
        
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 whitespace-pre-wrap leading-relaxed ${
                msg.role === "user"
                  ? "bg-surface border border-slate-700 text-text-primary rounded-br-none"
                  : "bg-primary/10 text-text-primary rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-primary/10 text-primary px-4 py-3 rounded-2xl rounded-bl-none animate-pulse">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex-none p-4 border-t border-slate-800 bg-slate-950 space-y-4">
        {/* Quick Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {SUGGESTED_CHIPS.map((chip) => (
            <button
              key={chip}
              onClick={() => sendMessage(chip)}
              disabled={isLoading}
              className="flex-none px-4 py-2 bg-surface hover:bg-slate-800 border border-slate-800 rounded-full text-sm text-text-secondary whitespace-nowrap transition-colors disabled:opacity-50"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="flex gap-2 max-w-4xl mx-auto"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            placeholder="Type your message..."
            className="flex-1 bg-surface border border-slate-800 rounded-xl p-3 resize-none focus:outline-none focus:border-primary/50 text-text-primary h-[52px] max-h-32"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="h-[52px] w-[52px] rounded-xl shrink-0"
          >
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
