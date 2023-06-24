'use client'

import { SignOutButton, useUser } from "@clerk/nextjs"

export default function Home() {
  const user = useUser();
  console.log(user)

  return (
    <div className="flex items-center justify-center">
      {user.isLoaded && user.isSignedIn && <h1>Hello, {user.user?.firstName}</h1>}

      <SignOutButton />
    </div>
  )
}
