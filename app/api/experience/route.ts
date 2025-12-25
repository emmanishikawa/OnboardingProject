import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Experience from "@/models/Experience";
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
    const experience = await Experience.findById(id);

    if (!experience) {
      return NextResponse.json(
        { message: "Experience not found" }, { status: 404 });
    }

    return NextResponse.json(experience, { status: 200 });
  } else {
    await connectToDatabase();
    const experiences = await Experience.find();
    return NextResponse.json(experiences, { status: 200 });
  }
}
 
export async function POST(request: Request) {
  await connectToDatabase();
  const newExperience = await request.json();
  const createdExperience = await Experience.create(newExperience);
  return NextResponse.json(createdExperience, { status: 201 });
}
 
export async function PUT(request: Request) {
  await connectToDatabase();

  const updatedRequest = await request.json();
  const id = updatedRequest.id;
  const updatedData = id.update();
  const updatedExperience = await Experience.findByIdAndUpdate(id, updatedData, 
    {
      new: true,
      runValidators: true,
    }).exec();

  if (!updatedExperience) {
    return NextResponse.json({ message: "Experience not found" }, { status: 404 });
  }

  return NextResponse.json(updatedExperience, { status: 200 });
}

export async function DELETE(request: Request) {
  connectToDatabase();

  const { id } = await request.json();
  const deleted = Experience.findByIdAndDelete(id).exec();

  if (!deleted) {
    return NextResponse.json({ message: "Experience not found" }, { status: 404 });
  }
  
  return NextResponse.json({ message: "Experience deleted" }, { status: 200 });
}