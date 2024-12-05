import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Separator } from "@/components/ui/separator";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <header className="px-4 py-2">
          <SidebarTrigger className="-ml-1" />
        </header>
        <Separator />
        <main className="px-4 py-2 min-h-[100vh]">
          {children}
        </main>
      </main>
    </SidebarProvider>
  )
}
