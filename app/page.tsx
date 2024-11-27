import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, GraduationCap } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { studentSchemes } from '@/data/studentSchemes'

export default function Home() {
  // Select a few schemes to display on the homepage
  const featuredSchemes = studentSchemes.slice(0, 3)

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Search for Scholarships</CardTitle>
          <CardDescription>Find scholarships that match your criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Input placeholder="Search..." />
            <Button>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6 bg-white/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle>International Scholarships</CardTitle>
          <CardDescription>Refine your search with specific filters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IN">India</SelectItem>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                  <SelectItem value="AS">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Select>
                <SelectTrigger id="amount">
                  <SelectValue placeholder="Select amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000000">Less than 1,000,000 INR</SelectItem>
                  <SelectItem value="5000000">Less than 5,000,000 INR</SelectItem>
                  <SelectItem value="0">Fully Funded </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="deadline">Deadline</Label>
              <Select>
                <SelectTrigger id="deadline">
                  <SelectValue placeholder="Select deadline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-12-31">Winter Intake (2024-12-31)</SelectItem>
                  <SelectItem value="2025-02-30">Automn Intake (2025-02-30)</SelectItem>
                  <SelectItem value="2025-09-31">Summer Intake (2025-09-31)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6 bg-white/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Featured Student Schemes</CardTitle>
          <CardDescription>Explore some of our popular educational opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredSchemes.map((scheme) => (
              <Card key={scheme.id} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">{scheme.name}</CardTitle>
                  <CardDescription>Age: {scheme.ageRange.min}-{scheme.ageRange.max} | Gender: {scheme.gender}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{scheme.description}</p>
                  <Link href={`/find-schemes?id=${scheme.id}`}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/find-schemes">
              <Button>
                <GraduationCap className="mr-2 h-4 w-4" /> View All Student Schemes
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

