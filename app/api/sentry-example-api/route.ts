import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  // This line will throw an error and stop execution
  throw new Error("Sentry Example API Route Error");

  // This line is unreachable and will never be executed
  // To fix the issue, you should remove or comment out unreachable code
  // return NextResponse.json({ data: "Testing Sentry Error..." });
}
