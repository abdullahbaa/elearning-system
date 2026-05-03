import React, { useState, useMemo } from 'react';
import { FaPlay, FaSearch, FaFilm } from 'react-icons/fa';
 
interface CourseVideo {
  id: number;
  code: string;
  title: string;
  description: string;
  videoUrl: string;          
  thumbnail: string;         
}


const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=400&h=250&fit=crop&auto=format`;


const courseVideos: CourseVideo[] = [
  // Theory Courses
  {
    id: 1, code: 'CSE 101', title: 'Introduction to Computer Science',
    description: 'Fundamentals of computing, algorithms, and problem solving.',
    videoUrl: 'https://www.youtube.com/results?search_query=Introduction+to+Computer+Science',
    thumbnail: unsplash('photo-1516116216624-53e697fedbea'),
  },
  {
    id: 2, code: 'CSE 102', title: 'Programming Fundamentals',
    description: 'Basic programming concepts using C/C++.',
    videoUrl: 'https://www.youtube.com/results?search_query=Programming+Fundamentals+C',
    thumbnail: unsplash('photo-1555066931-4365d14bab8c'), 
  },
  {
    id: 3, code: 'CSE 103', title: 'Discrete Mathematics',
    description: 'Logic, sets, relations, combinatorics, and graph theory.',
    videoUrl: 'https://www.youtube.com/results?search_query=Discrete+Mathematics+for+Computer+Science',
    thumbnail: unsplash('photo-1635070041078-e363dbe005cb'),
  },
  {
    id: 4, code: 'CSE 104', title: 'Digital Logic Design',
    description: 'Boolean algebra, combinational & sequential circuits.',
    videoUrl: 'https://www.youtube.com/results?search_query=Digital+Logic+Design',
    thumbnail: unsplash('photo-1580587771525-78b9dba3b914'),
  },
  {
    id: 5, code: 'CSE 105', title: 'Data Structures',
    description: 'Arrays, linked lists, stacks, queues, trees, and graphs.',
    videoUrl: 'https://www.youtube.com/results?search_query=Data+Structures+and+Algorithms',
    thumbnail: unsplash('photo-1504639725590-34d0984388bd'),
  },
  {
    id: 6, code: 'CSE 106', title: 'Object Oriented Programming',
    description: 'Classes, inheritance, polymorphism, and design patterns.',
    videoUrl: 'https://www.youtube.com/results?search_query=Object+Oriented+Programming+Java',
    thumbnail: unsplash('photo-1517694712202-14dd9538aa97'),
  },
  {
    id: 7, code: 'CSE 107', title: 'Computer Architecture',
    description: 'CPU, memory, I/O, pipelining, and instruction set architecture.',
    videoUrl: 'https://www.youtube.com/results?search_query=Computer+Architecture+and+Organization',
    thumbnail: unsplash('photo-1558494949-ef010cbdcc31'),
  },
  {
    id: 8, code: 'CSE 108', title: 'Database Management Systems',
    description: 'ER models, SQL, normalization, and transaction management.',
    videoUrl: 'https://www.youtube.com/results?search_query=Database+Management+Systems+SQL',
    thumbnail: unsplash('photo-1544383835-bda2bc66a55d'), 
  },
  {
    id: 9, code: 'CSE 109', title: 'Operating Systems',
    description: 'Processes, threads, memory management, and file systems.',
    videoUrl: 'https://www.youtube.com/results?search_query=Operating+Systems+concepts',
    thumbnail: unsplash('photo-1629654297299-c8506221ca97'), 
  },
  {
    id: 10, code: 'CSE 110', title: 'Computer Networks',
    description: 'OSI & TCP/IP models, routing, switching, and network security.',
    videoUrl: 'https://www.youtube.com/results?search_query=Computer+Networks+tutorial',
    thumbnail: unsplash('photo-1558494949-ef010cbdcc31'), 
  },
  {
    id: 11, code: 'CSE 201', title: 'Software Engineering',
    description: 'SDLC, requirements, design, testing, and project management.',
    videoUrl: 'https://www.youtube.com/results?search_query=Software+Engineering+full+course',
    thumbnail: unsplash('photo-1517245386807-bb43f82c33c4'), 
  },
  {
    id: 12, code: 'CSE 202', title: 'Algorithm Design',
    description: 'Divide & conquer, dynamic programming, greedy algorithms, and complexity.',
    videoUrl: 'https://www.youtube.com/results?search_query=Algorithm+Design+techniques',
    thumbnail: unsplash('photo-1504639725590-34d0984388bd'),
  },
  {
    id: 13, code: 'CSE 203', title: 'Artificial Intelligence',
    description: 'Search, knowledge representation, planning, and expert systems.',
    videoUrl: 'https://www.youtube.com/results?search_query=Artificial+Intelligence+lectures',
    thumbnail: unsplash('photo-1531747118685-b4713f3c9f1b'), 
  },
  {
    id: 14, code: 'CSE 204', title: 'Machine Learning',
    description: 'Supervised, unsupervised learning, neural networks, and evaluation.',
    videoUrl: 'https://www.youtube.com/results?search_query=Machine+Learning+course',
    thumbnail: unsplash('photo-1555949963-ff9fe0c870eb'), 
  },
  {
    id: 15, code: 'CSE 205', title: 'Computer Graphics',
    description: '2D/3D transformations, rendering, and OpenGL basics.',
    videoUrl: 'https://www.youtube.com/results?search_query=Computer+Graphics+tutorial',
    thumbnail: unsplash('photo-1594137120462-a4aa0a67bce6'), 
  },
  {
    id: 16, code: 'CSE 206', title: 'Theory of Computation',
    description: 'Automata, formal languages, Turing machines, and computability.',
    videoUrl: 'https://www.youtube.com/results?search_query=Theory+of+Computation+lectures',
    thumbnail: unsplash('photo-1526374965328-7f61d4dc18c5'), 
  },
  {
    id: 17, code: 'CSE 207', title: 'Compiler Design',
    description: 'Lexical analysis, parsing, syntax trees, and code generation.',
    videoUrl: 'https://www.youtube.com/results?search_query=Compiler+Design+tutorial',
    thumbnail: unsplash('photo-1555066931-4365d14bab8c'), 
  },
  {
    id: 18, code: 'CSE 208', title: 'Internet of Things (IoT)',
    description: 'Sensor networks, IoT protocols, and embedded systems.',
    videoUrl: 'https://www.youtube.com/results?search_query=Internet+of+Things+tutorial',
    thumbnail: unsplash('photo-1518770660439-4636190af475'), 
  },
  {
    id: 19, code: 'CSE 209', title: 'Big Data Analytics',
    description: 'MapReduce, Hadoop, Spark, and data lakes.',
    videoUrl: 'https://www.youtube.com/results?search_query=Big+Data+Analytics+tutorial',
    thumbnail: unsplash('photo-1551288049-bebda4e38f71'), 
  },
  {
    id: 20, code: 'CSE 210', title: 'Cybersecurity Fundamentals',
    description: 'Encryption, network security, ethical hacking, and risk management.',
    videoUrl: 'https://www.youtube.com/results?search_query=Cybersecurity+Fundamentals',
    thumbnail: unsplash('photo-1555949963-aa79dcee981c'), 
  },
  {
    id: 21, code: 'CSE 301', title: 'Advanced Database Systems',
    description: 'NoSQL, distributed databases, and data warehousing.',
    videoUrl: 'https://www.youtube.com/results?search_query=Advanced+Database+Systems',
    thumbnail: unsplash('photo-1544383835-bda2bc66a55d'), 
  },
  {
    id: 22, code: 'CSE 302', title: 'Microprocessors & Embedded Systems',
    description: 'ARM/AVR programming, interfacing, and real-time systems.',
    videoUrl: 'https://www.youtube.com/results?search_query=Microprocessors+Embedded+Systems',
    thumbnail: unsplash('photo-1580587771525-78b9dba3b914'), 
  },
  {
    id: 23, code: 'CSE 303', title: 'Parallel & Distributed Computing',
    description: 'MPI, OpenMP, cloud computing, and cluster architectures.',
    videoUrl: 'https://www.youtube.com/results?search_query=Parallel+Distributed+Computing',
    thumbnail: unsplash('photo-1558494949-ef010cbdcc31'), 
  },
  {
    id: 24, code: 'CSE 304', title: 'Natural Language Processing',
    description: 'Tokenization, sentiment analysis, and transformer models.',
    videoUrl: 'https://www.youtube.com/results?search_query=Natural+Language+Processing+course',
    thumbnail: unsplash('photo-1531747118685-b4713f3c9f1b'), 
  },
  {
    id: 25, code: 'CSE 305', title: 'Robotics',
    description: 'Kinematics, dynamics, control, and robot programming.',
    videoUrl: 'https://www.youtube.com/results?search_query=Robotics+engineering+course',
    thumbnail: unsplash('photo-1581091226825-a6a2a5aee158'), 
  },
  {
    id: 26, code: 'CSE 306', title: 'Mobile Application Development',
    description: 'Android/iOS development, UI/UX, and back‑end integration.',
    videoUrl: 'https://www.youtube.com/results?search_query=Mobile+App+Development+course',
    thumbnail: unsplash('photo-1526498460520-4c246339dccb'), 
  },
  {
    id: 27, code: 'CSE 307', title: 'Cloud Computing',
    description: 'AWS, Azure, virtualization, containers, and serverless architectures.',
    videoUrl: 'https://www.youtube.com/results?search_query=Cloud+Computing+full+course',
    thumbnail: unsplash('photo-1523474253046-8cd2748b5fde'), 
  },
  {
    id: 28, code: 'CSE 308', title: 'Blockchain Technology',
    description: 'Distributed ledgers, smart contracts, and cryptocurrency.',
    videoUrl: 'https://www.youtube.com/results?search_query=Blockchain+Technology+explained',
    thumbnail: unsplash('photo-1639762681485-074b7f938ba0'), 
  },
  {
    id: 29, code: 'CSE 309', title: 'Human‑Computer Interaction',
    description: 'User research, prototyping, usability testing, and accessibility.',
    videoUrl: 'https://www.youtube.com/results?search_query=Human+Computer+Interaction+design',
    thumbnail: unsplash('photo-1586717791821-3f44a563fa4c'), 
  },
  {
    id: 30, code: 'CSE 310', title: 'Data Science Fundamentals',
    description: 'Statistics, data wrangling, visualization, and basic ML pipelines.',
    videoUrl: 'https://www.youtube.com/results?search_query=Data+Science+Fundamentals',
    thumbnail: unsplash('photo-1551288049-bebda4e38f71'), 
  },
  {
    id: 31, code: 'CSE 401', title: 'Final Year Project I',
    description: 'Proposal, literature review, and initial prototype.',
    videoUrl: 'https://www.youtube.com/results?search_query=Final+Year+Project+computer+science',
    thumbnail: unsplash('photo-1517245386807-bb43f82c33c4'), 
  },
  {
    id: 32, code: 'CSE 402', title: 'Final Year Project II',
    description: 'Implementation, testing, and final defense.',
    videoUrl: 'https://www.youtube.com/results?search_query=Final+Year+Project+presentation',
    thumbnail: unsplash('photo-1517245386807-bb43f82c33c4'), 
  },
  {
    id: 33, code: 'CSE 403', title: 'Computational Biology',
    description: 'Bioinformatics algorithms, sequence alignment, and protein structure.',
    videoUrl: 'https://www.youtube.com/results?search_query=Computational+Biology+bioinformatics',
    thumbnail: unsplash('photo-1532187863486-abf8dbad1ff7'), 
  },
  {
    id: 34, code: 'CSE 404', title: 'Quantum Computing',
    description: 'Qubits, quantum gates, and algorithms (Shor, Grover).',
    videoUrl: 'https://www.youtube.com/results?search_query=Quantum+Computing+explained',
    thumbnail: unsplash('photo-1507413245164-6160d8298b31'), 
  },
  {
    id: 35, code: 'CSE 405', title: 'Game Development',
    description: 'Game engines, physics, AI for games, and 3D modelling.',
    videoUrl: 'https://www.youtube.com/results?search_query=Game+Development+course',
    thumbnail: unsplash('photo-1509198397868-475647b2a1e5'), 
  },
  {
    id: 36, code: 'CSE 406', title: 'Augmented & Virtual Reality',
    description: 'AR/VR hardware, rendering techniques, and interaction design.',
    videoUrl: 'https://www.youtube.com/results?search_query=Augmented+Reality+Virtual+Reality+tutorial',
    thumbnail: unsplash('photo-1592478411213-6153e4ebc07d'), 
  },
  {
    id: 37, code: 'CSE 407', title: 'DevOps & Continuous Delivery',
    description: 'CI/CD pipelines, Docker, Kubernetes, and monitoring.',
    videoUrl: 'https://www.youtube.com/results?search_query=DevOps+Continuous+Delivery+course',
    thumbnail: unsplash('photo-1618401471359-b8af93f063b2'), 
  },
  {
    id: 38, code: 'CSE 408', title: 'Ethics & Professional Practices',
    description: 'Code of ethics, intellectual property, and social responsibility.',
    videoUrl: 'https://www.youtube.com/results?search_query=Computer+Science+Ethics+Professional+Practices',
    thumbnail: unsplash('photo-1454165804606-c3d57bc86b40'), 
  },
  {
    id: 39, code: 'CSE 409', title: 'Deep Learning',
    description: 'CNNs, RNNs, GANs, and transfer learning with TensorFlow/PyTorch.',
    videoUrl: 'https://www.youtube.com/results?search_query=Deep+Learning+course',
    thumbnail: unsplash('photo-1555949963-ff9fe0c870eb'),
  },
  {
    id: 40, code: 'CSE 410', title: 'Information Retrieval',
    description: 'Indexing, ranking, web search, and recommendation systems.',
    videoUrl: 'https://www.youtube.com/results?search_query=Information+Retrieval+search+engines',
    thumbnail: unsplash('photo-1432821579285-1b6f0c2e3e3d'), 
  },

  // Lab Courses
  {
    id: 41, code: 'CSE 101L', title: 'Introduction to CS Lab',
    description: 'Hands‑on exercises with basic algorithms and programming tools.',
    videoUrl: 'https://www.youtube.com/results?search_query=Introduction+to+Computer+Science+lab',
    thumbnail: unsplash('photo-1581092335871-4c37b2c4be46'), 
  },
  {
    id: 42, code: 'CSE 102L', title: 'Programming Fundamentals Lab',
    description: 'C/C++ coding assignments and debugging techniques.',
    videoUrl: 'https://www.youtube.com/results?search_query=Programming+lab+C+tutorial',
    thumbnail: unsplash('photo-1555066931-4365d14bab8c'), 
  },
  {
    id: 43, code: 'CSE 104L', title: 'Digital Logic Design Lab',
    description: 'Breadboard circuits, logic gates, and flip‑flops.',
    videoUrl: 'https://www.youtube.com/results?search_query=Digital+Logic+Design+lab+experiment',
    thumbnail: unsplash('photo-1580587771525-78b9dba3b914'), 
  },
  {
    id: 44, code: 'CSE 105L', title: 'Data Structures Lab',
    description: 'Implementation of fundamental data structures in Python.',
    videoUrl: 'https://www.youtube.com/results?search_query=Data+Structures+Python+lab',
    thumbnail: unsplash('photo-1504639725590-34d0984388bd'), 
  },
  {
    id: 45, code: 'CSE 108L', title: 'Database Systems Lab',
    description: 'SQL queries, normalization, and a mini project.',
    videoUrl: 'https://www.youtube.com/results?search_query=Database+lab+SQL+project',
    thumbnail: unsplash('photo-1544383835-bda2bc66a55d'), 
  },
  {
    id: 46, code: 'CSE 109L', title: 'Operating Systems Lab',
    description: 'Shell scripting, process management, and system calls.',
    videoUrl: 'https://www.youtube.com/results?search_query=Operating+System+lab+Linux',
    thumbnail: unsplash('photo-1629654297299-c8506221ca97'), 
  },
  {
    id: 47, code: 'CSE 110L', title: 'Computer Networks Lab',
    description: 'Socket programming, packet tracing, and network simulation.',
    videoUrl: 'https://www.youtube.com/results?search_query=Computer+Networks+lab+cisco',
    thumbnail: unsplash('photo-1558494949-ef010cbdcc31'), 
  },
  {
    id: 48, code: 'CSE 202L', title: 'Algorithm Design Lab',
    description: 'Coding contests and implementation of complex algorithms.',
    videoUrl: 'https://www.youtube.com/results?search_query=Algorithm+Design+lab+competition',
    thumbnail: unsplash('photo-1504639725590-34d0984388bd'), 
  },
  {
    id: 49, code: 'CSE 203L', title: 'Artificial Intelligence Lab',
    description: 'Prolog/Lisp exercises and simple AI agents.',
    videoUrl: 'https://www.youtube.com/results?search_query=AI+lab+Prolog+exercises',
    thumbnail: unsplash('photo-1531747118685-b4713f3c9f1b'), 
  },
  {
    id: 50, code: 'CSE 204L', title: 'Machine Learning Lab',
    description: 'Python notebooks for regression, classification, and clustering.',
    videoUrl: 'https://www.youtube.com/results?search_query=Machine+Learning+lab+Python',
    thumbnail: unsplash('photo-1555949963-ff9fe0c870eb'), 
  },
  {
    id: 51, code: 'CSE 205L', title: 'Computer Graphics Lab',
    description: 'OpenGL programming, rendering scenes and transformations.',
    videoUrl: 'https://www.youtube.com/results?search_query=OpenGL+lab+computer+graphics',
    thumbnail: unsplash('photo-1594137120462-a4aa0a67bce6'), 
  },
  {
    id: 52, code: 'CSE 207L', title: 'Compiler Design Lab',
    description: 'Build a lexer and parser for a small language.',
    videoUrl: 'https://www.youtube.com/results?search_query=Compiler+Design+lab+lex+yacc',
    thumbnail: unsplash('photo-1555066931-4365d14bab8c'),
  },
  {
    id: 53, code: 'CSE 302L', title: 'Microprocessors Lab',
    description: 'Assembly programming and microcontroller interfacing.',
    videoUrl: 'https://www.youtube.com/results?search_query=Microprocessor+lab+assembly+8086',
    thumbnail: unsplash('photo-1580587771525-78b9dba3b914'),
  },
  {
    id: 54, code: 'CSE 304L', title: 'NLP Lab',
    description: 'Text preprocessing, sentiment analysis, and BERT fine‑tuning.',
    videoUrl: 'https://www.youtube.com/results?search_query=NLP+lab+Python+notebook',
    thumbnail: unsplash('photo-1531747118685-b4713f3c9f1b'), 
  },
  {
    id: 55, code: 'CSE 306L', title: 'Mobile App Development Lab',
    description: 'Build a complete Android/iOS app with back‑end integration.',
    videoUrl: 'https://www.youtube.com/results?search_query=Mobile+App+Development+lab+flutter',
    thumbnail: unsplash('photo-1526498460520-4c246339dccb'), 
  },
  {
    id: 56, code: 'CSE 307L', title: 'Cloud Computing Lab',
    description: 'Deploy apps on AWS, set up containers, and use Lambda.',
    videoUrl: 'https://www.youtube.com/results?search_query=Cloud+Computing+lab+AWS+hands-on',
    thumbnail: unsplash('photo-1523474253046-8cd2748b5fde'), 
  },
  {
    id: 57, code: 'CSE 310L', title: 'Data Science Lab',
    description: 'Real‑world datasets, cleaning, visualization, and storytelling.',
    videoUrl: 'https://www.youtube.com/results?search_query=Data+Science+lab+project',
    thumbnail: unsplash('photo-1551288049-bebda4e38f71'),
  },
];

// Component 
const CourseVideos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // search
  const filteredCourses = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return courseVideos;
    return courseVideos.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.code.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handlePlay = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen px-4 py-10 md:px-8 bg-blue-900">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
          Course Videos
        </h1>
        <p className="text-white/80 text-lg flex items-center justify-center gap-2">
          <FaFilm className="text-amber-300" />
          {courseVideos.length} courses ·{' '}
          <span className="text-amber-300 font-semibold">Learn from YouTube playlists</span>
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title, code, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
        </div>
      </div>

      {/* Videos Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Videos Thumbnail*/}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* button hover section */}
                <button
                  onClick={() => handlePlay(course.videoUrl)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group"
                  aria-label={`Watch ${course.title}`}
                >
                  <FaPlay className="text-white text-4xl opacity-80 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
                  {course.code}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                  {course.description}
                </p>
                <button
                  onClick={() => handlePlay(course.videoUrl)}
                  className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md transition-all duration-200"
                >
                  <FaPlay className="text-sm" />
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-white/60 text-lg py-20">
          No videos found for "<span className="font-medium text-amber-300">{searchQuery}</span>"
        </div>
      )}
    </div>
  );
};

export default CourseVideos;