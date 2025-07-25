import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {Menu} from "@/components/Menu";
 
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          </ThemeProvider>
        

      <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="flex flex-row items-start w-full max-w-screen">
        <SidebarTrigger className="mb-3 mr-3 ml-3 align-middle mt-2"/>
        <Menu/>
        </div>
        {children}
      </main>
    </SidebarProvider>
      </body>
    </html>
  );
}