import React from 'react'

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}
  
interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30" />
      {events.map((event, index) => (
        <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="w-1/2" />
          <div className="w-1/2 flex justify-center">
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 shadow-lg max-w-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  {event.year}
                </div>
                <h3 className="text-xl font-bold">{event.title}</h3>
              </div>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

