"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Briefcase, LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-900">JobBoard</span>
          </Link>

          <nav className="flex items-center space-x-4">
            <Link href="/">
              <Button variant={pathname === "/" ? "default" : "ghost"}>Jobs</Button>
            </Link>
            {user ? (
              <>
                {user.role === "admin" && (
                  <Link href="/admin">
                    <Button variant={pathname === "/admin" ? "default" : "ghost"}>
                      Admin
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" onClick={logout} className="space-x-2">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button variant={pathname === "/login" ? "default" : "ghost"}>
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}