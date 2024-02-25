import React from "react"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

  const pages: number[] = [1, 2, 3, 4, 5];
  
  export function PaginationDemo() {
    const [selected, setSelected] = React.useState<number>(pages[0])
    return (
      <Pagination>
        <PaginationContent>
            <PaginationItem className="cursor-pointer">
                <PaginationPrevious onClick={() => setSelected(selected - 1)} />
            </PaginationItem>
            {pages.map((index) => (
                <PaginationItem className="cursor-pointer">
                    <PaginationLink 
                        isActive={selected === index} 
                        onClick={() => setSelected(index)}             
                    >
                        {index}
                    </PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem className="cursor-pointer">
                <PaginationNext onClick={() => setSelected(selected + 1)} />
            </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  