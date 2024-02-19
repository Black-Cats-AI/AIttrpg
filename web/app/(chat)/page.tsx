import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { redirect } from 'next/navigation'

export default function IndexPage() {
  const id = nanoid()
  redirect('/shopkeeper/create')
  return <Chat id={id} />
}