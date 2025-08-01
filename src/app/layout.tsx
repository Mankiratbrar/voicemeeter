import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {Search} from "@/components/Search"
import { NavMenu } from "@/components/NavMenu";
import { HoverIcon } from "@/components/HoverIcon";
import { useTheme } from "next-themes"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
     <body className="bg-primary">
        <ThemeProvider>
          <SidebarProvider>
            <div className="flex min  -h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] min-w-screen">
              {/* Sidebar */}
              <AppSidebar />
              
              {/* Main Content Wrapper */}
              <main className="flex flex-col flex-1 min-h-screen">
                {/* Top nav bar */}
                <header className="flex items-center justify-between border-b border-[color:var(--color-border)] px-6 py-3 bg-[color:var(--color-background)] -mt-3">

                  <div className="flex items-center gap-2">
                    <SidebarTrigger className="mt-2"/>
                    <HoverIcon />

                  </div>
                  <Search />
                  <NavMenu />
                </header>
                {/* Page content */}
                <div className="flex-1 overflow-auto p-6">{children}</div>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>

    </html>
  );
}