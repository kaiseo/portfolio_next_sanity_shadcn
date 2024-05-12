import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/default/Logo_background.png";

type Props = {
  params: { project: string };
};

export default async function Projects({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  // Null checks and fallback values
  const projectName = project?.name || "Project Not Found";
  const projectUrl = project?.url || "#"; // Link to an appropriate fallback page
  const projectSummary = project?.summary || "No summary available";
  const projectContent = project?.content || []; // Empty array for PortableText
  const projectImage = project?.image || Logo; // Default image

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {projectName}
        </h1>
        {/* Conditional rendering for the "View Project" button */}
        {projectUrl && (
          <Link
            href={projectUrl}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
          >
            View Project
          </Link>
        )}
      </header>

      <h2>{projectSummary}</h2>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={projectContent} />
      </div>

      <Image
        src={projectImage}
        alt={projectName}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
