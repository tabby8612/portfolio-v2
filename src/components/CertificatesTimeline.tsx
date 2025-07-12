import { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle } from "@/components/ui/timeline";
import { CheckIcon } from "lucide-react";

const items = [
  {
    id: 1,
    date: "2022",
    title: "Javascript",
    description: "Jonas Schmedtmann, Udemy",
    isActive: true,
  },
  {
    id: 2,
    date: "2024",
    title: "React",
    description: "Academind by Maximilian Schwarzuller",
    isActive: true,
  },
  {
    id: 3,
    date: "2025",
    title: "Laravel",
    description: "Coding Faculty Solutions",
    isActive: true,
  },
  {
    id: 4,
    date: "2025",
    title: "Typescript",
    description: "Academind by Maximilian Schwarzuller",
    isActive: true,
  },
];

export default function CertificateTimeline() {
  return (
    <Timeline defaultValue={4}>
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
      <p className="text-center text-white/50">And More...</p>
    </Timeline>
  );
}
