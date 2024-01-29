"use client"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { ChevronRight, File, MoreHorizontal, Plus } from "lucide-react"

export const Documents = () => {

	const documents = useQuery(api.documents.getSidebar)

	if (!documents) {
		return (
			<p>No pages inside</p>
		)
	}

	return (
		<div >
			<p className="text-sm font-medium text-muted-foreground/80 last:block hidden">No pages inside</p>
			{documents?.map((document) => {
				return (
					<div
						role="button"
						className="group min-h-[27px] text-sm py-1 px-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium"
						key={document._id}
					>
						<div role="button">
							<ChevronRight
								className="hover:bg-neutral-300 h-4 w-4 text-muted-foreground/50 rounded-sm mr-1 dark:hover:bg-neutral-600 "
							/>
						</div>
						<File className="h-[18px] w-[18px] shrink-0 mr-2" />
						<span className="truncate">{document.title}</span>
						<div className="ml-auto flex gap-x-2 opacity-0 group-hover:opacity-100">
							<MoreHorizontal className="h-4 w-4 dark:hover:bg-neutral-600 hover:bg-neutral-300 rounded-sm" />
							<Plus className="h-4 w-4 dark:hover:bg-neutral-600 hover:bg-neutral-300 rounded-sm" />
						</div>
					</div>
				)
			})}
		</div>
	)
}