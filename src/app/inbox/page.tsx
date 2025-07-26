"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const messages = [
  {
    sender: "Alice Smith",
    time: "Just now",
    preview: "Hey! Are you available for a quick call?",
    unread: true,
  },
  {
    sender: "John Doe",
    time: "5 min ago",
    preview: "Don't forget the meeting at 3 PM today.",
    unread: false,
  },
  {
    sender: "Support Team",
    time: "1 hour ago",
    preview: "Your ticket has been resolved successfully.",
    unread: false,
  },
  {
    sender: "Marketing",
    time: "Yesterday",
    preview: "Check out our new product launch next week!",
    unread: true,
  },
];

export default function InboxPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex gap-8">
        {/* Left side - Inbox */}
        <section className="w-2/3">
          <div className="max-w-2xl">
            <header className="flex items-center justify-between gap-2 mb-4">
              <h1 className="text-3xl font-bold flex items-center gap-2 tracking-tight">
                <Mail className="w-7 h-7 text-[color:var(--color-primary)]" />
                Inbox
              </h1>
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-1 rounded-lg bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-hover)] transition-colors"
              >
                <Plus className="w-4 h-4" />
                New Message
              </Button>
            </header>
            <div className="space-y-3">
              {messages.map(({ sender, time, preview, unread }, idx) => (
                <Card
                  key={idx}
                  className={cn(
                    "flex items-center gap-4 rounded-xl border border-[color:var(--color-border)] bg-white/70 dark:bg-[color:var(--background)] shadow transition-all group hover:shadow-lg cursor-pointer",
                    unread && "ring-2 ring-[color:var(--color-primary)]"
                  )}
                  tabIndex={0}
                  aria-label={`Message from ${sender}: ${preview}`}
                >
                  {/* Avatar/Initials badge */}
                  <CardHeader className="p-0 min-w-0">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-200",
                      unread
                        ? "bg-[color:var(--color-primary)] text-white"
                        : "bg-[color:var(--color-border)] text-[color:var(--color-foreground)] group-hover:bg-[color:var(--color-hover)]"
                    )}>
                      {sender
                        .split(" ")
                        .map(n => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 min-w-0 p-0">
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "font-medium truncate",
                        unread && "text-[color:var(--color-primary)]"
                      )}>
                        {sender}
                      </span>
                      <span className="text-xs text-[color:var(--muted)]">{time}</span>
                    </div>
                    <p className={cn(
                      "text-sm truncate mt-0.5",
                      unread ? "font-semibold" : "font-normal text-[color:var(--color-foreground)]/80"
                    )}>
                      {preview}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Right side - Info Panel */}
        <aside className="w-1/3 bg-white/70 dark:bg-[color:var(--background)] rounded-xl border border-[color:var(--color-border)] p-6 shadow flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4">Details / Info Panel</h2>
            <p className="mb-3">
              Add user information, message details, or even widgets like recent contacts, message filters, stats, or actions here!
            </p>
            <ul className="text-sm text-[color:var(--color-foreground)]/70 list-disc pl-5 space-y-1 mb-3">
              <li>Sender info and quick actions</li>
              <li>Read/Unread statistics</li>
              <li>Favorite contacts</li>
              <li>Upcoming meetings or events</li>
            </ul>
          </div>
          <Button variant="outline" className="w-full mt-4">
            See All Details
          </Button>
        </aside>
      </div>
    </main>
  );
}
