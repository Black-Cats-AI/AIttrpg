import * as React from 'react'

import { SidebarList } from '@/components/sidebar-list'
import CreateItemButton from './create-item-button'

interface ShopItemsProps {
  userId?: string
}

export async function ShopItems({ userId }: ShopItemsProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-2 my-4">
        <CreateItemButton></CreateItemButton>
      </div>
      <React.Suspense
        fallback={
          <div className="flex flex-col flex-1 px-4 space-y-4 overflow-auto">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-6 rounded-md shrink-0 animate-pulse bg-zinc-200 dark:bg-zinc-800"
              />
            ))}
          </div>
        }
      >
        <SidebarList userId={userId} />
      </React.Suspense>
    </div>
  )
}