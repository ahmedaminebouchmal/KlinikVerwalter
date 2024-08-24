export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  // Throwing an error to test Sentry's error monitoring
  throw new Error("Sentry Example API Route Error");

  // This line is unreachable and can be removed
  // return NextResponse.json({ data: "Testing Sentry Error..." });
}
