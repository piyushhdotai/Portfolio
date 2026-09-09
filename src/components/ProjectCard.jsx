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

export function ProjectCard(props) {
  const techStack = props.techStack ?? []

  return (
    <Card className="relative mx-auto flex h-full w-full flex-col bg-nocturne-surface pt-0 text-nocturne-text ring-nocturne-accent/15 transition-transform duration-500 hover:-translate-y-1">
      <div className={`relative w-full shrink-0 overflow-hidden ${props.featured ? 'aspect-[16/9]' : 'aspect-[16/9] md:h-28 md:aspect-auto'}`}>
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/25" />
        <img
          src={props.image}
          alt={props.title ? `${props.title} preview` : "Project preview"}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover brightness-90 ${props.imagePosition || 'object-center'}`}
        />
      </div>
      <CardHeader>
        <CardAction>
          {techStack.map((tech) => (
             <Badge className="text-nocturne-muted" key={tech} variant="outline">{tech}</Badge>
          ))}
        </CardAction>
        <CardTitle className=" text-white">{props.title}</CardTitle>
        <CardDescription className="text-nocturne-muted">
          {props.description}
        </CardDescription>
      </CardHeader>


      <CardFooter className="mt-auto flex items-center justify-around gap-4">

        {props.liveLink && (
          <a className="flex-1" href={props.liveLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">Live Demo</Button>
          </a>
        )}

        {props.githubLink && (
          <a className="flex-1" href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">Github Link</Button>
          </a>
        )}

      </CardFooter>
    </Card>
  )
}

export default ProjectCard