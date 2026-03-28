import * as React from "react"
import {
  Bot,
  Cpu,
  Library,
  Share2,
  Monitor,
  Layers,
  Zap,
  PlayCircle,
  History,
  Lock,
  BookOpen,
  Key,
  Building,
  Link,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "MY PROJECTS",
      items: [
        { title: "Agents", icon: Bot },
        { title: "AI Models", icon: Cpu },
        { title: "Library", icon: Library },
      ],
    },
    {
      title: "ORCHESTRATOR",
      items: [
        { title: "Published", icon: Share2 },
        { title: "Machines", icon: Monitor },
        { title: "Queues", icon: Layers },
        { title: "Triggers", icon: Zap },
        { title: "Jobs", icon: PlayCircle },
        { title: "Executions", icon: History },
        { title: "Vault", icon: Lock },
        { title: "Knowledge Base", icon: BookOpen, isActive: true },
        { title: "Key Store", icon: Key },
      ],
    },
    {
      title: "ADMIN",
      items: [
        { title: "Tenant", icon: Building },
        { title: "Integrations", icon: Link },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="hidden items-center px-6 md:flex md:h-16">
        {/* Logo will be in the header or shared space, but screen 1 shows "Worcspace" in header */}
        {/* Actually Screen 1 shows Logo + Worcspace in a top header that spans across the sidebar area? */}
        {/* No, the header spans the whole top, and the sidebar is below it. */}
        {/* Wait, looking at Screen 1, the top bar is dark navy and has the logo. */}
        {/* The sidebar starts below the logo area. */}
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="mb-2 text-[10px] font-bold tracking-wider text-muted-foreground">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      className={cn(
                        "relative h-auto p-0",
                        item.isActive
                          ? "bg-violet-100! text-blue-500!"
                          : "text-gray-800 hover:bg-muted"
                      )}
                    >
                      <a
                        href="#"
                        className="relative flex w-full items-center gap-4 px-6 py-3"
                      >
                        <item.icon
                          className={cn(
                            "h-4 w-4",
                            item.isActive
                              ? "text-blue-500"
                              : "text-gray-800"
                          )}
                        />

                        <span
                          className={cn(
                            item.isActive ? "font-semibold text-blue-500" : ""
                          )}
                        >
                          {item.title}
                        </span>

                        {item.isActive && (
                          <div className="absolute top-1/2 left-0 h-5 w-[2px] -translate-y-1/2  bg-blue-900" />
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
