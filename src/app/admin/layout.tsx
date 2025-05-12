import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/admin/NavBar";
import { SessionProvider } from "@/contexts/SessionContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="flex flex-col min-h-svh">
        <div className="h-[70px] shrink-0">
          <NavBar />
        </div>
        <SidebarProvider>
          <div className="flex flex-1 min-h-0">
            <AppSidebar />
            <main className="flex-1 min-h-0 flex flex-col">
              <SidebarTrigger />
              {children}
              <Toaster position="top-center" closeButton richColors />
            </main>
          </div>
        </SidebarProvider>
      </div>
    </SessionProvider>
  );
}
