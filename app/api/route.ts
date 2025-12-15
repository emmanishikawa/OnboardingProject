import { connectToDatabase } from "@/lib/mongoose";

export async function GET() {
  await connectToDatabase();
  return new Response("MongoDB connected");
}
