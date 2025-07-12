import { DegreeHat, ThreeStarsSolid } from "@/assets/svgicons";
import { BorderBeam } from "./magicui/border-beam";
import EducationTimeline from "./EducationTimeline";
import CertificateTimeline from "./CertificatesTimeline";

export default function Qualification() {
  return (
    <section
      id="qualifications"
      className="w-11/12 mt-10 rounded-2xl px-15 mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 relative">
      <div
        id="education"
        className="dark:bg-primary-bg bg-white rounded-lg p-8 relative">
        <BorderBeam
          borderWidth={3}
          size={100}
          className="from-transparent via-primary-color to-transparent"
          duration={3}
          transition={{
            duration: 10,
          }}
        />
        <div className="flex gap-3 items-center my-4">
          <DegreeHat className="text-primary-color" />
          <h1 className="text-4xl font-primary-font font-medium">Education</h1>
        </div>
        <EducationTimeline />
      </div>
      <div
        id="certificate"
        className="dark:bg-primary-bg rounded-lg p-8 relative bg-white">
        <BorderBeam
          borderWidth={3}
          size={100}
          className="from-transparent via-primary-color to-transparent"
          duration={3}
          transition={{
            duration: 10,
          }}
        />
        <div className="flex gap-3 items-center my-4">
          <ThreeStarsSolid className="text-primary-color" />
          <h1 className="text-4xl font-primary-font font-medium">Certificates</h1>
        </div>
        <CertificateTimeline />
      </div>
    </section>
  );
}
