'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MeshGradient } from "@/components/ui/mesh-gradient"
import { Timeline } from "@/components/ui/timeline"
import { Marquee } from "@/components/ui/marquee"
import Header from '@/components/ui/header'

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
     <Header/>
    <div className="min-h-screen bg-background text-foreground">
      

      {/* Hero Section with Large Image */}
      <section className="relative h-[100vh] overflow-hidden"> 
        <Image
          src="/assets/about _hero.png" // Correct image path
          alt="E-CLUB members collaborating"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <MeshGradient className="absolute inset-0 opacity-30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            E-CLUB is dedicated to fostering entrepreneurship and innovation among students at PESU. We believe in the power of ideas and the potential of young minds to shape the future of business and technology.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">What We Do</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Organize workshops and seminars</li>
                  <li>Provide mentorship opportunities</li>
                  <li>Host startup competitions</li>
                  <li>Facilitate networking events</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Our Values</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Innovation and creativity</li>
                  <li>Collaboration and teamwork</li>
                  <li>Continuous learning</li>
                  <li>Ethical entrepreneurship</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-muted relative overflow-hidden">
        <MeshGradient className="absolute inset-0 opacity-30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Our Journey
          </h2>
          <Timeline
            events={[
              { year: 2018, title: "E-CLUB Founded", description: "A group of passionate students came together to create a hub for entrepreneurship." },
              { year: 2019, title: "First Startup Weekend", description: "Organized our inaugural 54-hour startup event, with over 100 participants." },
              { year: 2020, title: "Virtual Pivot", description: "Successfully transitioned all events and mentorship programs to virtual platforms." },
              { year: 2021, title: "Launch of Incubator Program", description: "Established a dedicated space and resources for student startups." },
              { year: 2022, title: "National Recognition", description: "Received award for 'Best College Entrepreneurship Club' at a national conference." },
              { year: 2023, title: "Global Partnerships", description: "Formed alliances with international entrepreneurship organizations and universities." },
            ]}
          />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <MeshGradient className="absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto relative z-7">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            TOP EVENTS HOSTED BY E CLUB
          </h2>
          <Marquee
            items={[
              { name: "Wolf of Wall Street", logo: "/Events_past/wow.png" },
              { name: "Brand Blitz", logo: "/Events_past/brand.png" },
              { name: "BID 2 Build", logo: "/Events_past/B2B.png" },
              { name: "E Summit 23", logo: "/Events_past/esummit.png" },
              { name: "She Summit", logo: "/Events_past/she.png" },
            ]}
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 px-4 bg-muted relative overflow-hidden">
        <MeshGradient className="absolute inset-0 opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in joining E-CLUB or have any questions? We&apos;d love to hear from you!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/80 hover:to-purple-500/80 text-primary-foreground">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
    </div>
  )
}
