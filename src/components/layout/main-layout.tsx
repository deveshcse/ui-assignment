import * as React from "react"
import { AppSidebar } from "./sidebar"
import { Header } from "./header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <div className="flex flex-1 pt-14">
          <AppSidebar className="bg-sidebar border-r" />
          <SidebarInset className="flex flex-col p-6 overflow-auto">
            {children}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
