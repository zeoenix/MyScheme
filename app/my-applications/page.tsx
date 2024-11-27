"use client"

import { useEffect, useState } from 'react'
import { useAuth } from '@/components/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { studentSchemes, Scheme } from '@/data/studentSchemes'

type Application = {
  userId: string
  schemeId: string
  appliedAt: string
}

export default function MyApplications() {
  const { user } = useAuth()
  const [applications, setApplications] = useState<Application[]>([])

  useEffect(() => {
    if (user) {
      const storedApplications = JSON.parse(localStorage.getItem('applications') || '[]')
      setApplications(storedApplications.filter((app: Application) => app.userId === user.id))
    }
  }, [user])

  const getScheme = (schemeId: string): Scheme | undefined => {
    return studentSchemes.find(scheme => scheme.id === schemeId)
  }

  if (!user) {
    return <div className="text-center mt-8">Please sign in to view your applications.</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">My Applications</h1>
      {applications.length === 0 ? (
        <Card className="bg-white/80 backdrop-blur-md">
          <CardContent className="pt-6">
            <p>You haven't applied to any schemes yet.</p>
          </CardContent>
        </Card>
      ) : (
        applications.map((application) => {
          const scheme = getScheme(application.schemeId)
          if (!scheme) return null
          return (
            <Card key={application.schemeId} className="bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle>{scheme.name}</CardTitle>
                <CardDescription>Applied on: {new Date(application.appliedAt).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{scheme.description}</p>
                <Button className="mt-4" variant="outline">View Details</Button>
              </CardContent>
            </Card>
          )
        })
      )}
    </div>
  )
}

