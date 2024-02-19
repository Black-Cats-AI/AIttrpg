import { auth } from '@/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import ShopItemEditor from '../shop-item-editor'

export default async function ShopkeeperCreate() {
    const session = await auth()
  
    if (!session?.user) {
      redirect(`/sign-in?next=/shopkeeper/create`)
    }
    
    function ShopkeeperBaseImage() {
        return <Image src="/shopkeeper/base.webp" alt="Shopkeeper Base Image" fill priority></Image>
    }
    return <>
        <div className="h-1/2 relative">
            <ShopkeeperBaseImage></ShopkeeperBaseImage>
        </div>
        <h1>Shopkeeper</h1>
        <ShopItemEditor></ShopItemEditor>
    </>
}