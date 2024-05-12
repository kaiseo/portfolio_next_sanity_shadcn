import { Project } from "@/types/Project";
import { Page } from "@/types/Pages";
import { Article } from "@/types/Article";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            summary,
            "image": image.asset->url,
            url,
            content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type =="project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    { slug }
  );
}

export async function getArticles(): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="article"]{
              _id,
              _createdAt,
              name,
              "slug": slug.current,
              "image": image.asset->url,
              url,
              content
          }`
  );
}

export async function getArticle(slug: string): Promise<Article> {
  return createClient(clientConfig).fetch(
    groq`*[_type =="article" && slug.current == $slug][0]{
              _id,
              _createdAt,
              name,
              "slug": slug.current,
              "image": image.asset->url,
              url,
              content
          }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type =="page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
    { slug }
  );
}
