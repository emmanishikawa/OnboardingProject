import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Experience from "@/models/Experience";
import { connectToDatabase } from "@/lib/mongoose";

export async function GET(request: Request, context: { params: { id: string } }) {
    await connectToDatabase();

    const { id } = await context.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
            { message: "Invalid id" },
            { status: 400 }
        );
    }

    const experience = await Experience.findById(id);

    if (!experience) {
    return NextResponse.json(
        { message: "Experience not found" }, { status: 404 });
    }

    return NextResponse.json(experience, { status: 200 });
}

export async function PUT(request: Request, context: { params: { id: string } }) {
    const { id } = await context.params;
    
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
            { message: "Invalid id" },
            { status: 400 }
        );
    }

    await connectToDatabase();

    const updatedRequest = await request.json();

    if (!updatedRequest || typeof updatedRequest !== "object") {
        return NextResponse.json(
            { message: "Invalid request" },
            { status: 400 }
        );
    }

    const updatedExperience = await Experience.findByIdAndUpdate(id, updatedRequest, 
        {
            new: true,
            runValidators: true,
        });

    if (!updatedExperience) {
        return NextResponse.json({ message: "Experience not found" }, { status: 404 });
    }

    return NextResponse.json(updatedExperience, { status: 200 });
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
    await connectToDatabase();

    const { id } = await context.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
            { message: "Invalid id" },
            { status: 400 }
        );
    }
    
    const deleted = await Experience.findByIdAndDelete(id).exec();

    if (!deleted) {
        return NextResponse.json({ message: "Experience not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Experience deleted" }, { status: 200 });
}
