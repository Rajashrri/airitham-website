import { useState, useRef, useEffect } from "react";

/* -------------------- TECH DATA -------------------- */

const techCircles = [
  {
    id: "technologies",
    label: "Technologies",
    outerRing: [
      { icon: "Java", names: ["Java"] },
      { icon: "Python", names: ["Python"] },
      { icon: "JavaScript", names: ["JavaScript"] },
      { icon: "TypeScript", names: ["TypeScript"] },
      { icon: "C++", names: ["C++"] },
      { icon: "Go", names: ["Go"] },
      { icon: "Rust", names: ["Rust"] },
    ],
    innerRing: [
      { icon: "React", names: ["React"] },
      { icon: "Angular", names: ["Angular"] },
      { icon: "Vue", names: ["Vue"] },
      { icon: "Spring Boot", names: ["Spring Boot"] },
      { icon: "Node.js", names: ["Node.js"] },
      { icon: "Next.js", names: ["Next.js"] },
      { icon: ".NET", names: [".NET"] },
    ],
  },
  {
    id: "ai",
    label: "AI",
    outerRing: [
      { icon: "TensorFlow", names: ["TensorFlow"] },
      { icon: "PyTorch", names: ["PyTorch"] },
      { icon: "Keras", names: ["Keras"] },
      { icon: "Apache MXNet", names: ["Apache MXNet"] },
      { icon: "Python", names: ["Rasa", "CrewAI", "Ollama"] },
    ],
    innerRing: [
      { icon: "Scikit-learn", names: ["Scikit-learn"] },
      { icon: "OpenCV", names: ["OpenCV"] },
      { icon: "Hugging Face", names: ["Hugging Face"] },
      { icon: "Kubeflow", names: ["Kubeflow"] },
      { icon: "Python", names: ["NLTK", "SpaCy", "XGBoost", "MLflow"] },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    outerRing: [
      { icon: "AWS", names: ["AWS"] },
      { icon: "Microsoft Azure", names: ["Microsoft Azure"] },
      { icon: "Google Cloud", names: ["Google Cloud"] },
      { icon: "Kubernetes", names: ["Kubernetes"] },
      { icon: "Docker", names: ["Docker"] },
      { icon: "Terraform", names: ["Terraform"] },
    ],
    innerRing: [
      { icon: "PostgreSQL", names: ["PostgreSQL"] },
      { icon: "MySQL", names: ["MySQL"] },
      { icon: "MongoDB", names: ["MongoDB"] },
      { icon: "Redis", names: ["Redis"] },
      { icon: "Cassandra", names: ["Cassandra"] },
      { icon: "Elasticsearch", names: ["Elasticsearch"] },
    ],
  },
];

/* -------------------- ICON MAP -------------------- */

const techIcons = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "C++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  Go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  Rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  Vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  ".NET":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  TensorFlow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  PyTorch:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  Keras:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  "Apache MXNet":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  "Scikit-learn":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  OpenCV:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  "Hugging Face":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Kubeflow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  AWS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "Microsoft Azure":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Google Cloud":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  Kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Terraform:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Cassandra:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg",
  Elasticsearch:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
};

/* -------------------- DUAL RING -------------------- */

function DualRingTechnologyBall({ label, outerRing, innerRing, size = 310 }) {
  const [outerRotation, setOuterRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);
  const animationRef = useRef();
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const animate = (time) => {
      if (lastTimeRef.current) {
        const delta = time - lastTimeRef.current;
        setOuterRotation((prev) => (prev + delta * 0.015) % 360);
        setInnerRotation((prev) => (prev - delta * 0.012) % 360);
      }
      lastTimeRef.current = time;
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const renderIcons = (ring, radius, rotation) => (
    <div
      className="absolute"
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {ring.map((tech, index) => {
        const angle = (360 / ring.length) * index;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${-rotation}deg)`,
            }}
          >
            <div className="w-9 h-9 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-md hover:scale-110 transition duration-300">
              <img
                src={techIcons[tech.icon]}
                alt={tech.names.join(", ")}
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  const outerRadius = size / 2 - 30;
  const innerRadius = size / 2 - 70;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#015190] shadow-[0px_0px_1px_19px_#0151900d]" />
      <div className="absolute inset-6 rounded-full border-2 border-[#015190]" />

      <div className="absolute inset-12 rounded-full bg-white flex items-center justify-center shadow-inner">
        <span className="text-xs font-bold text-[#E13D1C] uppercase tracking-widest text-center">
          {label}
        </span>
      </div>

      {renderIcons(outerRing, outerRadius, outerRotation)}
      {renderIcons(innerRing, innerRadius, innerRotation)}
    </div>
  );
}

/* -------------------- MAIN -------------------- */

export default function Technologies() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="flex justify-center gap-20 flex-wrap">
        {techCircles.map((circle) => (
          <DualRingTechnologyBall
            key={circle.id}
            label={circle.label}
            outerRing={circle.outerRing}
            innerRing={circle.innerRing}
          />
        ))}
      </div>
    </section>
  );
}