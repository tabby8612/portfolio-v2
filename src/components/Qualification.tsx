import { DegreeHat, ThreeStarsSolid } from "@/assets/svgicons";
import { BorderBeam } from "./magicui/border-beam";
import EducationTimeline from "./EducationTimeline";
import CertificateTimeline from "./CertificatesTimeline";

export default function Qualification() {
  return (
    <section
      id="qualifications"
      className="min-h-[650px] w-10/12 mx-auto mt-7 rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 relative">
      <BorderBeam
        borderWidth={3}
        size={100}
        className="from-transparent via-primary-color to-transparent"
        duration={3}
        transition={{
          duration: 10,
        }}
      />
      <div
        id="education"
        className="dark:bg-primary-bg rounded-lg p-8 ">
        <div className="flex gap-3 items-center my-4">
          <DegreeHat className="text-primary-color" />
          <h1 className="text-4xl font-primary-font font-medium">Education</h1>
        </div>
        <EducationTimeline />
      </div>
      <div
        id="certificate"
        className="dark:bg-primary-bg rounded-lg p-8 ">
        <div className="flex gap-3 items-center my-4">
          <ThreeStarsSolid className="text-primary-color" />
          <h1 className="text-4xl font-primary-font font-medium">Certificates</h1>
        </div>
        <CertificateTimeline />
      </div>
    </section>
  );
}
