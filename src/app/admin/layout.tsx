import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { Toaster } from "@/components/ui/sonner";
import SearchBar from "@/components/admin/SearchBar";
import Profile from "@/components/admin/Profile";
import NavBar from "@/components/admin/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
