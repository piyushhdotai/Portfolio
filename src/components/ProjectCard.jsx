import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ProjectCard(props, idx) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-slate-900 border-slate-700 text-white flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={props.image}  
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-120"
      />
      <CardHeader>
        <CardAction>
          {props.techStack.map((tech) => (
             <Badge className="text-gray-300" key={tech} variant="outline">{tech}</Badge>
          ))}
        </CardAction>
        <CardTitle className=" text-white">{props.title}</CardTitle>
        <CardDescription className="text-gray-400">
          {props.description}
        </CardDescription>
      </CardHeader>


      <CardFooter className="flex items-center justify-around gap-4 h-full">

        <a href={props.liveLink}>
        <Button className="w-full">Live Demo</Button>
        </a>

        <a href={props.githubLink}>
        <Button className="w-full">Github Link</Button>
        </a>

      </CardFooter>
    </Card>
  )
}

export default ProjectCard