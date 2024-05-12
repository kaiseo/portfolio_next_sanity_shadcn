import Image from "next/image";

import { Project } from "@/types/Project";
import { Article } from "@/types/Article";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function hasSummary(item: Project | Article): item is Project {
  return (item as Project).summary !== undefined;
}

export function CardWithForm(item: Project | Article) {
  const { name, image } = item;
  const summary = hasSummary(item) ? item.summary : undefined;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent>
        {image && (
          <Image
            src={image}
            alt={name}
            width={750}
            height={300}
            className="object-cover rounded-lg border border-gray-500"
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button size="lg">See more</Button>
      </CardFooter>
    </Card>
  );
}
