import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";
import { CardWithForm } from "@/components/project-card";

export default async function BlogPage() {
  const projects = await getProjects();

  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project._id}
            className="border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-2 hover:border-blue-500 transition"
          >
            <Link href={`/projects/${project.slug}`}>
              <CardWithForm {...project} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
