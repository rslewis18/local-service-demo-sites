import type { Metadata } from "next";
import { DemoPage } from "@/components/DemoPage";
import { demos } from "@/data/demos";

export const metadata: Metadata = {
  title: "Elite Comfort HVAC Demo",
  description:
    "A lead-generating HVAC website demo for emergency AC repair, furnace service, and online booking.",
};

export default function HvacPage() {
  return <DemoPage demo={demos.hvac} />;
}
