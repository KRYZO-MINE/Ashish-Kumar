// Initialize Website Content and Icons
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    lucide.createIcons();
    type();
    reveal();
    initHomeAnimation();
    initNavbar();
    initMobileMenu();
    initCursor();
});

function renderContent() {
    const root = document.getElementById('root');
    if (!root) return;

    root.innerHTML = `
    <div id="custom-cursor" class="fixed bg-white rounded-full pointer-events-none mix-blend-difference z-[9999] transition-all duration-300 ease-out hidden lg:block" style="width: 32px; height: 32px; transform: translate(-50%, -50%);"></div>

    <!-- Navbar -->
    <nav id="navbar" class="fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white text-black p-5 transition-shadow duration-300">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl lg:text-3xl font-extrabold cursor-pointer tracking-widest hover:scale-110 transition-transform" onclick="scrollToSection('home')">
                <span class="text-red-600">A</span>SHISH
            </h1>

            <ul class="hidden lg:flex items-center gap-x-7 font-semibold">
                <li class="group relative">
                    <button onclick="scrollToSection('about')">About</button>
                    <span class="w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-red-600 block"></span>
                </li>
                <li class="group relative">
                    <button onclick="scrollToSection('skills')">Skills</button>
                    <span class="w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-red-600 block"></span>
                </li>
                <li class="group relative">
                    <button onclick="scrollToSection('projects')">Projects</button>
                    <span class="w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-red-600 block"></span>
                </li>
                <li class="group relative">
                    <button onclick="scrollToSection('contact')">Contact</button>
                    <span class="w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-red-600 block"></span>
                </li>
            </ul>

            <a href="assets/AshishSharmaResume.pdf" target="_blank" class="hidden relative lg:inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition transform translate-x-1 translate-y-1 bg-red-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full border-2 border-red-600"></span>
                <span class="relative text-black group-hover:text-white flex items-center gap-x-3 transition">
                    Resume <i data-lucide="download" class="w-4 h-4"></i>
                </span>
            </a>

            <button class="lg:hidden text-2xl text-black" id="menu-btn">
                <i data-lucide="menu" id="menu-icon"></i>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden fixed top-0 right-0 h-full w-full bg-white text-black z-50 flex-col items-start p-10 transform translate-y-[-100%] transition-transform duration-300">
            <button class="absolute top-5 right-5 text-2xl" id="close-btn">
                <i data-lucide="x"></i>
            </button>
            <ul class="flex flex-col items-start ml-6 mt-20 gap-y-6 font-semibold text-xl">
                <li><button onclick="scrollToSection('about')">About</button></li>
                <li><button onclick="scrollToSection('skills')">Skills</button></li>
                <li><button onclick="scrollToSection('projects')">Projects</button></li>
                <li><button onclick="scrollToSection('contact')">Contact</button></li>
            </ul>
        </div>
    </nav>

    <!-- Home Section -->
    <section class="mt-20 bg-white text-black min-h-screen flex items-center overflow-hidden" id="home">
        <div class="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col gap-10 w-full">
            <div class="lg:w-[60%] space-y-6 opacity-0 translate-x-[-50px] transition-all duration-1000 text-center lg:text-left" id="home-left">
                <div class="text-3xl lg:text-6xl flex flex-col gap-3 lg:gap-6 font-bold">
                    <h2>Hello, <span class="text-red-500" id="typewriter"></span></h2>
                    <h2><span class="text-red-500">SEO</span> Executive</h2>
                    <h5>Based In <span class="text-red-500">India</span></h5>
                </div>
                <p class="text-gray-500 text-sm lg:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                    I seek challenging opportunities where I can fully use my skills for the success of the organization.
                    Specializing in SEO and Digital Marketing to drive impactful results.
                </p>
                <div class="flex items-center justify-center lg:justify-start gap-x-6 mt-10">
                    <a href="https://www.facebook.com/share/1CkuCDmYgH/" target="_blank" class="border border-gray-300 p-4 rounded-full text-gray-700 hover:scale-110 hover:border-red-500 hover:text-red-500 transition-all bg-white shadow-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/ashish-kumar-529b39229?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" class="border border-gray-300 p-4 rounded-full text-gray-700 hover:scale-110 hover:border-red-500 hover:text-red-500 transition-all bg-white shadow-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="https://youtube.com/@ashishkumar-qt7cx?si=Ni9Vn1CEIuQjVjKh" target="_blank" class="border border-gray-300 p-4 rounded-full text-gray-700 hover:scale-110 hover:border-red-500 hover:text-red-500 transition-all bg-white shadow-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                    </a>
                    <a href="https://wa.me/917015316550" target="_blank" class="border border-gray-300 p-4 rounded-full text-gray-700 hover:scale-110 hover:border-red-500 hover:text-red-500 transition-all bg-white shadow-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                    </a>
                </div>
            </div>
            <div class="lg:w-[40%] flex justify-center opacity-0 translate-x-[50px] transition-all duration-1000" id="home-right">
                <div class="relative group px-4 lg:px-0">
                    <img src="assets/Me.jpg" alt="Ashish Kumar" class="rounded-2xl shadow-2xl w-full max-w-[280px] lg:max-w-sm object-cover transition duration-500 group-hover:scale-105">
                    <div class="absolute -bottom-4 -right-2 lg:-bottom-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 bg-red-600 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 bg-white text-black" id="skills">
        <div class="px-5 lg:px-28">
            <h2 class="text-2xl lg:text-4xl text-center font-bold tracking-wide reveal reveal-up">
                My <span class="text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]">Skills</span>
            </h2>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-7 lg:mt-16 place-items-center" id="skills-grid">
                <div class="bg-white border-2 border-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 skill-card reveal reveal-up">
                    <i data-lucide="search" class="w-12 h-12"></i>
                    <p class="text-center font-bold">SEO</p>
                </div>
                <div class="bg-white border-2 border-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 skill-card reveal reveal-up">
                    <i data-lucide="trending-up" class="w-12 h-12"></i>
                    <p class="text-center font-bold">Digital Marketing</p>
                </div>
                <div class="bg-white border-2 border-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 skill-card reveal reveal-up">
                    <i data-lucide="monitor" class="w-12 h-12"></i>
                    <p class="text-center font-bold">Computer Application</p>
                </div>
                <div class="bg-white border-2 border-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 skill-card reveal reveal-up">
                    <i data-lucide="calculator" class="w-12 h-12"></i>
                    <p class="text-center font-bold">Tally Prime</p>
                </div>
                <div class="bg-white border-2 border-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 skill-card reveal reveal-up">
                    <i data-lucide="message-square" class="w-12 h-12"></i>
                    <p class="text-center font-bold">Communication</p>
                </div>
                <div class="bg-white border-2 border-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 skill-card reveal reveal-up">
                    <i data-lucide="users" class="w-12 h-12"></i>
                    <p class="text-center font-bold">People Skills</p>
                </div>
                <div class="bg-white border-2 border-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 skill-card reveal reveal-up">
                    <i data-lucide="brain" class="w-12 h-12"></i>
                    <p class="text-center font-bold">Problem Solving</p>
                </div>
                <div class="bg-white border-2 border-black hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 skill-card reveal reveal-up">
                    <i data-lucide="briefcase" class="w-12 h-12"></i>
                    <p class="text-center font-bold">Organizational</p>
                </div>
            </div>
        </div>

        <div class="w-full my-8 py-10 lg:my-16 lg:py-16 bg-white">
            <h2 class="text-2xl lg:text-4xl text-center font-bold tracking-wide reveal reveal-up">
                My <span class="text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]">Education</span>
            </h2>
            <div class="px-5 lg:px-28 mt-10 space-y-8">
                <div class="border border-gray-300 p-6 rounded-lg hover:border-red-600 transition reveal reveal-up">
                    <h2 class="text-xl lg:text-2xl font-semibold">Graduation at <span class="text-red-600">Guru Jambheshwar University of Science & Technology</span></h2>
                    <p class="text-gray-500 mt-3">Hisar | Status: Pending</p>
                </div>
                <div class="border border-gray-300 p-6 rounded-lg hover:border-red-600 transition reveal reveal-up">
                    <h2 class="text-xl lg:text-2xl font-semibold">12th Grade at <span class="text-red-600">OP Jindal Modern School</span></h2>
                    <p class="text-gray-500 mt-3">Hisar | Score: 82.6% | Year: 2021</p>
                </div>
                <div class="border border-gray-300 p-6 rounded-lg hover:border-red-600 transition reveal reveal-up">
                    <h2 class="text-xl lg:text-2xl font-semibold">10th Grade at <span class="text-red-600">OP Jindal Modern School</span></h2>
                    <p class="text-gray-500 mt-3">Hisar | Score: 69.4% | Year: 2019</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-center mt-10">
                    <div class="border border-gray-300 p-6 rounded-lg hover:bg-red-600 hover:text-white transition reveal reveal-up">
                        <h2 class="text-3xl font-bold">SEO Executive</h2>
                        <p>Experience since Nov 2024</p>
                    </div>
                    <div class="border border-gray-300 p-6 rounded-lg hover:bg-red-600 hover:text-white transition reveal reveal-up">
                        <h2 class="text-3xl font-bold">Digital Marketing</h2>
                        <p>Certified Professional</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="px-5 lg:px-28 py-12 bg-white text-black flex justify-between flex-col lg:flex-row items-center gap-10 overflow-hidden" id="about">
        <div class="lg:w-1/2 flex justify-center reveal reveal-left">
            <img src="assets/Me.jpg" alt="About Me" class="h-[300px] lg:h-[400px] w-auto mx-auto rounded-3xl shadow-2xl hover:scale-105 transition duration-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.15)] object-cover">
        </div>
        <div class="lg:w-1/2 reveal reveal-right text-center lg:text-left">
            <h2 class="lg:text-4xl text-2xl mt-4 lg:mt-0 font-bold tracking-wide">
                About <span class="font-extrabold text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]">Me</span>
            </h2>
            <div class="w-16 h-[3px] bg-red-600 mt-2 mb-6 rounded mx-auto lg:mx-0"></div>
            <p class="text-gray-500 text-sm/6 lg:text-base mt-5 lg:mt-6 leading-relaxed">
                I'm <span class="text-red-600 font-semibold">Ashish Kumar</span>, a dedicated professional with a strong background in SEO and Digital Marketing. I focus on delivering results that help organizations grow and succeed.
            </p>
            <p class="text-gray-500 text-sm/6 lg:text-base mt-4 leading-relaxed">
                I specialize in <span class="text-red-600 font-semibold">SEO Strategy</span>, Keyword Research, and Backlink building. My goal is to use my analytical and creative skills to drive organic growth and enhance digital presence.
            </p>
            <div class="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                <span class="text-sm px-4 py-2 bg-gray-50 border border-gray-200 rounded-full hover:border-red-600 hover:text-red-600 transition-all cursor-default">SEO Executive</span>
                <span class="text-sm px-4 py-2 bg-gray-50 border border-gray-200 rounded-full hover:border-red-600 hover:text-red-600 transition-all cursor-default">Digital Marketing</span>
                <span class="text-sm px-4 py-2 bg-gray-50 border border-gray-200 rounded-full hover:border-red-600 hover:text-red-600 transition-all cursor-default">Tally Prime</span>
            </div>
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                    <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
                        <i data-lucide="languages" class="w-5 h-5 text-red-600"></i> Languages
                    </h3>
                    <ul class="text-gray-500 text-sm space-y-1">
                        <li>• Hindi (Native)</li>
                        <li>• English (Professional)</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
                        <i data-lucide="heart" class="w-5 h-5 text-red-600"></i> Interests
                    </h3>
                    <ul class="text-gray-500 text-sm space-y-1">
                        <li>• Cycling</li>
                        <li>• Volleyball & Cricket</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="bg-white px-5 lg:px-28 py-16 text-black" id="projects">
        <h2 class="text-3xl lg:text-5xl text-center mb-12 font-bold reveal reveal-up">
            My <span class="text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]">Projects</span>
        </h2>
        <div class="space-y-16" id="projects-container">
            <!-- Project 1 -->
            <div class="flex items-center flex-col lg:flex-row gap-10 project-item reveal reveal-up text-center lg:text-left">
                <div class="lg:w-[500px] w-full rounded-2xl overflow-hidden border border-gray-300">
                    <img src="assets/cel.jpg" alt="SEO Optimization" class="w-full h-full object-cover transition duration-500 hover:scale-110 hover:brightness-90">
                </div>
                <div class="lg:w-1/2 space-y-4">
                    <h2 class="text-4xl lg:text-5xl font-extrabold text-red-600">01</h2>
                    <p class="font-bold text-black text-2xl lg:text-3xl">SEO & Keyword Research</p>
                    <p class="text-gray-500 text-sm lg:text-base leading-relaxed">Certified in Keyword Research by Semrush Academy. Specialized in driving organic traffic and optimizing search engine rankings.</p>
                </div>
            </div>
            <!-- Project 2 -->
            <div class="flex items-center flex-col lg:flex-row-reverse gap-10 project-item reveal reveal-up text-center lg:text-right">
                <div class="lg:w-[500px] w-full rounded-2xl overflow-hidden border border-gray-300">
                    <img src="assets/game.png" alt="Tally Prime" class="w-full h-full object-cover transition duration-500 hover:scale-110 hover:brightness-90">
                </div>
                <div class="lg:w-1/2 space-y-4">
                    <h2 class="text-4xl lg:text-5xl font-extrabold text-red-600">02</h2>
                    <p class="font-bold text-black text-2xl lg:text-3xl">Financial Accounting with Tally</p>
                    <p class="text-gray-500 text-sm lg:text-base leading-relaxed">Expertise in Tally Prime for financial management and accounting, certified by Garg Account Solution.</p>
                </div>
            </div>
            <!-- Project 3 -->
            <div class="flex items-center flex-col lg:flex-row gap-10 project-item reveal reveal-up text-center lg:text-left">
                <div class="lg:w-[500px] w-full rounded-2xl overflow-hidden border border-gray-300">
                    <img src="assets/port.png" alt="Financial Literacy" class="w-full h-full object-cover transition duration-500 hover:scale-110 hover:brightness-90">
                </div>
                <div class="lg:w-1/2 space-y-4">
                    <h2 class="text-4xl lg:text-5xl font-extrabold text-red-600">03</h2>
                    <p class="font-bold text-black text-2xl lg:text-3xl">Financial Literacy Program</p>
                    <p class="text-gray-500 text-sm lg:text-base leading-relaxed">Participated in the "Kona Kona Shiksha" program by NISM, gaining deep insights into financial markets and literacy.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-white text-black lg:my-20 my-10 lg:px-28 px-5 py-10" id="contact">
        <h2 class="text-3xl lg:text-5xl text-center mb-16 font-bold reveal reveal-up">
            Contact <span class="text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]">Me</span>
        </h2>
        <div class="flex justify-between flex-col lg:flex-row gap-16 lg:gap-10">
            <!-- Left Side: Contact Info -->
            <div class="lg:w-[45%] w-full reveal reveal-left space-y-8">
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold">Let's Talk!</h3>
                    <p class="text-gray-500">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                </div>
                <div class="space-y-6">
                    <div class="flex items-center gap-5">
                        <div class="bg-red-100 p-4 rounded-xl text-red-600 shadow-sm">
                            <i data-lucide="phone" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400 font-medium">Call Me</p>
                            <p class="font-bold text-lg">+91 7015316550</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-5">
                        <div class="bg-red-100 p-4 rounded-xl text-red-600 shadow-sm">
                            <i data-lucide="mail" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400 font-medium">Email Me</p>
                            <p class="font-bold text-lg">ashish701531@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-5">
                        <div class="bg-red-100 p-4 rounded-xl text-red-600 shadow-sm">
                            <i data-lucide="map-pin" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400 font-medium">Location</p>
                            <p class="font-bold text-lg">Hisar, Haryana, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Side: Contact Form -->
            <div class="lg:w-[50%] w-full reveal reveal-right bg-gray-50 p-6 lg:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <form class="space-y-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-gray-600 ml-1">Name</label>
                            <input class="bg-white border border-gray-200 px-5 py-4 rounded-xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-all shadow-sm" type="text" placeholder="Your name" required>
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-gray-600 ml-1">Email</label>
                            <input class="bg-white border border-gray-200 px-5 py-4 rounded-xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-all shadow-sm" type="email" placeholder="Email" required>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm font-semibold text-gray-600 ml-1">Website (Optional)</label>
                        <input class="bg-white border border-gray-200 px-5 py-4 rounded-xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-all shadow-sm" type="text" placeholder="https://yourwebsite.com">
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm font-semibold text-gray-600 ml-1">Message</label>
                        <textarea class="bg-white border border-gray-200 px-5 py-4 h-40 rounded-xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 resize-none transition-all shadow-sm" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-200 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                        Send Message <i data-lucide="send" class="w-5 h-5"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16 border-t border-gray-200">
        <h2 class="text-black text-lg lg:text-2xl font-extrabold tracking-widest cursor-pointer" onclick="scrollToSection('home')">
            <span class="text-red-600 drop-shadow-[0_0_4px_rgba(239,68,68,0.4)]">A</span>SHISH
        </h2>
        <div class="text-gray-600 lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3">
            <p>© 2026 Personal Portfolio</p>
            <p class="hover:text-red-600 transition cursor-pointer">Made by -AC</p>
        </div>
    </footer>
    `;
}

// Navbar Scroll Effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('navbar-shadow');
        } else {
            navbar.classList.remove('navbar-shadow');
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && closeBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.style.transform = 'translateY(0)';
            }, 10);
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    }
}

// Scroll to Section
function scrollToSection(id) {
    const section = document.getElementById(id);
    const mobileMenu = document.getElementById('mobile-menu');
    if (section) {
        const offset = 110;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    // Close mobile menu if open
    if (mobileMenu) {
        mobileMenu.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
}

// Custom Cursor
function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const hoverElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, button, a, .skill-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '80px';
                cursor.style.height = '80px';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '32px';
                cursor.style.height = '32px';
            });
        });
    }
}

// Typewriter Animation
const typewriterText = "I'm Ashish Kumar";
let i = 0;

function type() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    if (i < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(type, 150);
    } else {
        setTimeout(() => {
            typewriterElement.innerHTML = "";
            i = 0;
            type();
        }, 2000);
    }
}

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// Home Animation Initial
function initHomeAnimation() {
    const homeLeft = document.getElementById('home-left');
    const homeRight = document.getElementById('home-right');
    if (homeLeft && homeRight) {
        homeLeft.style.opacity = '1';
        homeLeft.style.transform = 'translateX(0)';
        homeRight.style.opacity = '1';
        homeRight.style.transform = 'translateX(0)';
    }
}

// Security: Prevent Source Code Copying Deterrents
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    // Prevent F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }
    // Prevent Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }
});

// Disable dragging of images
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });
});

