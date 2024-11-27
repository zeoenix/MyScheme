import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpSupport() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">Help & Support</h1>
      <Card className="bg-white/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Find answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I apply for a scheme?</AccordionTrigger>
              <AccordionContent>
                To apply for a scheme, navigate to the "Find Schemes" page, select the scheme you're interested in, and click the "Apply" button. Follow the on-screen instructions to complete your application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I check the status of my application?</AccordionTrigger>
              <AccordionContent>
                You can check the status of your application by logging into your account and visiting the "My Applications" page. There, you'll see a list of all your applications and their current status.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What documents do I need to apply for a scheme?</AccordionTrigger>
              <AccordionContent>
                The required documents vary depending on the scheme. Generally, you'll need proof of identity, address proof, and income certificate. Specific document requirements are listed on each scheme's details page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      <Card className="bg-white/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Get in touch with our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                className="w-full p-2 border rounded"
                rows={4}
              ></textarea>
            </div>
            <Button>Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

