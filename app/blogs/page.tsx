'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MeshGradient } from "@/components/ui/mesh-gradient"
import { Countdown } from "@/components/ui/countdown"
import Header from '@/components/ui/header'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
     <Header/>
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center relative overflow-hidden">
      <MeshGradient className="absolute inset-0 opacity-50" />
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>
        
        <Countdown targetDate={new Date('2023-12-31T00:00:00')} />
        
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get Notified When We Launch</h2>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64"
            />
            <Button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-500 hover:from-primary/80 hover:to-purple-500/80 text-primary-foreground">
              Notify Me
            </Button>
          </form>
        </div>
        
        <div className="flex justify-center space-x-6 mt-8">
          {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
            <a key={social} href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
      </div>
  )
}
