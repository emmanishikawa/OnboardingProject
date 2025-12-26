import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Project from "@/models/Project";
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

    const project = await Project.findById(id);

    if (!project) {
    return NextResponse.json(
        { message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
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

    const updatedProject = await Project.findByIdAndUpdate(id, updatedRequest, 
        {
            new: true,
            runValidators: true,
        });

    if (!updatedProject) {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(updatedProject, { status: 200 });
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
    
    const deleted = await Project.findByIdAndDelete(id).exec();

    if (!deleted) {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Project deleted" }, { status: 200 });
}
