import React from 'react';

//  Types 
interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  credits: number;
  isLab: boolean;
}

const courses: Course[] = [
  //  Theory Courses
  { id: 1,  code: 'CSE 101', title: 'Introduction to Computer Science',   description: 'Fundamentals of computing, algorithms, and problem solving.',                credits: 3, isLab: false },
  { id: 2,  code: 'CSE 102', title: 'Programming Fundamentals',          description: 'Basic programming concepts using C/C++.',                                     credits: 3, isLab: false },
  { id: 3,  code: 'CSE 103', title: 'Discrete Mathematics',              description: 'Logic, sets, relations, combinatorics, and graph theory.',                    credits: 3, isLab: false },
  { id: 4,  code: 'CSE 104', title: 'Digital Logic Design',              description: 'Boolean algebra, combinational & sequential circuits.',                         credits: 3, isLab: false },
  { id: 5,  code: 'CSE 105', title: 'Data Structures',                   description: 'Arrays, linked lists, stacks, queues, trees, and graphs.',                    credits: 3, isLab: false },
  { id: 6,  code: 'CSE 106', title: 'Object Oriented Programming',       description: 'Classes, inheritance, polymorphism, and design patterns.',                     credits: 3, isLab: false },
  { id: 7,  code: 'CSE 107', title: 'Computer Architecture',             description: 'CPU, memory, I/O, pipelining, and instruction set architecture.',             credits: 3, isLab: false },
  { id: 8,  code: 'CSE 108', title: 'Database Management Systems',       description: 'ER models, SQL, normalization, and transaction management.',                 credits: 3, isLab: false },
  { id: 9,  code: 'CSE 109', title: 'Operating Systems',                 description: 'Processes, threads, memory management, and file systems.',                    credits: 3, isLab: false },
  { id: 10, code: 'CSE 110', title: 'Computer Networks',                 description: 'OSI & TCP/IP models, routing, switching, and network security.',             credits: 3, isLab: false },
  { id: 11, code: 'CSE 201', title: 'Software Engineering',              description: 'SDLC, requirements, design, testing, and project management.',                credits: 3, isLab: false },
  { id: 12, code: 'CSE 202', title: 'Algorithm Design',                  description: 'Divide & conquer, dynamic programming, greedy algorithms, and complexity.',  credits: 3, isLab: false },
  { id: 13, code: 'CSE 203', title: 'Artificial Intelligence',           description: 'Search, knowledge representation, planning, and expert systems.',            credits: 3, isLab: false },
  { id: 14, code: 'CSE 204', title: 'Machine Learning',                  description: 'Supervised, unsupervised learning, neural networks, and evaluation.',       credits: 3, isLab: false },
  { id: 15, code: 'CSE 205', title: 'Computer Graphics',                 description: '2D/3D transformations, rendering, and OpenGL basics.',                         credits: 3, isLab: false },
  { id: 16, code: 'CSE 206', title: 'Theory of Computation',             description: 'Automata, formal languages, Turing machines, and computability.',            credits: 3, isLab: false },
  { id: 17, code: 'CSE 207', title: 'Compiler Design',                   description: 'Lexical analysis, parsing, syntax trees, and code generation.',              credits: 3, isLab: false },
  { id: 18, code: 'CSE 208', title: 'Internet of Things',               description: 'Sensor networks, IoT protocols, and embedded systems.',                       credits: 3, isLab: false },
  { id: 19, code: 'CSE 209', title: 'Big Data Analytics',                description: 'MapReduce, Hadoop, Spark, and data lakes.',                                   credits: 3, isLab: false },
  { id: 20, code: 'CSE 210', title: 'Cybersecurity Fundamentals',        description: 'Encryption, network security, ethical hacking, and risk management.',        credits: 3, isLab: false },
  { id: 21, code: 'CSE 301', title: 'Advanced Database Systems',         description: 'NoSQL, distributed databases, and data warehousing.',                         credits: 3, isLab: false },
  { id: 22, code: 'CSE 302', title: 'Microprocessors & Embedded Systems',description: 'ARM/AVR programming, interfacing, and real-time systems.',                    credits: 3, isLab: false },
  { id: 23, code: 'CSE 303', title: 'Parallel & Distributed Computing',  description: 'MPI, OpenMP, cloud computing, and cluster architectures.',                    credits: 3, isLab: false },
  { id: 24, code: 'CSE 304', title: 'Natural Language Processing',       description: 'Tokenization, sentiment analysis, and transformer models.',                   credits: 3, isLab: false },
  { id: 25, code: 'CSE 305', title: 'Robotics',                          description: 'Kinematics, dynamics, control, and robot programming.',                       credits: 3, isLab: false },
  { id: 26, code: 'CSE 306', title: 'Mobile Application Development',    description: 'Android/iOS development, UI/UX, and back‑end integration.',                  credits: 3, isLab: false },
  { id: 27, code: 'CSE 307', title: 'Cloud Computing',                   description: 'AWS, Azure, virtualization, containers, and serverless architectures.',     credits: 3, isLab: false },
  { id: 28, code: 'CSE 308', title: 'Blockchain Technology',             description: 'Distributed ledgers, smart contracts, and cryptocurrency.',                  credits: 3, isLab: false },
  { id: 29, code: 'CSE 309', title: 'Human‑Computer Interaction',        description: 'User research, prototyping, usability testing, and accessibility.',          credits: 3, isLab: false },
  { id: 30, code: 'CSE 310', title: 'Data Science Fundamentals',         description: 'Statistics, data wrangling, visualization, and basic ML pipelines.',         credits: 3, isLab: false },
  { id: 31, code: 'CSE 401', title: 'Final Year Project I',              description: 'Proposal, literature review, and initial prototype.',                         credits: 3, isLab: false },
  { id: 32, code: 'CSE 402', title: 'Final Year Project II',             description: 'Implementation, testing, and final defense.',                                 credits: 3, isLab: false },
  { id: 33, code: 'CSE 403', title: 'Computational Biology',             description: 'Bioinformatics algorithms, sequence alignment, and protein structure.',      credits: 3, isLab: false },
  { id: 34, code: 'CSE 404', title: 'Quantum Computing',                 description: 'Qubits, quantum gates, and algorithms (Shor, Grover).',                      credits: 3, isLab: false },
  { id: 35, code: 'CSE 405', title: 'Game Development',                  description: 'Game engines, physics, AI for games, and 3D modelling.',                      credits: 3, isLab: false },
  { id: 36, code: 'CSE 406', title: 'Augmented & Virtual Reality',       description: 'AR/VR hardware, rendering techniques, and interaction design.',             credits: 3, isLab: false },
  { id: 37, code: 'CSE 407', title: 'DevOps & Continuous Delivery',      description: 'CI/CD pipelines, Docker, Kubernetes, and monitoring.',                       credits: 3, isLab: false },
  { id: 38, code: 'CSE 408', title: 'Ethics & Professional Practices',   description: 'Code of ethics, intellectual property, and social responsibility.',          credits: 3, isLab: false },
  { id: 39, code: 'CSE 409', title: 'Deep Learning',                     description: 'CNNs, RNNs, GANs, and transfer learning with TensorFlow/PyTorch.',           credits: 3, isLab: false },
  { id: 40, code: 'CSE 410', title: 'Information Retrieval',             description: 'Indexing, ranking, web search, and recommendation systems.',                credits: 3, isLab: false },

  //  Lab Courses
  { id: 41, code: 'CSE 101L', title: 'Introduction to CS Lab',           description: 'Hands‑on exercises with basic algorithms and programming tools.',            credits: 1, isLab: true },
  { id: 42, code: 'CSE 102L', title: 'Programming Fundamentals Lab',     description: 'C/C++ coding assignments and debugging techniques.',                          credits: 1, isLab: true },
  { id: 43, code: 'CSE 104L', title: 'Digital Logic Design Lab',         description: 'Breadboard circuits, logic gates, and flip‑flops.',                           credits: 1, isLab: true },
  { id: 44, code: 'CSE 105L', title: 'Data Structures Lab',              description: 'Implementation of fundamental data structures in Python.',                     credits: 1, isLab: true },
  { id: 45, code: 'CSE 108L', title: 'Database Systems Lab',             description: 'SQL queries, normalization, and a mini project.',                             credits: 1, isLab: true },
  { id: 46, code: 'CSE 109L', title: 'Operating Systems Lab',            description: 'Shell scripting, process management, and system calls.',                      credits: 1, isLab: true },
  { id: 47, code: 'CSE 110L', title: 'Computer Networks Lab',            description: 'Socket programming, packet tracing, and network simulation.',                credits: 1, isLab: true },
  { id: 48, code: 'CSE 202L', title: 'Algorithm Design Lab',             description: 'Coding contests and implementation of complex algorithms.',                  credits: 1, isLab: true },
  { id: 49, code: 'CSE 203L', title: 'Artificial Intelligence Lab',      description: 'Prolog/Lisp exercises and simple AI agents.',                                credits: 1, isLab: true },
  { id: 50, code: 'CSE 204L', title: 'Machine Learning Lab',             description: 'Python notebooks for regression, classification, and clustering.',          credits: 1, isLab: true },
  { id: 51, code: 'CSE 205L', title: 'Computer Graphics Lab',            description: 'OpenGL programming, rendering scenes and transformations.',                  credits: 1, isLab: true },
  { id: 52, code: 'CSE 207L', title: 'Compiler Design Lab',              description: 'Build a lexer and parser for a small language.',                              credits: 1, isLab: true },
  { id: 53, code: 'CSE 302L', title: 'Microprocessors Lab',              description: 'Assembly programming and microcontroller interfacing.',                       credits: 1, isLab: true },
  { id: 54, code: 'CSE 304L', title: 'NLP Lab',                          description: 'Text preprocessing, sentiment analysis, and BERT fine‑tuning.',             credits: 1, isLab: true },
  { id: 55, code: 'CSE 306L', title: 'Mobile App Development Lab',       description: 'Build a complete Android/iOS app with back‑end integration.',                credits: 1, isLab: true },
  { id: 56, code: 'CSE 307L', title: 'Cloud Computing Lab',              description: 'Deploy apps on AWS, set up containers, and use Lambda.',                     credits: 1, isLab: true },
  { id: 57, code: 'CSE 310L', title: 'Data Science Lab',                 description: 'Real‑world datasets, cleaning, visualization, and storytelling.',           credits: 1, isLab: true },
];

// Components
const AllCourses: React.FC = () => {
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
  const theoryCount = courses.filter(c => !c.isLab).length;
  const labCount = courses.filter(c => c.isLab).length;

  return (
    <div className="min-h-screen px-4 py-10 md:px-8 bg-blue-900">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
          All Courses
        </h1>
        <p className="text-white text-lg">
          {theoryCount} theory courses · {labCount} lab courses ·{' '}
          <span className="text-white font-semibold">{totalCredits} Credits Total</span>
        </p>
      </div>

      {/* Courses Grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {courses.map((course) => (
  <div
    key={course.id}
    className="relative bg-blue-300 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 p-6 border border-gray-100 flex flex-col"
  >
    {/* Badge */}
    <span className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
      {course.credits} cr
    </span>

    {/* Course Code */}
    <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
      {course.code}
    </p>

    {/* Title */}
    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
      {course.title}
    </h3>

    {/* Description */}
    <p className="text-sm text-gray-700 mb-6 line-clamp-3 flex-grow">
      {course.description}
    </p>

    {/* Add Course Button */}
    <button className="mt-auto flex items-center justify-center gap-2 bg-rose-800 hover:bg-rose-300 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Add Course
    </button>
  </div>
))}
      </div>
    </div>
  );
};

export default AllCourses;