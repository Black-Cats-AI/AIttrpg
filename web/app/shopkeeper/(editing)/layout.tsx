import { ShopItemEditorProviders } from "./shopkeeper-editor-providers"
import { SidebarShopkeeper } from "./sidebar-shopkeeper"


interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (<ShopItemEditorProviders>
    <SidebarShopkeeper />
    <div className="group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
      {children}
    </div>
  </ShopItemEditorProviders>)
}