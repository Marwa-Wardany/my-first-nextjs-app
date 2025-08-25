import Image from "next/image";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  img: string;
  socials: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
};

const team: TeamMember[] = [
  {
    name: "عمر عادل",
    role: "Front-End",
    description:
      "متميز متخصص في بناء واجهات مستخدم تفاعلية وسلسة باستخدام أحدث التقنيات. ملتزم بتقديم تجربة مستخدم مميزة وتصاميم متجاوبة تلبي تطلعات العملاء.",
    img: "/team.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "عبدالله",
    role: "Mobile App",
    description:
      "شغوف بابتكار حلول برمجية فعالة وذات جودة عالية، يسعى دائماً لتطوير تجارب المستخدم وتحويل الأفكار إلى تطبيقات عملية تلبي احتياجات العملاء.",
    img: "/team.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "الاء النشّة",
    role: "Design UX-UI",
    description:
      "مبدعة تركز على خلق تجارب مستخدم سلسة وجذابة، تجمع بين الفن والتقنية لتحويل الأفكار إلى تصاميم واقعية تلبي احتياجات المستخدم وتعزز من تفاعلهم مع المنتجات الرقمية.",
    img: "/team.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "عمر عادل",
    role: "Front-End",
    description:
      "متميز متخصص في بناء واجهات مستخدم تفاعلية وسلسة باستخدام أحدث التقنيات. ملتزم بتقديم تجربة مستخدم مميزة وتصاميم متجاوبة تلبي تطلعات العملاء.",
    img: "/team.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
  },
   {
    name: "عبدالله",
    role: "Mobile App",
    description:
      "شغوف بابتكار حلول برمجية فعالة وذات جودة عالية، يسعى دائماً لتطوير تجارب المستخدم وتحويل الأفكار إلى تطبيقات عملية تلبي احتياجات العملاء.",
    img: "/team.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
  },
    {
    name: "الاء النشّة",
    role: "Design UX-UI",
    description:
      "مبدعة تركز على خلق تجارب مستخدم سلسة وجذابة، تجمع بين الفن والتقنية لتحويل الأفكار إلى تصاميم واقعية تلبي احتياجات المستخدم وتعزز من تفاعلهم مع المنتجات الرقمية.",
    img: "/team.png",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
  },
];

export const TeamPage = () => {
  return (
    <div className="container pt-5 text-center">
      <h2 className="fw-bold mb-5">فريق العمل</h2>
      <div className="row g-4 py-3">
        {team.map((member, idx) => (
          <div className="col-lg-4" key={idx}>
            <div className="card team-card border-0 shadow-lg rounded-4 p-3 text-white position-relative">
              <div className="d-flex justify-content-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-circle border-3 border-light position-absolute"
                  style={{ top: "-40px" }}
                />
              </div>
              <div className="card-body mt-5">
                <h4 className="fw-bold fs-5">{member.name}</h4>
                <p className="mb-2 text-info">
                  {member.role}
                </p>
                <p style={{ fontSize: "0.9rem" }}>
                  {member.description}
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <a href={member.socials.linkedin} target="_blank">
                      <FaLinkedin size={18} className="text-white" />
                    </a>
                    <a href={member.socials.facebook} target="_blank">
                      <FaFacebook size={18} className="text-white" />
                    </a>   
                    <a href={member.socials.twitter} target="_blank">
                      <FaTwitter size={18} className="text-white" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default  TeamPage;