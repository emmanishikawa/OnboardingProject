import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Project from "@/models/Project";
import { connectToDatabase } from "@/lib/mongoose";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid id" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
  } else {
    await connectToDatabase();
    const projects = await Project.find();
    return NextResponse.json(projects, { status: 200 });
  }
}
 
export async function POST(request: Request) {
  await connectToDatabase();
  const newProject = await request.json();
  const createdProject = await Project.create(newProject);
  return NextResponse.json(createdProject, { status: 201 });
}
 
export async function PUT(request: Request) {
  await connectToDatabase();

  const updatedRequest = await request.json();
  const id = updatedRequest.id;
  const updatedData = id.update();
  const updatedProject = await Project.findByIdAndUpdate(id, updatedData, 
    {
      new: true,
      runValidators: true,
    }).exec();

  if (!updatedProject) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(updatedProject, { status: 200 });
}

export async function DELETE(request: Request) {
  connectToDatabase();

  const { id } = await request.json();
  const deleted = Project.findByIdAndDelete(id).exec();

  if (!deleted) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }
  
  return NextResponse.json({ message: "Project deleted" }, { status: 200 });
}