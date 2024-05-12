import Link from "next/link";

import { getProjects } from "@/sanity/sanity-utils";

import { CardWithForm } from "@/components/project-card";
import { Button } from "@/components/ui/button";

const Blog = async () => {
  const projects = await getProjects();

  return (
    <section className="flex flex-col gap-6 container mx-auto p-8">
      <div className="flex justify-between mt-24">
        <h2 className="font-bold text-gray-700 text-3xl">My Blog</h2>
        <Button asChild>
          <Link href="/blog">View All </Link>
        </Button>
      </div>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-2 hover:border-blue-500 transition"
          >
            <CardWithForm {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
