import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

export default function CategoryLoading() {
  return (
    <div className="flex flex-col gap-8 p-5 lg:container lg:mx-auto">
      <Badge variant="outline" className="border-0">
        <Skeleton className="flex h-[40px] w-[100px] rounded-full bg-accent" />
      </Badge>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
        {[...Array(6)].map((x, i) => (
          <Skeleton
            className="flex h-[200px] w-full rounded-tl-lg rounded-tr-lg bg-accent"
            key={i}
          />
        ))}
      </div>
    </div>
  )
}