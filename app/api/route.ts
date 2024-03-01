import { NextRequest, NextResponse } from "next/server";

const data = ["Name 1"];

export async function GET() {
  return NextResponse.json(data, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const postData = await request.json();
  data.push(postData);

  return NextResponse.json(postData, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
