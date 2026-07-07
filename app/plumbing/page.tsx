import type { Metadata } from "next";
import { DemoPage } from "@/components/DemoPage";
import { demos } from "@/data/demos";

export const metadata: Metadata = {
  title: "Precision Flow Plumbing Demo",
  description:
    "A lead-generating plumbing website demo for leak detection, drain cleaning, repairs, and booked service calls.",
};

export default function PlumbingPage() {
  return <DemoPage demo={demos.plumbing} />;
}
