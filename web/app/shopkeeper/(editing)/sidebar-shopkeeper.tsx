import { Sidebar } from '@/components/sidebar'

import { auth } from '@/auth'
import { ShopItems } from './shop-items'

export async function SidebarShopkeeper() {
  const session = await auth()

  if (!session?.user?.id) {
    return null
  }

  return (
    <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      {/* @ts-ignore */}
      <ShopItems></ShopItems>
    </Sidebar>
  )
}