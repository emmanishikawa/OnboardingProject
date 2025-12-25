import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { connectToDatabase } from "@/lib/mongoose";

export async function GET(request: Request) {
  await connectToDatabase();
  const projects = await Project.find();
  return NextResponse.json(projects, { status: 200 });
}
 
export async function POST(request: Request) {
  await connectToDatabase();
  const newProject = await request.json();
  const createdProject = await Project.create(newProject);
  return NextResponse.json(createdProject, { status: 201 });
}