import { Search, Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-secondary text-secondary-foreground flex items-center px-2 z-50">
      <div className="flex items-center gap-2 mr-2 md:hidden">
        <SidebarTrigger className="text-secondary-foreground hover:bg-white/10" />
      </div>
      <div className="flex items-center gap-4 w-auto sm:w-1/4">
        {/* Logo and Workspace box */}
        <div className="flex items-center gap-2 bg-secondary hover:bg-white/5 rounded px-2 py-1">
          <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
             <div className="w-3 h-3 border-2 border-primary-foreground rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-sm">Worcspace</span>
        </div>
        
        {/* Workspace Switcher */}
        <Button variant="ghost" className="rounded-full text-secondary-foreground hover:bg-white/10 hover:text-white h-8 px-2 gap-1 text-xs font-normal border border-white/20">
          Worcspace 1
          <ChevronDown className="w-3 h-3 opacity-50" />
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-auto px-4 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            className="bg-accent border-none text-foreground placeholder:text-muted-foreground h-8 pl-10 pr-10 focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="Search..."
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border border-border rounded px-1.5 py-0.5 pointer-events-none">
             <span className="text-[10px] text-muted-foreground font-mono italic">⌘</span>
             <span className="text-[10px] text-muted-foreground font-mono">K</span>
          </div>
        </div>
      </div>

      {/* User Area */}
      <div className="flex items-center gap-4 w-1/4 justify-end">
        <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent h-8 w-8 relative">
          <Bell className="size-5 text-muted-foreground" />
           {/* Notification dot if needed? */}
        </Button>
        <div className="flex items-center gap-2">
           <Avatar className="h-8 w-8 bg-primary border-none">
             <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">GK</AvatarFallback>
           </Avatar>
        </div>
      </div>
    </header>
  )
}
