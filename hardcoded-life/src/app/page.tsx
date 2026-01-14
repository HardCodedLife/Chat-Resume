import Link from "next/link";
import { ArrowRight, Bot, ExternalLink, Zap, Workflow } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24 max-w-7xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-6 max-w-3xl">
        <div className="space-y-2">
          <p className="font-mono text-sm text-primary tracking-wider">
            PROJECT: HardCodedLife | STATUS: {PROFILE_DATA.basics.status}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-text-primary">
            跟我本人 AI 分身聊 2 分鐘，比看履歷更快知道我能不能把點子做出來。
          </h1>
        </div>
        
        <Link href="/chat">
          <Button size="lg" className="group">
            Start Chatting
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      {/* Feature Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="flex flex-col gap-4">
          <div className="p-3 bg-primary/10 w-fit rounded-lg">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-text-primary">Prototype Speed</h3>
          <p className="text-text-secondary">
            2 小時內完成邏輯梳理，1 天內產出 Demo。
          </p>
        </Card>

        <Card className="flex flex-col gap-4">
          <div className="p-3 bg-primary/10 w-fit rounded-lg">
            <Workflow className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-text-primary">Automation</h3>
          <p className="text-text-secondary">
            不只是寫 Code，我用 n8n 與 Webhooks 串接真實業務邏輯。
          </p>
        </Card>

        <Card className="flex flex-col gap-4">
          <div className="p-3 bg-primary/10 w-fit rounded-lg">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-text-primary">AI Native</h3>
          <p className="text-text-secondary">
            熟練使用 MCP, Ollama 與 Claude Code，我是 AI 時代的 Shipping Machine。
          </p>
        </Card>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-text-primary border-l-4 border-primary pl-4">
          Selected Projects
        </h2>
        <div className="grid gap-6">
          {PROFILE_DATA.projects.map((project) => (
            <Card key={project.id} hoverEffect className="group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-text-primary">
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-text-secondary">
                    {project.one_liner}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}