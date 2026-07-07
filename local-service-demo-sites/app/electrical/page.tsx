import type { Metadata } from "next";
import { DemoPage } from "@/components/DemoPage";
import { demos } from "@/data/demos";

export const metadata: Metadata = {
  title: "BrightLine Electric Demo",
  description:
    "A lead-generating electrical website demo for panel upgrades, troubleshooting, safety inspections, and online booking.",
};

export default function ElectricalPage() {
  return <DemoPage demo={demos.electrical} />;
}
