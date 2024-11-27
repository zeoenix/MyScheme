"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { studentSchemes, indianStates, Scheme } from '@/data/studentSchemes'
import { Search } from 'lucide-react'
import { useAuth } from '@/components/AuthContext'
import { useRouter } from 'next/navigation'

const ITEMS_PER_PAGE = 9

export default function FindSchemes() {
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('All')
  const [state, setState] = useState('All States')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>(studentSchemes)
  const [currentPage, setCurrentPage] = useState(1)
  const [displayedSchemes, setDisplayedSchemes] = useState<Scheme[]>([])

  const { user } = useAuth()
  const router = useRouter()

  const handleFilter = () => {
    const filtered = studentSchemes.filter(scheme => {
      const ageNum = parseInt(age)
      const matchesAge = !age || (ageNum >= scheme.ageRange.min && ageNum <= scheme.ageRange.max)
      const matchesGender = gender === 'All' || scheme.gender === 'All' || scheme.gender === gender
      const matchesState = state === 'All States' || scheme.states.includes('All States') || scheme.states.includes(state)
      const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesAge && matchesGender && matchesState && matchesSearch
    })
    setFilteredSchemes(filtered)
    setCurrentPage(1)
  }

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    setDisplayedSchemes(filteredSchemes.slice(startIndex, endIndex))
  }, [filteredSchemes, currentPage])

  const totalPages = Math.ceil(filteredSchemes.length / ITEMS_PER_PAGE)

  const handleApply = (schemeId: string) => {
    if (!user) {
      router.push('/signin')
      return
    }
    
    // In a real app, you'd send this to a backend
    const applications = JSON.parse(localStorage.getItem('applications') || '[]')
    applications.push({ userId: user.id, schemeId, appliedAt: new Date().toISOString() })
    localStorage.setItem('applications', JSON.stringify(applications))
    alert('Application submitted successfully!')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">Find Schemes</h1>
      <Tabs defaultValue="student">
        <TabsList>
          <TabsTrigger value="student">Student Schemes</TabsTrigger>
          <TabsTrigger value="general">General Schemes</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <Card className="bg-white/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Filter Student Schemes</CardTitle>
              <CardDescription>Find schemes that match your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    min="5"
                    max="30"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All</SelectItem>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All States">All States</SelectItem>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      type="text"
                      className="pl-8"
                      placeholder="Search schemes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <Button className="mt-4" onClick={handleFilter}>Apply Filters</Button>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {displayedSchemes.map((scheme) => (
              <Card key={scheme.id} className="bg-white/80 backdrop-blur-md">
                <CardHeader>
                  <CardTitle>{scheme.name}</CardTitle>
                  <CardDescription>Age: {scheme.ageRange.min}-{scheme.ageRange.max} | Gender: {scheme.gender}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{scheme.description}</p>
                  <div className="mt-4 space-x-2">
                    <Button variant="outline">Learn More</Button>
                    <Button onClick={() => handleApply(scheme.id)}>Apply</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-6">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="self-center text-white">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="general">
          <Card className="bg-white/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle>General Schemes</CardTitle>
              <CardDescription>Explore schemes for all citizens</CardDescription>
            </CardHeader>
            <CardContent>
              <p>General schemes content will be added here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

