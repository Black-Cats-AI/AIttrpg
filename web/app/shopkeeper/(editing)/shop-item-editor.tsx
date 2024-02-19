'use client'
/*
    { 
        itemId: 12390124801
        name: 'Health Potion',
        description: 'Health position will heal you 1d4+5 health',
        quantity: 5,
        price: '5s'
    }

    Process: 
        1. Introduce the AI of ShopItemEditor
        2. Ask for item name and description
        3. Ask abount rarity or home many you think should be in the shop
        4. Ask about price
        5. Ask if they have image or need one generated
        6. Show final stat block with confirmation information
        7. Save to DB with image 
*/

import { Chat } from "@/components/chat";

export default function ShopItemEditor() {
    return <Chat></Chat>
}