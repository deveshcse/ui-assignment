import { useState } from "react"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  
} from "@/components/ui/select"

interface CreateKBModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAdd: (data: { title: string; description: string }) => void
}

export function CreateKBModal({ open, onOpenChange, onAdd }: CreateKBModalProps) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleCreate = () => {
    if (!name.trim()) return
    onAdd({ title: name, description })
    setName("")
    setDescription("")
    onOpenChange(false)
  }
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        showCloseButton={false}
        className="data-[side=right]:sm:max-w-xl flex flex-col p-0 rounded-l-xl"
      >
        <SheetClose asChild className="absolute right-4 top-4 z-10">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:bg-muted border-none focus-visible:ring-0 focus-visible:outline-none">
            <XIcon className="size-5" />
          </Button>
        </SheetClose>
        <SheetHeader className="p-6 pb-2 border-b border-border">
          <SheetTitle className="text-xl font-bold text-foreground">Create New Knowledge Base</SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Best for quick answers from documents, websites and text files.
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-semibold gap-0">
              Name (Cannot be edited later)<span className="text-destructive">*</span>
            </Label>
            <Input 
              id="name" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 border-border bg-card focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-xs font-semibold">
              Description
            </Label>
            <textarea 
              id="description" 
              placeholder="Description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex min-h-[80px] w-full rounded-md border border-border bg-card px-3 py-2 text-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-2 ">
            <Label className="text-xs font-semibold gap-0">
              Vector Store<span className="text-destructive">*</span>
            </Label>
            <Select defaultValue="qdrant" >
              <SelectTrigger className="w-full h-10 border-border bg-card">
                <SelectValue placeholder="Select vector store" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectItem value="qdrant">Qdrant</SelectItem>
                <SelectItem value="pinecone">Pinecone</SelectItem>
                <SelectItem value="weaviate">Weaviate</SelectItem>
              </SelectContent>
            </Select>
          </div>
 
          <div className="space-y-2">
            <Label className="text-xs font-semibold gap-0">
              LLM Embedding Model<span className="text-destructive">*</span>
            </Label>
            <Select defaultValue="text-embedding-ada-002">
              <SelectTrigger className="w-full h-10 border-border bg-card">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text-embedding-ada-002">text-embedding-ada-002</SelectItem>
                <SelectItem value="text-embedding-3-small">text-embedding-3-small</SelectItem>
                <SelectItem value="text-embedding-3-large">text-embedding-3-large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <SheetFooter className="p-6 mt-auto">
          <Button 
            className="w-full sm:w-auto ml-auto bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-8"
            onClick={handleCreate}
          >
            Create
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
