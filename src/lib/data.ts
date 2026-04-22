export const projectsData = [
    {
        id: "promptvault",
        title: "PromptVault - AI Marketplace",
        image: "/img/project_one.png",
        description: "A lightning-fast Next.js marketplace powering AI architectures. Buyers can seamlessly browse generated prompts while Sellers explicitly control their portfolio pipelines natively connected to Stripe. Features Role-Based Dashboards and real-time data visualizing with Recharts.",
        tags: ["Next.js", "React", "Tailwind", "Stripe", "React Query", "Recharts"],
        links: {
            live: "https://assign-5-promtvault-front.vercel.app/",
            githubFront: "https://github.com/Murad07/assign_5_promtvault_front",
            githubBack: "https://github.com/Murad07/assign_5_promtvault_back",
            video: "https://drive.google.com/file/d/1QuceFW1tpdhveipYEfCqBPLCPesrpu3_/view?usp=drive_link"
        },
        challenges: "Managing real-time data sync with Stripe checkouts and handling role-based dashboard rendering dynamically without flickering. Orchestrating secure API gateways for the buyer/seller dichotomy presented strict layout and authorization hurdles.",
        futurePlans: "I plan to implement direct AI integration so users can write better prompts and generate content directly from within our platform without leaving the ecosystem."
    },
    {
        id: "skillbridge",
        title: "SkillBridge - Tutoring Platform",
        image: "/img/project_two.png",
        description: "A comprehensive full-stack web application designed to bridge the gap between learners and expert tutors. Features seamless browsing of profiles, instant session booking, and schedule management via Role-Based Dashboards.",
        tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        links: {
            live: "https://assign-4-l2b6-sb-frontend.vercel.app/",
            githubFront: "https://github.com/Murad07/assign_4_l2b6_sb_frontend",
            githubBack: "https://github.com/Murad07/assign_4_L2B6_skillBridge_backend",
            video: "https://drive.google.com/file/d/1VxtOKcx3KtuAcC-LaC-ewpPY-6I7DF6G/view?usp=drive_link"
        },
        challenges: "Handling complex scheduling logic, time zone offsets, and securely managing multiple distinct user roles (Tutor, Student, Admin) using JWTs alongside a Better-Auth compatible system.",
        futurePlans: "To take the platform to the next level of education, I plan to integrate an AI system capable of summarizing classes and generating automated random test assessments for students."
    },
    {
        id: "taskmanager",
        title: "Task Manager Hub",
        image: "/img/project_three.png",
        description: "A robust full-stack task management ecosystem enabling efficient workflow orchestration. Built with a responsive component-driven React frontend via Vite, seamlessly backed by a highly secure Node.js/Express API.",
        tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
        links: {
            live: "https://task-manager-mh.vercel.app",
            githubFront: "https://github.com/Murad07/task_manager_mh",
            githubBack: "#"
        },
        challenges: "Ensuring robust global state management and building highly responsive Drag & Drop interfaces that run identically smooth on mobile touch screens as they do on desktop.",
        futurePlans: "Introduce offline synchronization capabilities through PWA caching and implement team collaboration workspaces connected through low-latency WebSockets."
    }
];
