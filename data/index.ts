export const navItems = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Education", link: "/#education" },
  { name: "Contact", link: "/#contact" },
  { name: "Life & Stories", link: "/gallery" },
];

  
  export const gridItems = [
    {
      id: 1,
      title: "",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "",
      img: "/photo_6060146018424569263_y.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "",
      img: "",
      spareImg: "",
    },
  
    {
      id: 5,
      title: "Learning GoLang",
      description: "Current status : ",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute w-full md:w-full h-full lg:w-full",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/golang.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
  id: 1,
  title: "Personal Brain - AI Knowledge Assistant",

  des: "An AI-powered personal knowledge assistant that connects Gmail and Google Drive to retrieve, contextualize, and reason over personal information.",

  img: "/personalbrain.png",

  media: [
    {
      src: "/personalbrain.png",
      desc: "Personal Brain provides a conversational AI interface for interacting with personal knowledge. Users can ask natural-language questions and receive context-aware responses generated from connected sources."
    },

    {
      src: "/chat1p.png",
      desc: "The chat interface enables users to query their connected knowledge base using natural language. Retrieved information is processed and passed to Gemini to generate relevant, context-aware answers."
    },

    {
      src: "/chat2p.png",
      desc: "The retrieval layer combines connected data sources into a unified knowledge workflow. Relevant context is retrieved before generation, improving the accuracy and relevance of responses to user queries."
    }
  ],

  iconLists: [
    "/re.svg",
    "/next.svg",
    "/ts.svg",
    "/tail.svg",
  ],

  link: "https://github.com/aryanraj13/PersonalBrain"
},
    {
  id: 2,
  title: "GoTrack - Finance Management Platform",

  des: "A modern full-stack finance tracking platform for managing transactions, analytics, accounts, and budgets with real-time visual insights.",

  img: "/gotrack.png",

  media: [
    {
      src: "/gotrack-dashboard.png",
      desc: "GoTrack provides a powerful financial dashboard with real-time income, expense, balance, and transaction analytics. Interactive charts and modern UI components help users monitor financial activity effortlessly."
    },

    {
      src: "/gotrack-transactions.png",
      desc: "Users can add, filter, search, and manage transactions with an elegant transaction management system. Real-time updates ensure smooth financial tracking and organization."
    },

    {
  src: "/gotrack-login.png",
  desc: "GoTrack features a professional authentication system with beautifully designed login and registration pages. The modern split-screen layout, premium dark theme, and responsive design create a polished fintech experience for users."
},

    {
      src: "/gotrack-analytics.png",
      desc: "Advanced analytics visualize monthly spending trends and category breakdowns through dynamic charts and insights. Users can easily understand spending behavior and financial patterns."
    },

    {
      src: "/gotrack-accounts.png",
      desc: "The accounts module allows users to manage multiple wallets, bank accounts, and credit cards in one place. Each account card displays balances with a clean and modern design."
    },

    {
      src: "/gotrack-categories.png",
      desc: "GoTrack supports custom financial categories with color-coded organization and emoji support. This makes budgeting and expense classification intuitive and visually engaging."
    },

    {
      src: "/gotrack-settings.png",
      desc: "The settings section enables profile management, account preferences, and secure logout functionality. The responsive UI ensures a smooth experience across all devices."
    }
  ],

  iconLists: [
    "/re.svg",
    "/next.svg",
    "/tail.svg",
    "/js.png",
    "/mongo.svg",
    "/go.svg"
  ],

  link: "https://expensetrackergo.netlify.app/"
},
  {
  id: 3,
  title: "VoteChain - Decentralized Voting System",
  des: "A blockchain-based voting platform enabling secure, transparent, and tamper-proof elections using Ethereum smart contracts.",
  img: "/votechain.png",
  media: [
    {
      src: "/1.png",
      desc: "VoteChain uses Solidity smart contracts deployed on Ethereum to manage election workflows securely. All votes, candidates, and voter records are stored immutably on-chain, ensuring transparency and trust."
    },
    {
      src: "/2.png",
      desc: "The admin dashboard allows election setup, candidate creation, voter verification, and election lifecycle management. Smart contract access control ensures that only the admin can manage critical election operations."
    },
    {
      src: "/3.png",
      desc: "Voters connect their MetaMask wallets to register and participate in elections securely. Each transaction is cryptographically signed, preventing unauthorized voting and ensuring voter authenticity."
    },
    {
      src: "/4.png",
      desc: "The frontend is built with React and Web3.js, enabling seamless interaction between users and the Ethereum blockchain. Real-time blockchain data is fetched dynamically for voting and result updates."
    },
    {
      src: "/5.png",
      desc: "Ganache provides a local Ethereum blockchain environment for testing and deployment, while Truffle handles smart contract compilation, migration, and development workflow automation."
    },
    {
      src: "/6.png",
      desc: "The results module automatically retrieves vote counts from the blockchain and displays election outcomes transparently. Immutable vote storage eliminates the possibility of result manipulation."
    }
  ],
  iconLists: ["/re.svg", "/js.png", "/Solidity.png", "/web3.png", "/eth.png"],
  link: "https://github.com/aryanraj13/VoteChain-Decentralised-Voting-System"
},
  {
    id: 4,
    title: "MarketMentor - Stocks Chatbot",
    des: "An open-source AI chatbot leveraging function calling to display TradingView stock market widgets.",
    img: "/marketmentor.png",
    media: [
      {
        src: "/frontmarket.png",
        desc: "MarketMentor leverages the Llama3-70b model for natural language understanding.It delivers intelligent, real-time answers to user financial queries. Groq backend acceleration ensures ultra-fast AI response times."
      },
      {
        src: "/front1.png",
        desc: "Integrated TradingView widgets show real-time charts and metrics. Users can explore stock prices, heatmaps, screeners, and news. The visual data updates instantly based on chat inputs."
      },
      {
        src: "/front2.png",
        desc: "The frontend is built using React and Next.js for seamless performance.Server-side rendering enables faster load times and dynamic updates. Users enjoy a smooth, responsive chat and charting experience."
      },
      {
        src: "/front3.png",
        desc: "Next.js API routes connect user input with AI and financial APIs. Queries are processed and enriched with real-time stock data.The backend ensures accurate, relevant financial insights delivery."
      },
      {
        src: "/front4.png",
        desc: "Styled with Tailwind CSS for a mobile-friendly, elegant layout. Each UI component adapts beautifully across screen sizes. User experience is intuitive, fast, and visually consistent."
      },
      {
        src: "/front5.png",
        desc: "The interface updates in real-time based on user queries. Charts, financials, and AI responses appear contextually. This ensures a personalized and interactive user experience."
      }
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg","/app.svg","/fm.svg"],
    link: "https://marketmentor.netlify.app/"
  },
  {
    id: 5,
    title: "BoxZone - Ecommerce",
    des: "A modern e-commerce platform with advanced scalability and responsiveness.",
    img: "/pr1.png",
    media: [
      {
        src: "/ecom1.png",
        desc: "BoxZone is a modern e-commerce site built using Next.js and MongoDB. It ensures encrypted transactions and user data protection using AES-256. JWT-based authentication secures user sessions and access control."
      },
      {
        src: "/ecom2.png",
        desc: "Built with server-side rendering via Next.js for better SEO and performance. MongoDB provides a scalable and flexible backend for managing data. Cloud-hosted for fast delivery and responsive access across devices."
      },
      {
        src: "/ecom3.png",
        desc: "The platform includes AI modules for anomaly detection and fraud prevention. User behavior is analyzed to flag suspicious activities during transactions. This boosts user trust and reduces risk of payment manipulation."
      },
      {
        src: "/ecom4.png",
        desc: "Supports role-based access control (RBAC) for users and admins. JWT tokens are used to secure API access and protect user routes.Middleware ensures only authenticated users can perform key actions."
      },
      {
        src: "/ecom5.png",
        desc: "Cart, order placement, and checkout flow are fully implemented. Sensitive user and order data are securely stored with encryption.Payment gateway integration supports secure online payments."
      },
      {
        src: "/ecom6.png",
        desc: "Tailored for a smooth shopping experience across all screen sizes. Next.js optimizations ensure fast page transitions and load times. UI focuses on simplicity, speed, and usability for all user roles."
      },
      {
        src: "/ecom7.png",
        desc: "The project follows a clean MVC structure with modular APIs and models. Separate files handle users, products, and orders for scalability. This structure simplifies debugging, updates, and future feature additions."
      }
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/nodejs.png","/mongodb.png"],
    link: "https://boxzone.netlify.app/"
  }
];

  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Jaypee Institute of Information Technology, Noida",
      desc: "B.Tech Computer Science",
      timeframe:"September 2022 - May 2026",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Renaissance School, Bulandshahr",
      desc: "Secondary Education",
      timeframe:"April 2007 - April 2021",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      src: "https://github.com/aryanraj13",
    },
    {
      id: 2,
      img: "/twit.svg",
      src: "https://x.com/Aryan02009993",
    },
    {
      id: 3,
      img: "/link.svg",
      src: "https://www.linkedin.com/in/aryan-rajput-18895b289",
    },
    {
      id: 4,
      img: "/reddit.svg",
      src: "https://www.reddit.com/user/aryanraj13/",
    },
    {
      id: 5,
      img: "/google.svg",
      src: "mailto:aryanrajput200321@gmail.com",
    },
    {
      id: 6,
      img: "/insta.svg",
      src: "https://instagram.com/_aryan.raj13",
    },
  ];


  export const techstacklogos = [
    {
      src:"/python.png",
    },
    {
      src:"/js.png",
    },
    {
      src:"/react.png",
    },
    {
      src:"/git.svg",
    },
    {
      src:"/database.png",
    },
    {
      src:"/css.png",
    },
    {
      src:"/ts.svg",
    },
    {
      src:"/react.png",
    },
    {
      src:"/html.png",
    },
    {
      src:"/three.svg",
    },
    {
      src:"/tail.svg",
    },
    {
      src:"/next.svg",
    },
    {
      src:"/npm.png",
    },
  ];
  

  export const cinemaposters = [
  {
    name: "Game of Thrones",
    poster: "/posters/got.jpg",
    year: "2011",
    director: "D & D",
  },
  {
    name: "Dune:Part Two",
    poster: "/posters/dune2.jpeg",
    year: "2024",
    director: "Denis Villeneuve",
  },
  {
    name: "House of the Dragon",
    poster: "/posters/hotd.jpg",
    year: "2022",
    director: "Ryan Condal",
  },
  {
    name: "1917",
    poster: "/posters/1917 (2019).jpg",
    year: "2019",
    director: "Sam Mendes",
  },
  {
    name: "Air",
    poster: "/posters/Air (2023).png",
    year: "2023",
    director: "Ben Affleck",
  },
  {
    name: "Arrival",
    poster: "/posters/Arrival (2016).jpeg",
    year: "2016",
    director: "Denis Villeneuve",
  },
  {
    name: "Ballerina",
    poster: "/posters/Ballerina (2025).png",
    year: "2025",
    director: "Len Wiseman",
  },
  {
    name: "Chernobyl",
    poster: "/posters/Chernobyl (2019).png",
    year: "2019",
    director: "Johan Renck",
  },
  {
    name: "Don't Look Up",
    poster: "/posters/Don't Look Up (2021).jpg",
    year: "2021",
    director: "Adam McKay",
  },
  {
    name: "Dunkirk",
    poster: "/posters/Dunkirk (2017).jpeg",
    year: "2017",
    director: "Christopher Nolan",
  },
  {
    name: "Furiosa",
    poster: "/posters/Furiosa- A Mad Max Saga (2024).jpg",
    year: "2024",
    director: "George Miller",
  },
  {
    name: "Man of Steel",
    poster: "/posters/Man of Steel (2013).jpg",
    year: "2013",
    director: "Zack Snyder",
  },
  {
    name: "Spider-Man: Into",
    poster: "/posters/Spider-Man- Into the Spider-Verse (2018).jpg",
    year: "2018",
    director: "Lord & Miller",
  },
  {
    name: "Marvel Studios",
    poster: "/posters/Marvel Studios.jpeg",
    year: "2008-19",
    director: "Kevin Feige",
  },
  {
    name: "MI : Fallout",
    poster: "/posters/MissionImpossibleFallout (2018).png",
    year: "2018",
    director: "Chris. McQuarrie",
  },
  {
    name: "Oppenheimer",
    poster: "/posters/Oppenheimer (2023).jpg",
    year: "2023",
    director: "Christopher Nolan",
  },
  {
    name: "Spider-Man: Across",
    poster: "/posters/Spider-Man- Across the Spider-Verse (2023).png",
    year: "2023",
    director: "Lord & Miller",
  },
  {
    name: "The Dark Knight",
    poster: "/posters/The Dark Knight (2008).jpeg",
    year: "2008",
    director: "Christopher Nolan",
  },
  {
    name: "The Penguin",
    poster: "/posters/The Penguin (2024).png",
    year: "2024",
    director: "Craig Zobel",
  },
  {
    name: "Dune",
    poster: "/posters/Dune (2021).jpg",
    year: "2021",
    director: "Denis Villeneuve",
  },
  {
    name: "MI : Final Reckoning",
    poster: "/posters/MissionImpossibleThe Final Reckoning (2025).png",
    year: "2025",
    director: "Chris. McQuarrie",
  },
  {
    name: "Thunderbolts*",
    poster: "/posters/Thunderbolts_ (2025).jpg",
    year: "2025",
    director: "Jake Schreier",
  },
  {
    name: "Zack Snyder's JL",
    poster: "/posters/Zack Snyder's Justice League (2021).jpg",
    year: "2021",
    director: "Zack Snyder",
  },
  {
    name: "F1",
    poster: "/posters/F1 (2025).png",
    year: "2025",
    director: "Joseph Kosinski",
  },
  {
    name: "The Batman",
    poster: "/posters/The Batman (2022).png",
    year: "2022",
    director: "Matt Reeves",
  },
];

  