import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waiting List",
};

export default function WaitlistPage() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-20 md:py-28">
      <div className="max-w-[540px] mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
          Join the Waiting List
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-10">
          Be the first to know when Raddivus launches. Enter your email below
          and we&apos;ll notify you as soon as we&apos;re live.
        </p>

        {/* Add your email form here */}
      </div>
    </section>
  );
}
