"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Home, Search, FileText, User, HelpCircle, Contact, Menu } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { useAuth } from '@/components/AuthContext'

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Find Schemes', href: '/find-schemes' },
  { icon: FileText, label: 'My Applications', href: '/my-applications' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: HelpCircle, label: 'Help & Support', href: '/support' },
  { icon: Contact, label: 'About', href: '/About' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  return (
    <>
      <Button
        variant="outline"
        className="fixed top-4 left-4 md:hidden z-50 bg-white/80 backdrop-blur-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4" />
      </Button>
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-40`}>
        <div className="flex flex-col h-full p-4 w-64 bg-white/80 backdrop-blur-md">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">MyScheme</h1>
            <ModeToggle />
          </div>
          <nav className="space-y-2 flex-1">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            {user ? (
              <Button variant="outline" className="w-full" onClick={logout}>Log Out</Button>
            ) : (
              <Link href="/signin">
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

