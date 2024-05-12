import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "kfi3mkrj",
    dataset: "production",
    title: "Kai The Dev: Full Stack Web Developer",
    apiVersion: "2024-02-03",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas }
});

export default config;