import { MoreVertical } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface KnowledgeCardProps {
  title: string
  description: string
  createdOn: string
}

export function KnowledgeCard({ title, description, createdOn }: KnowledgeCardProps) {
  return (
    <Card className="py-0 pt-2 bg-card border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col gap-2 h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 px-4 pb-2">
        <CardTitle className="text-base font-semibold text-foreground">{title}</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-1">
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
          {description}
        </p>
      </CardContent>
      <CardFooter className="mx-4 px-0 pt-2 pb-4 border-t border-border mt-auto ">
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <span>Created On:</span>
          <span className="font-medium">{createdOn}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
