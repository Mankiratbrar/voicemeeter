import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default async function Home() {
  return (
    <>
      {/* Main Content - stays centered, not shifted */}
      <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-background text-foreground pt-2">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-40 left-15 w-64 h-64 rounded-full opacity-25 blur-3xl animate-pulse bg-primary" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 blur-2xl animate-pulse bg-secondary" />
      </div>
      {/* Sidebar and Main Content as before, but... */}
      <section className="z-10 w-full max-w-6xl flex flex-col items-center text-center mb-12 p-4 bg-card text-card-foreground rounded-2xl shadow-2xl">
        <Avatar className="w-24 h-24 mb-5 shadow-lg bg-secondary">
          <AvatarImage />
          <AvatarFallback>Mankirat</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Welcome to Our Site
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Crafting <span className="text-primary font-semibold">next-generation</span> digital experiences for ambitious teams and creators.
        </p>
        <Button asChild size="lg" className="rounded-full px-8 py-4" variant="default">
          <a href="/about">Learn More</a>
        </Button>
      </section>
      <section className="z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen mt-6">
        {/* Card 1 */}
        <Card className="h-full bg-card text-card-foreground">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="rounded-full p-4 mb-3 bg-primary/10">
              <span className="text-3xl text-primary">⚡</span>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-2">Ultra Fast</h2>
            <p className="text-muted-foreground">Optimized for speed and responsiveness on all devices and platforms.</p>
          </CardContent>
        </Card>
        <Card className="h-full bg-card text-card-foreground">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full p-4 mb-3 bg-primary/10">
                <span className="text-3xl text-primary">🎨</span>
              </div>
              <h2 className="text-xl font-semibold text-primary mb-2">Beautiful Design</h2>
              <p className="text-muted-foreground">Modern interface with tailored branding and accessible style choices.</p>
            </CardContent>
          </Card>
        <Card className="h-full bg-card text-card-foreground">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full p-4 mb-3 bg-primary/10">
                <span className="text-3xl text-primary">🔒</span>
              </div>
              <h2 className="text-xl font-semibold text-primary mb-2">Secure & Reliable</h2>
              <p className="text-muted-foreground">Built with best practices for data privacy, accessibility, and scalability.</p>
            </CardContent>
          </Card>
          
        
      </section>
      {/* Call to Action */}
      <section className="z-10 mt-16 text-center bg-accent text-accent-foreground rounded-lg p-8">
        <h2 className="text-2xl font-bold text-primary mb-2">Ready to elevate your web presence?</h2>
        <p className="text-muted-foreground mb-4">
          Contact us for a free consultation or to start your next project.
        </p>
        <Button asChild>
          <a href="mailto:your@email.com">Get in Touch</a>
        </Button>
        <div>
          <span className="text-sm text-muted-foreground">Powered by Vercel</span>
        </div>
      </section>      
    </main>
    </>
  )
}