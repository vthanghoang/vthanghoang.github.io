// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed research and conference publications in intelligent sensing, AI-enabled healthcare, and low-power wireless systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research and engineering projects in intelligent sensing, embedded systems, Edge AI, and AIoT.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Education, research experience, engineering projects, awards, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching and mentoring experience in engineering, robotics, and community-based design.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-received-the-best-presenter-award-at-aims-2025-for-research-on-monte-carlo-spectral-database-generation-toward-ai-driven-skin-diagnosis",
          title: 'Received the Best Presenter Award at AIMS 2025 for research on Monte Carlo...',
          description: "",
          section: "News",},{id: "news-selected-for-the-inaugural-visemi-foundation-takeoff-fellowship-2026-cohort",
          title: 'Selected for the inaugural Visemi Foundation Takeoff Fellowship 2026 cohort.',
          description: "",
          section: "News",},{id: "news-received-the-australia-vietnam-strategic-technologies-centre-avstc-scholarship-2026-for-the-strategic-technologies-for-resilient-future-forum",
          title: 'Received the Australia-Vietnam Strategic Technologies Centre (AVSTC) Scholarship 2026 for the Strategic Technologies...',
          description: "",
          section: "News",},{id: "projects-edge-ai-coffee-bean-sorting",
          title: 'Edge AI Coffee Bean Sorting',
          description: "Quantized MobileNetV2-SSD inference on a Raspberry Pi 4B.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coffee-bean-edge-ai/";
            },},{id: "projects-lorawan-flood-water-monitoring",
          title: 'LoRaWAN Flood-Water Monitoring',
          description: "An IoT sensing concept for urban flood monitoring in Da Nang.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flood-water-monitoring/";
            },},{id: "projects-fpga-based-soc-architecture",
          title: 'FPGA-Based SoC Architecture',
          description: "Digital hardware modules and SoC design on Altera DE2 and Alinx Zynq 7000 platforms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fpga-soc-architecture/";
            },},{id: "projects-global-epics-water-purification-prototype",
          title: 'GLOBAL EPICS Water Purification Prototype',
          description: "Community-driven engineering design using the Design Thinking methodology.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/global-epics-water-purification/";
            },},{id: "projects-low-power-lora-mesh-network",
          title: 'Low-Power LoRa Mesh Network',
          description: "Routing and power-management strategies for long-range wireless sensor networks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lora-mesh-network/";
            },},{id: "projects-human-skin-spectral-reflectance-modelling",
          title: 'Human Skin Spectral Reflectance Modelling',
          description: "Monte Carlo simulation and validation for AI-driven skin diagnostics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/skin-spectral-modelling/";
            },},{id: "projects-smart-anti-suffocation-alarm-for-vehicles",
          title: 'Smart Anti-Suffocation Alarm for Vehicles',
          description: "Multi-sensor occupant detection and cloud-connected emergency alerts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vehicle-safety-alarm/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%74%68%61%6E%67%68%6F%61%6E%67.%77%6F%72%6B%69%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vthanghoang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/th%E1%BA%AFng-ho%C3%A0ng-v%C4%83n", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
