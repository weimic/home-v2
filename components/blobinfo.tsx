import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function BlobTab() {
    return (
        <div className="mt-50">
            <Tabs defaultValue="authors">
        <TabsList>
          <TabsTrigger value="authors">Authors</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="authors">
          <Card>
            <CardHeader>
              <CardTitle>Authors</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              Alexander Song
            </CardContent>
            <CardFooter>
              
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
              <CardDescription>
                Fun game.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Languages & Libraries</Label>
                Java, Swing
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">File Size</Label>
                181 MB
              </div>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
        </div>
    );
    
}