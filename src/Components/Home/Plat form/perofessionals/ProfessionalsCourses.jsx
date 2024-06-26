// import React from 'react'
import React from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SiSemanticweb } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiAlwaysdata } from "react-icons/si";
import { GrVirtualMachine } from "react-icons/gr";
import { AiFillDatabase } from "react-icons/ai";
import { DiDatabase } from "react-icons/di";
import { SiCyberdefenders } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineNetworkCheck } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { FaMixcloud } from "react-icons/fa";
import { SiNintendonetwork } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";
const ProfessionalsCourses = () => {
  const courseData = [
    {
      title: "Full Stack Web Development",
      description:
        "Master full-stack web development with this comprehensive bootcamp course on E-education by Colt Steele.",
      link: "/fullStack",
      icon: <SiSemanticweb />,
    },
    {
      title: "Mobile App Development",
      description:
        "Learn iOS app development from scratch with Dr. Angela Yu's course on E-education.",
      link: "",
      icon: <FaMobile />,
    },
    {
      title: "Python Programming",
      description:
        "Become proficient in Python programming with this comprehensive bootcamp course on E-education by Jose Portilla.",
      link: "",
      icon: <FaPython />,
    },
    {
      title: "Java Programming",
      description:
        "Master Java programming with Tim Buchalka's course on E-education.",
      link: "",
      icon: <FaJava />,
    },
    {
      title: "Data Science and Analytics",
      description:
        "Deep dive into data science and analytics with a specialization offered by Johns Hopkins University on E-education.",
      link: "link-to-the-course",
      icon: <SiAlwaysdata />,
    },
    {
      title: "Machine Learning",
      description:
        "Explore hands-on Python & R in data science with Kirill Eremenko's course on E-education.",
      link: "",
      icon: <GrVirtualMachine />,
    },
    {
      title: "Data Visualization",
      description:
        "Learn data visualization with Python and Matplotlib through the University of Michigan's course on E-education.",
      link: "link-to-the-course",
      icon: <AiFillDatabase />,
    },
    {
      title: "Big Data",
      description:
        "Dive deep into big data with a specialization offered by University of California, San Diego on E-education.",
      link: "link-to-the-course",
      icon: <DiDatabase />,
    },
    {
      title: "Cybersecurity",
      description:
        "Get introduced to the fundamentals of cybersecurity with a course by NYU on E-education.",
      link: "link-to-the-course",
      icon: <SiCyberdefenders />,
    },
    {
      title: "Ethical Hacking",
      description:
        "Learn ethical hacking with Ermin Kreponic's course on E-education.",
      link: "",
      icon: <GiGraduateCap />,
    },
    {
      title: "Network Security",
      description:
        "Master network security fundamentals with a course on Pluralsight.",
      link: "link-to-the-course",
      icon: <MdOutlineNetworkCheck />,
    },
    {
      title: "Certified Information Systems Security Professional (CISSP)",
      description:
        "Prepare for the CISSP certification with official training offered by ISC².",
      link: "link-to-the-course",
      icon: <GrShieldSecurity />,
    },
    {
      title: "Cloud Computing",
      description:
        "Learn cloud computing with various resources including courses on A Cloud Guru and E-education.",
      link: "link-to-the-course",
      icon: <FaMixcloud />,
    },
    {
      title: "IT and Networking",
      description:
        "Master IT and networking with various resources including courses on E-education and Cisco's official training.",
      link: "link-to-the-course",
      icon: <SiNintendonetwork />,
    },
    {
      title: "Database Management",
      description:
        "Master database management with various courses including SQL, NoSQL, and database administration.",
      link: "link-to-the-course",
      icon: <FaDatabase />,
    },
    {
      title: "UI/UX Design",
      description:
        "Master UI/UX design with various courses including Adobe XD, Figma, Sketch, and more.",
      link: "link-to-the-course",
      icon: <FaComputer />,
    },
    {
      title: "Software Engineering Practices",
      description:
        "Learn software engineering practices including agile, scrum, testing, and DevOps.",
      link: "link-to-the-course",
      icon: <SiPaloaltosoftware />,
    },
    // Add more courses here with respective icons
  ];
  return (
    <>
      <div>
        <div className="text-4xl font-bold text-center mb-8 text-gray-800 underline mt-48">
          Explore Your Courses
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full from-indigo-800 to-violet-400 py-12 text-slate-900  place-items-center">
        {courseData.map((course, index) => (
          <TiltCard
            key={index}
            title={course.title}
            description={course.description}
            icon={course.icon}
            link={course.link}
          />
        ))}
      </div>
    </>
  );
};
const TiltCard = ({ title, description, icon, link }) => {
  // Accept link prop
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link to={link}>
      {" "}
      {/* Wrap the card with Link */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[400px] w-72 gap-0 rounded-xl bg-[#0077b6]  mb-5 "
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
        >
          <div className="w-20 h-20 bg-[#0077b6]  rounded-full flex justify-center items-center ">
            <h1 className="text-white text-4xl">{icon}</h1>
          </div>
          <h3 className="py-2 font-extrabold font-xl text-gradient">{title}</h3>
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center px-4"
          >
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};
export default ProfessionalsCourses;
