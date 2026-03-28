import * as React from "react"
import { Search, Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { KnowledgeCard } from "./knowledge-card"
import { CreateKBModal } from "./create-kb-modal"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const INITIAL_KNOWLEDGE_BASES = [
  {
    title: "Test",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
]

export function KnowledgeBase() {
  const [knowledgeBases, setKnowledgeBases] = React.useState(INITIAL_KNOWLEDGE_BASES)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  
  const handleAddKnowledgeBase = (data: { title: string; description: string }) => {
    const today = new Date()
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`
    
    setKnowledgeBases((prev) => [
      {
        ...data,
        createdOn: formattedDate,
      },
      ...prev,
    ])
  }

  // For demonstration, let's assume we can toggle empty state by search or just keep it filled
  const items = knowledgeBases.filter(kb => kb.title.toLowerCase().includes(searchQuery.toLowerCase()))
  const isEmpty = items.length === 0

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-xl font-bold text-foreground">Knowledge Base</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-card border-border h-10 text-xs shadow-sm focus-visible:ring-primary"
            />
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-4 gap-2 text-xs font-semibold shadow-sm transition-all w-full sm:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="w-5 h-5 flex-shrink-0" />
            <span className="whitespace-nowrap">Create New</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full h-full ">

      <div className="flex-1 bg-card rounded-xl border border-border shadow-sm p-4 overflow-auto">
        {isEmpty ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
            <div className="bg-muted p-8 rounded-full">
               <FileText className="w-16 h-16 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">No Knowledge Bases Found</h3>
              <p className="text-sm text-muted-foreground">Click on 'Create New' to get started</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((kb, index) => (
              <KnowledgeCard key={index} {...kb} />
            ))}
          </div>
        )}
      </div></div>

      {/* Footer / Pagination */}
      <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground font-medium">
        <span className="text-foreground font-bold text-xs">{items.length.toString().padStart(2, '0')} row(s)</span>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-foreground font-bold text-xs whitespace-nowrap">Rows per page</span>
            <Select defaultValue="10">
              <SelectTrigger className="h-8 w-20 border-border bg-card">
                <SelectValue placeholder="10" className="text-xs text-foreground" />
              </SelectTrigger>
              <SelectContent className="text-foreground font-medium text-xs">
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-4">
             <span className="text-foreground font-bold text-xs whitespace-nowrap">Page 1 of 1</span>
             <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8 border-border bg-card" disabled>
                  <ChevronsLeft className="h-3.5 w-3.5 text-muted-foreground" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 border-border bg-card" disabled>
                  <ChevronLeft className="h-3.5 w-3.5 text-muted-foreground" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 border-border bg-card" disabled>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Button> 
                <Button variant="outline" size="icon" className="h-8 w-8 border-border bg-card" disabled>
                  <ChevronsRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Button>
             </div>
          </div>
        </div>
      </div>

      <CreateKBModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        onAdd={handleAddKnowledgeBase}
      />
    </div>
  )
}
