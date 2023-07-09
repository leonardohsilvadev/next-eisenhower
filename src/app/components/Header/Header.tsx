'use client'
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton, useClerk, useUser } from '@clerk/nextjs'
import { MagnifyingGlassIcon, SunIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Header() {
  const user = useUser()
  const { signOut } = useClerk()

  return (
    <header className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-10 md:flex items-center justify-between h-[10%]">
      <div className="flex flex-row items-center">
        {/* <SunIcon className='h-24 w-24 p-0 text-zinc-300/20' /> */}
        <h1 className="text-white text-3xl">Next Eisenhower</h1>
      </div>

      {user.isSignedIn && (
        <div>
          <div className="flex flex-row items-center">
            <h3 className="text-white">{`Olá ${user.user?.firstName}`}</h3>
            <Image
                className="rounded-full ml-2"
                src={user.user?.profileImageUrl!}
                alt={`@${user.user?.username}'s profile picture`}
                width={48}
                height={48}
              />
          </div>
          <h3 className="text-white 2xl cursor-pointer" onClick={() => signOut()}>Sair</h3>
          {/* <SignedIn>
          <UserButton />
          </SignedIn>
          <SignedOut>
          <SignInButton />
          </SignedOut> */}
        </div>
      )}
    </header>
  )
}