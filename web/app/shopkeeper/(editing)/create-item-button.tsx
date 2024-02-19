'use client'

import { Button } from "@/components/ui/button"
import { useShopItemEditor } from "./use-shop-item-editor"
import { IconPlus } from "@/components/ui/icons";

export default function CreateItemButton() {
    const { openShopItemEditor } = useShopItemEditor();
    return <Button
      variant="outline"
      onClick={() => openShopItemEditor()}
      className="bg-background"
    >
      <IconPlus className="-translate-x-2 stroke-2" />
      New Item
    </Button>
}