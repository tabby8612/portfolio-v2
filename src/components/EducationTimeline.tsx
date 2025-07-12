import { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle } from "@/components/ui/timeline";
import { CheckIcon } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";

const items = [
  {
    id: 1,
    date: "Mar. 2023 ‑ Present",
    title: "Bachelor of Science in Computer Science",
    description: "ViRTUAL UNiVERSiTY OF PAKISTAN.",
    isActive: false,
  },
  {
    id: 2,
    date: "Mar. 2007 ‑ Sept. 2008",
    title: "Commerce Group",
    description: "NATiONAL COLLEGE",
    isActive: true,
  },
  {
    id: 3,
    date: "2005 ‑ 2006",
    title: "Science Group",
    description: "KARACHi PUBLiC SCHOOL",
    isActive: true,
  },
];

export default function EducationTimeline() {
  return (
    <Timeline defaultValue={4}>
      <BorderBeam
        borderWidth={3}
        size={100}
        className="from-transparent via-primary-color to-transparent"
        duration={3}
        transition={{
          duration: 10,
        }}
      />
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          isActive={item.isActive}
          className="group-data-[orientation=vertical]/timeline:ms-10">
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5 " />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle className="text-lg font-primary-font text-primary-color">{item.title}</TimelineTitle>
            <TimelineIndicator className="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7 bg-white">
              <CheckIcon
                className="group-not-data-completed/timeline-item:hidden  "
                size={16}
              />
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent className="dark:text-white">{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
