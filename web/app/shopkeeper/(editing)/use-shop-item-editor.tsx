'use client'

import * as React from 'react'
import { logger } from '@/logger'

interface ShopItemEditorContext {
  isShopItemEditorOpen: boolean
  isLoading: boolean
  item: number | null
  openShopItemEditor: (itemId?: number) => void
  closeShopItemEditor: () => void
}

const ShopItemEditorContext = React.createContext<ShopItemEditorContext | undefined>(
  undefined
)

export function useShopItemEditor() {
  const context = React.useContext(ShopItemEditorContext)
  if (!context) {
    throw new Error('useShopItemEditor must be used within a ShopItemEditorProvider')
  }
  return context
}

interface ShopItemEditorProviderProps {
  children: React.ReactNode
}

export function ShopItemEditorProvider({ children }: ShopItemEditorProviderProps) {
  const [isShopItemEditorOpen, setShopItemEditorOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  const [item, setItem] = React.useState<number | null>(null)

  function openShopItemEditor(itemId?: number) {
    logger.info(`${itemId ? 'Editing' + itemId: 'Creating an new Item'}`)
    setLoading(true)
    setShopItemEditorOpen(true)
    itemId && setItem(itemId)
    setLoading(false)
  }

  function closeShopItemEditor() {
    setLoading(true)
    setShopItemEditorOpen(false)
    setItem(null)
    setLoading(false)
  }

  if (isLoading) {
    return null
  }

  return (
    <ShopItemEditorContext.Provider
      value={{ isShopItemEditorOpen, openShopItemEditor, closeShopItemEditor, isLoading, item }}
    >
      {children}
    </ShopItemEditorContext.Provider>
  )
}