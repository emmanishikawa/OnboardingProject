import { NextResponse } from "next/server";
import Experience from "@/models/Experience";
import { connectToDatabase } from "@/lib/mongoose";

export async function GET(request: Request) {
  await connectToDatabase();
  const experiences = await Experience.find();
  return NextResponse.json(experiences, { status: 200 });
}
 
export async function POST(request: Request) {
  await connectToDatabase();
  const newExperience = await request.json();
  const createdExperience = await Experience.create(newExperience);
  return NextResponse.json(createdExperience, { status: 201 });
}