import { Code, Sparkles, Database, Workflow, Rocket, GraduationCap } from "lucide-react";

const ICONS = { Code, Sparkles, Database, Workflow, Rocket, GraduationCap };

export default function Icon({ name, size = 24, className = "" }) {
  const Cmp = ICONS[name];
  return Cmp ? <Cmp size={size} strokeWidth={1.6} className={className} aria-hidden /> : null;
}
