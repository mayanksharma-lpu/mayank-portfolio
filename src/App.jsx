import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, Github, Linkedin, Mail, Download, Search, Layout, Database, Terminal, Shield, Star, Briefcase, ExternalLink, Copy, Check, Phone, MapPin, ArrowUpRight, GraduationCap, Award, FileCode, Play, Cpu, Rocket, Sparkles, Zap, Flame, RotateCcw
} from 'lucide-react';

import myCerts from './images/certs.png';
import projectsCcFact from './images/projects-cc-fact.png';
import projectsAgri from './images/projects-agri.png';
import ccHouse from './images/cc_house.png';
import factCheck from './images/fact_check.png';
import profileMain from './images/profile_main.png';
import profile1 from './images/profile1.png'; // Formal dress with glasses
import profile2 from './images/profile2.png';

// PRESERVED DATA
const data = {
    name: "MAYANK SHARMA",
    title: "AI / ML ENGINEER",
    statement: "Building intelligent systems that turn ideas into real-world experiences.",
    phone: "India",
    email: "mayanksharmajind@gmail.com",
    aboutContext: "I build. I experiment. I learn. I solve.",
    aboutDetails: [
        "Hello I am Mayank Sharma, a motivated and dedicated student focused on building strong skills and gaining practical knowledge. I have actively participated in multiple hackathons and earned several skill certifications, which have helped me strengthen my practical understanding.",
        "I possess 8+ technical and soft skills, including problem-solving, communication, and teamwork. I enjoy taking on new challenges and continuously improving through hands-on experience. My goal is to grow professionally and build a strong foundation for my future career."
    ],
    social: {
        github: "https://github.com/",
        linkedin: "http://www.linkedin.com/in/mayanksharmajind",
        email: "mailto:mayanksharmajind@gmail.com"
    },
    skills: {
        languages: ['C/C++', 'Python', 'DBMS', 'SQL', 'OOPs', 'Computer Networks'],
        web: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma', 'Vercel'],
        professional: ['Time Management', 'Leadership', 'Problem-Solving', 'Adaptability', 'Quick Learner']
    },
    projects: [
        { name: 'Voice Command-Based Human-Following Robot', desc: 'Developed a voice-controlled humanoid robot using Arduino. Integrated ultrasonic sensors for obstacle detection and a human-following system for autonomous navigation and gestures.', tech: ['Arduino', 'C/C++', 'Sensors', 'Robotics'], img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", feature: true, demo: "https://lnkd.in/p/gCjjphP5" },
        { name: 'THE CC COFFEE HOUSE!', desc: 'A dedicated website built for Cafe Owners, enabling them to connect with customers seamlessly and beautifully. Integrated AI concepts.', tech: ['HTML', 'CSS', 'JS', 'AI'], img: factCheck, feature: false, demo: "https://the-cc-coffee-house-mynk.vercel.app/" },
        { name: 'FACT CHECK (Prototype)', desc: 'An innovative prototype for a platform designed to verify information and distinguish between false and true news.', tech: ['React', 'Logic', 'Research'], img: ccHouse, feature: false, demo: "https://factcheck-mynk-bay.vercel.app/" },
        { name: 'AGRI SARTHI!', desc: 'An ongoing project aimed at helping farmers with comprehensive tools and resources to enhance agricultural efficiency.', tech: ['React', 'Web', 'UI/UX'], img: projectsAgri, feature: false, demo: "https://agrisarthiaiapplicationbuildcommuni.vercel.app/" },
    ],
    experience: [
        { title: 'Environmental Awareness Campaign', company: 'Times of India (CDP-TCTC)', date: 'Jun ’26', desc: 'Conducted an Environmental Awareness and Critical Thinking campaign under the Times Critical Thinking Championship (TCTC) 2026, engaging 300+ school students through interactive sessions. Managed participation data and coordinated with school staff to promote critical thinking.' },
        { title: 'Hackathon Participant & Competitor', company: 'National Level Hackathons', date: 'Dec ’25', desc: 'Participated in multiple national-level hackathons and reached the final rounds. Recognized for participation by GeeksforGeeks, HiDevs, and Lovely Professional University.' }
    ],
    education: [
        { degree: 'B.Tech - Computer Science and Engineering (AI & ML)', school: 'Lovely Professional University, Punjab, India', date: 'Aug ’25 – Present', detail: 'Current CGPA: 8.00' },
        { degree: 'Intermediate', school: 'MLN Public School, Jind, Haryana', date: 'Jun ’23 – Apr ’24', detail: 'Percentage: 71%' },
        { degree: 'Matriculation', school: 'DAV Public School, Jind, Haryana', date: 'Jun ’21 – Apr ’22', detail: 'Percentage: 80.6%' }
    ],
    certifications: [
        { name: 'Design Thinking', source: 'NPTEL, IIT Madras', date: 'Sep ’26' },
        { name: 'Introduction to Artificial Intelligence', source: 'Infosys', date: 'Mar ’26' },
        { name: 'C Programming', source: 'Neo Colab', date: 'May ’26' },
        { name: 'Step-by-Step Machine Learning with Python', source: 'Infosys', date: 'Jul ’25' },
        { name: 'Intermediate English as a Second Language', source: 'Saylor Academy', date: 'Feb ’26' },
    ]
};

// --- ANIMATION VARIANTS ---
const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Navbar = ({ activeSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

    return (
        <>
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="nav-container"
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        padding: '0.4rem'
                    }}
                    className="mobile-menu-toggle"
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </motion.nav>

            <style>{`
                @media (max-width: 820px) {
                    .nav-container {
                        width: 90%;
                        justify-content: space-between;
                        padding: 0.5rem 1.25rem;
                    }
                    .nav-container > div {
                        display: none !important;
                    }
                    .mobile-menu-toggle {
                        display: block !important;
                    }
                }
            `}</style>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        style={{
                            position: 'fixed',
                            top: '4.5rem',
                            left: '5%',
                            right: '5%',
                            background: 'rgba(8, 10, 16, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '1.25rem',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            zIndex: 99,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                        }}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    textDecoration: 'none',
                                    color: activeSection === item.toLowerCase() ? 'var(--color-emerald)' : 'var(--text-muted)',
                                    fontSize: '1.05rem',
                                    fontWeight: '700',
                                    padding: '0.5rem 0'
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const CopyButton = ({ text, children }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div onClick={handleCopy} style={{ width: '100%' }}>
            {children(copied)}
        </div>
    );
};

// 3D Zero-Gravity Suspended Card Component
const ZeroGravityCard = ({ children, height, style = {} }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 15, y: y * -15 });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
    };

    const handleTouchMove = (e) => {
        if (e.touches.length === 0) return;
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width - 0.5;
        const y = (touch.clientY - rect.top) / rect.height - 0.5;
        const clampedX = Math.max(-0.5, Math.min(0.5, x));
        const clampedY = Math.max(-0.5, Math.min(0.5, y));
        setTilt({ x: clampedX * 8, y: clampedY * -8 });
    };

    const transform = isHovered
        ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.02, 1.02, 1.02)`
        : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={handleMouseLeave}
            style={{
                position: 'relative',
                width: '100%',
                height: height || '100%',
                cursor: 'pointer',
                perspective: '1000px',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                ...style
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    transform: transform,
                    transition: isHovered
                        ? 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease'
                        : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.8s ease',
                    transformStyle: 'preserve-3d',
                    borderRadius: '2rem',
                    boxShadow: isHovered
                        ? '0 30px 60px rgba(0, 0, 0, 0.7), 0 0 50px rgba(16, 185, 129, 0.3)'
                        : '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    background: 'var(--bg-card)'
                }}
            >
                {children}
            </div>
        </div>
    );
};

// Interactive Code Editor Tab View
const CodeEditor = () => {
    const [activeTab, setActiveTab] = useState('overview.py');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview.py':
                return (
                    <div style={{ color: '#a7f3d0', fontFamily: 'var(--font-code)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                        <span style={{ color: '#f43f5e' }}>import</span> developer_profile <span style={{ color: '#f43f5e' }}>as</span> dev<br /><br />
                        engineer = dev.Engineers(<span style={{ color: '#e0f2fe' }}>"Mayank Sharma"</span>)<br />
                        engineer.title = <span style={{ color: '#e0f2fe' }}>"AI & ML Specialist"</span><br />
                        engineer.location = <span style={{ color: '#e0f2fe' }}>"India"</span><br /><br />
                        <span style={{ color: '#6366f1' }}># Execute background checks of certifications</span><br />
                        engineer.verify_credentials()<br />
                        engineer.run_hackathons_loop()
                    </div>
                );
            case 'skills.json':
                return (
                    <div style={{ color: '#6ee7b7', fontFamily: 'var(--font-code)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                        <span style={{ color: '#94a3b8' }}>&#123;</span><br />
                        &nbsp;&nbsp;<span style={{ color: '#a855f7' }}>"core_languages"</span>: <span style={{ color: '#94a3b8' }}>[</span><span style={{ color: '#e0f2fe' }}>"C++"</span>, <span style={{ color: '#e0f2fe' }}>"Python"</span>, <span style={{ color: '#e0f2fe' }}>"SQL"</span><span style={{ color: '#94a3b8' }}>]</span>,<br />
                        &nbsp;&nbsp;<span style={{ color: '#a855f7' }}>"dbs"</span>: <span style={{ color: '#94a3b8' }}>[</span><span style={{ color: '#e0f2fe' }}>"MySQL"</span>, <span style={{ color: '#e0f2fe' }}>"MongoDB"</span><span style={{ color: '#94a3b8' }}>]</span>,<br />
                        &nbsp;&nbsp;<span style={{ color: '#a855f7' }}>"methodologies"</span>: <span style={{ color: '#94a3b8' }}>[</span><span style={{ color: '#e0f2fe' }}>"Design Thinking"</span>, <span style={{ color: '#e0f2fe' }}>"Problem-Solving"</span><span style={{ color: '#94a3b8' }}>]</span><br />
                        <span style={{ color: '#94a3b8' }}>&#125;</span>
                    </div>
                );
            case 'terminal.sh':
                return (
                    <div style={{ color: '#c084fc', fontFamily: 'var(--font-code)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                        <span style={{ color: '#10b981' }}>$</span> run-diagnostics --mode=fast<br />
                        <span style={{ color: '#94a3b8' }}>[info]</span> Scanning core modules...<br />
                        <span style={{ color: '#94a3b8' }}>[info]</span> Verified connection systems.<br />
                        <span style={{ color: '#22c55e' }}>[success]</span> All checks passed successfully.<br />
                        <span style={{ color: '#10b981' }}>$</span> check-hackathons<br />
                        <span style={{ color: '#22c55e' }}>[success]</span> Finalist rounds achieved at regional hackathons.
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mock-editor">
            <div className="editor-header">
                <div className="dots-wrapper">
                    <div className="dot dot-red"></div>
                    <div className="dot dot-yellow"></div>
                    <div className="dot dot-green"></div>
                </div>
                <div className="editor-tabs">
                    {[
                        { id: 'overview.py', icon: <FileCode size={13} /> },
                        { id: 'skills.json', icon: <Database size={13} /> },
                        { id: 'terminal.sh', icon: <Terminal size={13} /> }
                    ].map((tab) => (
                        <div
                            key={tab.id}
                            className={`editor-tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon}
                            <span>{tab.id}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="editor-body">
                <div style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', opacity: 0.1 }}>
                    <Play size={80} color="var(--color-emerald)" />
                </div>
                <pre style={{ margin: 0, overflowX: 'auto' }}>
                    <code>{renderContent()}</code>
                </pre>
            </div>
        </div>
    );
};

// Live 3D HTML5 Canvas Rotating connecting particle web background
const Canvas3DBackground = () => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // 3D Nodes
        const numPoints = 85;
        const points = [];
        const maxDist = 135;

        for (let i = 0; i < numPoints; i++) {
            points.push({
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 800,
                z: (Math.random() - 0.5) * 800,
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                vz: (Math.random() - 0.5) * 1.2
            });
        }

        // Default rotation speed parameters
        let angleX = 0.0008;
        let angleY = 0.0012;
        let targetAngleX = 0.0008;
        let targetAngleY = 0.0012;

        const handleMouseMove = (e) => {
            const mx = e.clientX / window.innerWidth - 0.5;
            const my = e.clientY / window.innerHeight - 0.5;
            targetAngleY = mx * 0.004;
            targetAngleX = my * 0.004;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const rotateX = (p, angle) => {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const y = p.y * cos - p.z * sin;
            const z = p.y * sin + p.z * cos;
            return { ...p, y, z };
        };

        const rotateY = (p, angle) => {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const x = p.x * cos + p.z * sin;
            const z = -p.x * sin + p.z * cos;
            return { ...p, x, z };
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Interpolate coordinates dynamically
            angleX += (targetAngleX - angleX) * 0.05;
            angleY += (targetAngleY - angleY) * 0.05;

            const projected = points.map((p) => {
                let r = rotateX(p, angleX);
                r = rotateY(r, angleY);

                // Increments 
                p.x += p.vx;
                p.y += p.vy;
                p.z += p.vz;

                const limit = 400;
                if (Math.abs(p.x) > limit) p.vx *= -1;
                if (Math.abs(p.y) > limit) p.vy *= -1;
                if (Math.abs(p.z) > limit) p.vz *= -1;

                const cameraDistance = 580;
                const scale = cameraDistance / (cameraDistance + r.z);
                const x2d = r.x * scale + width / 2;
                const y2d = r.y * scale + height / 2;

                return { x: x2d, y: y2d, z: r.z, scale };
            });

            // Projection connecting lines with deep emerald/alpha values
            for (let i = 0; i < projected.length; i++) {
                const p1 = projected[i];
                for (let j = i + 1; j < projected.length; j++) {
                    const p2 = projected[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.16;

                        const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                        grad.addColorStop(0, `rgba(16, 185, 129, ${alpha})`); // Emerald
                        grad.addColorStop(0.5, `rgba(6, 182, 212, ${alpha})`); // Cyan
                        grad.addColorStop(1, `rgba(99, 102, 241, ${alpha * 0.5})`); // Indigo

                        ctx.strokeStyle = grad;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            projected.forEach((p) => {
                const size = Math.max(0.8, p.scale * 2.5);
                const depthRatio = (p.z + 400) / 800; // 0 (near) to 1 (far)

                const rColor = Math.floor(16 * (1 - depthRatio) + 99 * depthRatio);
                const gColor = Math.floor(185 * (1 - depthRatio) + 102 * depthRatio);
                const bColor = Math.floor(129 * (1 - depthRatio) + 241 * depthRatio);

                ctx.fillStyle = `rgba(${rColor}, ${gColor}, ${bColor}, ${p.scale * 0.45})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

// Futuristic System Launch Overlay Component
const LaunchOverlay = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("INITIALIZING CORE AI/ML SYSTEMS...");

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onComplete();
                    }, 400);
                    return 100;
                }
                const next = prev + Math.floor(Math.random() * 9) + 5;
                if (next > 30 && next <= 60) {
                    setStatusText("ESTABLISHING QUANTUM NEURAL LINK...");
                } else if (next > 60 && next <= 88) {
                    setStatusText("SYNCHRONIZING PORTFOLIO ENGINE...");
                } else if (next > 88) {
                    setStatusText("SYSTEM ONLINE - LAUNCHING!");
                }
                return next > 100 ? 100 : next;
            });
        }, 70);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="launch-overlay-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(12px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="launch-grid-bg"></div>
            <div className="launch-orb-glow"></div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="launch-progress-container"
            >
                <div style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    marginBottom: '1rem',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
                }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    >
                        <Rocket size={34} />
                    </motion.div>
                </div>

                <h3 style={{
                    fontFamily: 'var(--font-code)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#fff',
                    margin: 0
                }}>
                    SYSTEM LAUNCH
                </h3>

                <div className="launch-bar-outer">
                    <div className="launch-bar-inner" style={{ width: `${progress}%` }}></div>
                </div>

                <div style={{
                    display: 'flex',
                    justify: 'space-between',
                    width: '100%',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)'
                }}>
                    <span>{statusText}</span>
                    <span style={{ color: 'var(--color-emerald)', fontWeight: '700' }}>{progress}%</span>
                </div>

                <button
                    onClick={onComplete}
                    style={{
                        marginTop: '1.5rem',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: 'var(--color-emerald)',
                        padding: '0.45rem 1.2rem',
                        borderRadius: '1rem',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-code)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(16, 185, 129, 0.25)';
                        e.currentTarget.style.borderColor = 'var(--color-emerald)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    SKIP INTRO ⚡
                </button>
            </motion.div>
        </motion.div>
    );
};

const Portfolio = () => {
    const [isLaunched, setIsLaunched] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [sending, setSending] = useState(false);
    const [formStatus, setFormStatus] = useState(null);
    const [rocketActive, setRocketActive] = useState(false);

    const triggerRocketLaunch = () => {
        setRocketActive(true);
        setTimeout(() => setRocketActive(false), 1900);
    };

    const handleReLaunch = () => {
        setIsLaunched(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setFormStatus(null);

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                })
            });

            const result = await response.json();
            if (result.success) {
                setFormStatus('success');
                e.target.reset();
            } else {
                setFormStatus('error');
            }
        } catch (err) {
            console.error('Contact Form Transmission Error:', err);
            setFormStatus('error');
        } finally {
            setSending(false);
        }
    };

    // Section highlighting logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = 'home';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 250) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <AnimatePresence>
                {!isLaunched && (
                    <LaunchOverlay onComplete={() => setIsLaunched(true)} />
                )}
            </AnimatePresence>

            <div className="noise"></div>
            <Canvas3DBackground />

            {/* BACKDROP GRADIENT SYSTEM */}
            <div className="ambient-bg">
                <div className="ambient-blob blob-1"></div>
                <div className="ambient-blob blob-2"></div>
                <div className="ambient-blob blob-3"></div>
                <div className="ambient-blob blob-4"></div>
            </div>

            <Navbar activeSection={activeSection} />

            {/* HERO SECTION */}
            <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '6rem', position: 'relative' }}>
                
                {/* Interactive Rocket Launch Blast Effect */}
                {rocketActive && (
                    <div className="rocket-launch-effect" style={{ left: '50%', bottom: '20%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Rocket size={56} color="var(--color-emerald)" />
                            <div style={{
                                width: '12px',
                                height: '120px',
                                background: 'linear-gradient(to bottom, #10b981, #06b6d4, transparent)',
                                filter: 'blur(4px)',
                                marginTop: '-8px'
                            }}></div>
                        </div>
                    </div>
                )}

                <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', width: '100%', alignItems: 'center' }}>

                    {/* Cell 1: Normal Big Profile Card with Orbiting Holographic Rings & Badges */}
                    <motion.div
                        key={isLaunched ? 'img-launched' : 'img-waiting'}
                        initial={{ opacity: 0, scale: 0.75, y: 40, rotate: -4, filter: 'blur(12px)' }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className="hero-picture-cell zero-gravity-levitate"
                        style={{ position: 'relative' }}
                    >
                        {/* Animated Holographic Rings */}
                        <div className="hero-orbit-ring"></div>
                        <div className="hero-orbit-ring-outer"></div>

                        {/* Floating Launch Stat Badge */}
                        <div className="launch-badge-floating launch-badge-top-right">
                            <Zap size={14} color="var(--color-emerald)" />
                            <span>AI & ML ENGINEER</span>
                        </div>

                        <ZeroGravityCard height="425px">
                            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={profile1} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2rem', transition: 'transform 0.5s ease' }} className="zero-gravity-img" />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'radial-gradient(circle, transparent 20%, #07080d 95%)',
                                    pointerEvents: 'none',
                                    borderRadius: '2rem'
                                }}></div>
                            </div>
                        </ZeroGravityCard>
                    </motion.div>

                    {/* Cell 2: Hero details text with Launch Animations */}
                    <motion.div
                        key={isLaunched ? 'text-launched' : 'text-waiting'}
                        initial={{ opacity: 0, x: -45, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="hero-text-cell"
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}
                        >
                            <span className="eyebrow" style={{ margin: 0 }}>{data.title}</span>
                            
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                background: 'rgba(16, 185, 129, 0.12)',
                                border: '1px solid rgba(16, 185, 129, 0.3)',
                                padding: '0.25rem 0.65rem',
                                borderRadius: '1rem',
                                fontFamily: 'var(--font-code)',
                                fontSize: '0.72rem',
                                color: 'var(--color-emerald)',
                                fontWeight: 600
                            }}>
                                <div className="status-pulse-dot"></div>
                                <span>SYSTEM ONLINE</span>
                            </div>

                            <button className="relaunch-btn" onClick={handleReLaunch} title="Re-play Launch Intro">
                                <RotateCcw size={12} />
                                <span>Re-Launch</span>
                            </button>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 35, scale: 0.94 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="gradient-text"
                            style={{
                                fontSize: 'clamp(4rem, 8vw, 6.2rem)',
                                fontWeight: 905,
                                letterSpacing: '-0.04em',
                                lineHeight: 0.95,
                                marginBottom: '1.5rem'
                            }}
                        >
                            {data.name}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                                marginBottom: '2.5rem',
                                maxWidth: '540px',
                                lineHeight: 1.5
                            }}
                        >
                            {data.statement}
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 25, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.65 }}
                            style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}
                        >
                            <a href="#projects" className="btn-cinematic btn-primary" onClick={triggerRocketLaunch}>
                                Explore Projects <Rocket size={18} />
                            </a>
                            <a href="/Mayank_CV_Corrected.docx" download="Mayank_CV_Corrected.docx" className="btn-cinematic" style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-primary)', background: 'rgba(255,255,255,0.01)', padding: '0.75rem 1.75rem', fontSize: '0.85rem' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-emerald)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                                Download CV <Download size={18} />
                            </a>
                            <a href="#contact" className="btn-cinematic" style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.005)', padding: '0.75rem 1.75rem', fontSize: '0.85rem' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-indigo)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                                Transmit Request
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem', alignItems: 'center' }}
                        >
                            <a href={data.social.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} className="social-icon">
                                <Github size={24} />
                            </a>
                            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} className="social-icon">
                                <Linkedin size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Cell 3: Code Editor Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hero-code-cell"
                        style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                    >
                        <div style={{ width: '100%' }}>
                            <CodeEditor />
                        </div>
                    </motion.div>

                </div>
            </section>

            <style>{`
                .social-icon {
                    transition: var(--transition-cubic);
                }
                .social-icon:hover {
                    color: var(--color-emerald) !important;
                    transform: translateY(-2px);
                }
                @media (max-width: 900px) {
                    #home .section-container {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                        gap: 3.5rem;
                    }
                    #home .section-container > div {
                        align-items: center;
                        justify-content: center;
                    }
                }
            `}</style>

            {/* ABOUT PHILOSOPHY */}
            <section id="about" style={{ padding: '6rem 0' }}>
                <div className="section-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}
                    >
                        <motion.div variants={fadeUp}>
                            <span className="eyebrow">Philosophical Core</span>
                            <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.25 }}>
                                {data.aboutContext}
                            </h2>
                            {data.aboutDetails.map((p, idx) => (
                                <p key={idx} style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                                    {p}
                                </p>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="zero-gravity-levitate"
                            style={{
                                width: '100%',
                                aspectRatio: '1',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <ZeroGravityCard height="100%">
                                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={profileMain} alt="Mayank Sharma" className="zero-gravity-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2rem', transition: 'transform 0.5s ease' }} />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'radial-gradient(circle, transparent 20%, #07080d 95%)',
                                        pointerEvents: 'none',
                                        borderRadius: '2rem'
                                    }}></div>
                                </div>
                            </ZeroGravityCard>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* TECHNICAL SKILLS ECOSYSTEM */}
            <section id="skills" style={{ padding: '6rem 0' }}>
                <div className="section-container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="eyebrow">Ecosystem Map</span>
                        <h2 className="gradient-text" style={{ fontSize: '3rem' }}>Technical Proficiency</h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }} className="skills-grid-v3">
                        {[
                            { title: 'Languages & Core CS', icon: <Terminal size={24} color="var(--color-emerald)" />, items: data.skills.languages },
                            { title: 'Web Frameworks & Tools', icon: <Layout size={24} color="var(--color-cyan)" />, items: data.skills.web },
                            { title: 'Professional Capabilities', icon: <Shield size={24} color="var(--color-purple)" />, items: data.skills.professional }
                        ].map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className="premium-card"
                                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                        {cat.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{cat.title}</h3>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                    {cat.items.map(skill => (
                                        <span key={skill} className="skill-tag-v3">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SELECTED WORKS (PROJECTS) */}
            <section id="projects" style={{ padding: '6rem 0' }}>
                <div className="section-container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                        <span className="eyebrow">Works Portfolio</span>
                        <h2 className="gradient-text" style={{ fontSize: '3rem' }}>Engineering & Prototypes</h2>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                        {data.projects.map((proj, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeUp}
                                className="premium-card project-card-v3"
                                style={{
                                    gridTemplateColumns: proj.img ? '1.1fr 0.9fr' : '1fr',
                                    direction: (idx % 2 === 0 || !proj.img) ? 'ltr' : 'rtl'
                                }}
                            >
                                {proj.img ? (
                                    <div className="project-media-v3">
                                        <img src={proj.img} alt={proj.name} className="project-img-v2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ) : (
                                    <div className="project-media-v3" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(99, 102, 241, 0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '320px' }}>
                                        <Terminal size={60} color="var(--color-emerald)" style={{ opacity: 0.6 }} />
                                    </div>
                                )}

                                <div className="project-details-v3" style={{ direction: 'ltr' }}>
                                    {proj.feature && (
                                        <span style={{ color: 'var(--color-emerald)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem', display: 'block' }}>
                                            Core Hackathon Focus
                                        </span>
                                    )}
                                    <h3 style={{ fontSize: '1.7rem', fontWeight: 900, marginBottom: '1rem' }}>{proj.name}</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', fontSize: '0.98rem', lineHeight: 1.6 }}>{proj.desc}</p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                        {proj.tech.map(t => (
                                            <span
                                                key={t}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    color: 'var(--color-emerald)',
                                                    background: 'rgba(16, 185, 129, 0.05)',
                                                    padding: '0.3rem 0.75rem',
                                                    borderRadius: '2rem',
                                                    border: '1px solid rgba(16, 185, 129, 0.1)'
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-cinematic btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
                                            Live Demo <ArrowUpRight size={14} />
                                        </a>
                                        <a href="https://github.com/mayanksharmajind" target="_blank" rel="noopener noreferrer" className="btn-cinematic btn-glass" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
                                            GitHub <Github size={14} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE ROADMAP */}
            <section id="experience" style={{ padding: '6rem 0' }}>
                <div className="section-container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="eyebrow">Professional History</span>
                        <h2 className="gradient-text" style={{ fontSize: '3rem' }}>Experience & Milestones</h2>
                    </motion.div>

                    <div className="timeline-v3">
                        {data.experience.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeUp}
                                className="timeline-item-v3"
                            >
                                <div className="timeline-node"></div>
                                <div className="premium-card" style={{ padding: '2.25rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{exp.title}</h3>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-emerald)' }}>{exp.date}</span>
                                    </div>
                                    <h4 style={{ color: 'var(--color-indigo)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem' }}>
                                        {exp.company}
                                    </h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>{exp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EDUCATION & CERTIFICATIONS SIDE BY SIDE */}
            <section id="education" style={{ padding: '6rem 0' }}>
                <div className="section-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>

                    {/* Education Card Column */}
                    <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
                            <span className="eyebrow">Academic Records</span>
                            <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>Education</h2>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {data.education.map((edu, idx) => (
                                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="premium-card" style={{ padding: '1.75rem' }}>
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.35rem' }}>{edu.degree}</h3>
                                    <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.75rem' }}>{edu.school}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem' }}>
                                        <span style={{ color: 'var(--color-emerald)', fontWeight: 700 }}>{edu.date}</span>
                                        <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{edu.detail}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Card Column */}
                    <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
                            <span className="eyebrow">Validations</span>
                            <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>Certifications</h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="premium-card certs-banner"
                            style={{
                                padding: 0,
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                                height: '340px',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <img src={myCerts} alt="Certifications Array" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s' }} className="cert-panel-img" />
                        </motion.div>

                        <style>{`
                            .certs-banner:hover .cert-panel-img {
                                transform: scale(1.06) translateY(-3px);
                            }
                        `}</style>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {data.certifications.map((cert, idx) => (
                                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="premium-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Star size={18} color="var(--color-cyan)" style={{ flexShrink: 0 }} />
                                    <div style={{ flexGrow: 1 }}>
                                        <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>{cert.name}</h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            <span>{cert.source}</span>
                                            <span style={{ fontWeight: 700, color: 'var(--color-emerald)' }}>{cert.date}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* SPLIT CONTACT GATEWAY */}
            <section id="contact" style={{ padding: '6rem 0' }}>
                <div className="section-container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                        <span className="eyebrow">Encrypted Transmission</span>
                        <h2 className="gradient-text" style={{ fontSize: '3rem' }}>Transmit Request</h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'start' }} className="contact-grid-v3">

                        {/* Message Sender Left Column */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="premium-card"
                        >
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem' }}>Initialize Request</h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="contact-names-row">
                                    <input type="text" name="name" placeholder="Name" className="contact-input-v3" required />
                                    <input type="email" name="email" placeholder="Email" className="contact-input-v3" required />
                                </div>
                                <input type="text" name="subject" placeholder="Subject" className="contact-input-v3" required />
                                <textarea name="message" rows="5" placeholder="Details/Description..." className="contact-input-v3" style={{ resize: 'none' }} required></textarea>
                                <button type="submit" className="btn-cinematic btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={sending}>
                                    {sending ? 'Transmitting Signal...' : 'Send Signal'} <Mail size={18} />
                                </button>
                                {formStatus === 'success' && (
                                    <div style={{ color: 'var(--color-emerald)', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '0.75rem', padding: '0.85rem', marginTop: '0.5rem', fontSize: '0.85rem', textAlign: 'center', lineHeight: 1.4 }}>
                                        Transmission Successful. Signal dispatched to Mayank's server.
                                    </div>
                                )}
                                {formStatus === 'error' && (
                                    <div style={{ color: '#f43f5e', background: 'rgba(244, 63, 94, 0.05)', border: '1px solid rgba(244, 63, 94, 0.2)', borderRadius: '0.75rem', padding: '0.85rem', marginTop: '0.5rem', fontSize: '0.85rem', textAlign: 'center', lineHeight: 1.4 }}>
                                        Transmission Failed. Obtain a free Web3Forms access key and configure VITE_WEB3FORMS_KEY.
                                    </div>
                                )}
                            </form>
                        </motion.div>

                        {/* Interactive Direct Social Copies Right Column */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                        >
                            <div className="premium-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Channel Integration</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginTop: '-0.75rem' }}>
                                    Interact directly with these communication protocols. Click details to automatically clone to clipboard.
                                </p>

                                <CopyButton text={data.email}>
                                    {(copied) => (
                                        <div className="contact-card-item">
                                            <div style={{ width: '42px', height: '42px', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                                                <Mail size={18} color="var(--color-emerald)" />
                                            </div>
                                            <div style={{ flexGrow: 1 }}>
                                                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Secure Email</div>
                                                <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{data.email}</div>
                                            </div>
                                            <div style={{ color: copied ? 'var(--color-cyan)' : 'var(--text-muted)' }}>
                                                {copied ? <Check size={18} /> : <Copy size={18} />}
                                            </div>
                                        </div>
                                    )}
                                </CopyButton>

                                <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="contact-card-item">
                                        <div style={{ width: '42px', height: '42px', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                                            <Linkedin size={18} color="var(--color-cyan)" />
                                        </div>
                                        <div style={{ flexGrow: 1 }}>
                                            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>LinkedIn Gateway</div>
                                            <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>mayanksharmajind</div>
                                        </div>
                                        <ArrowUpRight size={18} color="var(--text-muted)" />
                                    </div>
                                </a>

                                <a href={data.social.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="contact-card-item">
                                        <div style={{ width: '42px', height: '42px', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                                            <Github size={18} color="var(--text-primary)" />
                                        </div>
                                        <div style={{ flexGrow: 1 }}>
                                            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>GitHub Protocol</div>
                                            <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>mayank-sharma</div>
                                        </div>
                                        <ArrowUpRight size={18} color="var(--text-muted)" />
                                    </div>
                                </a>

                                <div className="contact-card-item">
                                    <div style={{ width: '42px', height: '42px', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                                        <MapPin size={18} color="var(--color-purple)" />
                                    </div>
                                    <div style={{ flexGrow: 1 }}>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Base Location</div>
                                        <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>Haryana, {data.phone}</div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 868px) {
                    .contact-grid-v3 {
                        grid-template-columns: 1fr !important;
                    }
                    .contact-names-row {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            {/* PREMIUM DIGITAL FOOTER */}
            <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)', marginTop: '4rem', background: 'rgba(0,0,0,0.2)' }}>
                <div className="section-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '0 1.5rem' }}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href={data.social.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} className="social-icon">
                            <Github size={20} />
                        </a>
                        <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} className="social-icon">
                            <Linkedin size={20} />
                        </a>
                        <a href={data.social.email} style={{ color: 'var(--text-muted)' }} className="social-icon">
                            <Mail size={20} />
                        </a>
                    </div>
                    <div>
                        <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>&copy; {new Date().getFullYear()} Mayank Sharma. All rights reserved.</p>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', marginTop: '0.5rem' }}>Integrated Developer Canvas. Built with React & Framer Motion.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Portfolio;
