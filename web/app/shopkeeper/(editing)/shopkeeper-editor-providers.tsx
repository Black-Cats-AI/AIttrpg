import * as React from 'react'
import { ShopItemEditorProvider } from './use-shop-item-editor'

export function ShopItemEditorProviders({ children }: React.PropsWithChildren) {
  return (
    <ShopItemEditorProvider>
      {children}
    </ShopItemEditorProvider>
  )
}