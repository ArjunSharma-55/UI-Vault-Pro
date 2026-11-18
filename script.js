// ===== DATA FOR ALL 7 CATEGORIES (20 ITEMS EACH = 140 ITEMS) =====
const DATA = [
  {
    id: "loaders",
    title: "⏳ 20+ Loading Animations",
    items: [
      { name: "Classic Spinner", tag: "minimal", desc: "Smooth single-border rotational loader.", preview: `<div class="ld-1"></div>`, code: `<div class="spinner"></div>
<style>.spinner{width:38px;height:38px;border:4px solid #334155;border-top-color:#6366f1;border-radius:50%;animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}</style>`, tw: `<div class="w-10 h-10 border-4 border-slate-700 border-t-indigo-500 rounded-full animate-spin"></div>` },
      { name: "Dual Orbit Ring", tag: "neon", desc: "Opposite-colored top & bottom arc spinner.", preview: `<div class="ld-2"></div>`, code: `<div class="dual-ring"></div>
<style>.dual-ring{width:38px;height:38px;border:4px solid transparent;border-top-color:#ec4899;border-bottom-color:#6366f1;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}</style>`, tw: `<div class="w-10 h-10 border-4 border-transparent border-t-pink-500 border-b-indigo-500 rounded-full animate-spin"></div>` },
      { name: "Bouncing Dots", tag: "minimal", desc: "Staggered three-dot vertical bounce.", preview: `<div class="ld-3"><span></span><span></span><span></span></div>`, code: `<div class="dots"><span></span><span></span><span></span></div>
<style>.dots{display:flex;gap:6px}.dots span{width:10px;height:10px;background:#6366f1;border-radius:50%;animation:bounce .6s infinite alternate}.dots span:nth-child(2){animation-delay:.2s}.dots span:nth-child(3){animation-delay:.4s}@keyframes bounce{to{transform:translateY(-10px)}}</style>`, tw: `<div class="flex gap-1.5"><span class="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-bounce"></span><span class="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></span></div>` },
      { name: "Pulse Beacon", tag: "neon", desc: "Expanding radar-style pulse circle.", preview: `<div class="ld-4"></div>`, code: `<div class="pulse-beacon"></div>
<style>.pulse-beacon{width:36px;height:36px;background:#ec4899;border-radius:50%;animation:pulse 1.2s infinite}@keyframes pulse{0%{transform:scale(.7);opacity:1}100%{transform:scale(1.4);opacity:0}}</style>`, tw: `<span class="w-9 h-9 rounded-full bg-pink-500 animate-ping"></span>` },
      { name: "Audio Equalizer Bars", tag: "interactive", desc: "Rhythmic vertical soundwave bars.", preview: `<div class="ld-5"><span></span><span></span><span></span><span></span></div>`, code: `<div class="eq-bars"><span></span><span></span><span></span><span></span></div>
<style>.eq-bars{display:flex;gap:4px;align-items:flex-end;height:32px}.eq-bars span{width:5px;height:100%;background:#10b981;animation:wave .9s infinite ease-in-out}@keyframes wave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}</style>`, tw: `<div class="flex items-end gap-1 h-8"><span class="w-1.5 h-full bg-emerald-400 animate-pulse"></span></div>` },
      { name: "3D Flip Square", tag: "minimal", desc: "Perspective X/Y axis rotating square.", preview: `<div class="ld-6"></div>`, code: `<div class="flip-sq"></div>
<style>.flip-sq{width:34px;height:34px;background:#6366f1;animation:flip 1.2s infinite ease-in-out}@keyframes flip{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-180deg)}}</style>`, tw: `<div class="w-8 h-8 bg-indigo-500 animate-spin"></div>` },
      { name: "Indeterminate Progress", tag: "minimal", desc: "Sliding horizontal bar for unknown wait times.", preview: `<div class="ld-7"></div>`, code: `<div class="progress-slide"></div>
<style>.progress-slide{width:120px;height:6px;background:#27334f;border-radius:99px;overflow:hidden}.progress-slide::after{content:'';display:block;width:45%;height:100%;background:#6366f1;animation:slide 1.1s infinite}@keyframes slide{0%{transform:translateX(-100%)}100%{transform:translateX(240%)}}</style>`, tw: `<div class="w-32 h-1.5 bg-slate-700 rounded-full overflow-hidden"><div class="w-1/2 h-full bg-indigo-500 animate-pulse"></div></div>` },
      { name: "Dashed Gear Ring", tag: "minimal", desc: "Slowly rotating dashed circle.", preview: `<div class="ld-8"></div>`, code: `<div class="dashed-ring"></div>
<style>.dashed-ring{width:40px;height:40px;border-radius:50%;border:3px dashed #10b981;animation:spin 3s linear infinite}</style>`, tw: `<div class="w-10 h-10 rounded-full border-2 border-dashed border-emerald-400 animate-spin"></div>` },
      { name: "Water Ripple", tag: "neon", desc: "Concentric expanding fade circles.", preview: `<div class="ld-9"></div>`, code: `<div class="ripple"></div>
<style>.ripple{width:36px;height:36px;position:relative}.ripple::before,.ripple::after{content:'';position:absolute;inset:0;border-radius:50%;background:#6366f1;opacity:.6;animation:rip 1.5s infinite}.ripple::after{animation-delay:.75s}@keyframes rip{0%{transform:scale(0);opacity:.8}100%{transform:scale(1.3);opacity:0}}</style>`, tw: `<div class="w-9 h-9 rounded-full bg-indigo-500/60 animate-ping"></div>` },
      { name: "Morphing Shape", tag: "interactive", desc: "Smooth transition between square and circle.", preview: `<div class="ld-10"></div>`, code: `<div class="morph-box"></div>
<style>.morph-box{width:32px;height:32px;border:3px solid #ec4899;animation:morph 1.6s infinite}@keyframes morph{0%,100%{border-radius:0;transform:rotate(0)}50%{border-radius:50%;transform:rotate(180deg)}}</style>`, tw: `<div class="w-8 h-8 border-2 border-pink-500 animate-spin rounded-lg"></div>` },
      { name: "Conic Gradient Sweep", tag: "neon", desc: "Modern smooth gradient arc spinner.", preview: `<div class="ld-11"></div>`, code: `<div class="conic-loader"></div>
<style>.conic-loader{width:40px;height:40px;border-radius:50%;background:conic-gradient(transparent,#6366f1);animation:spin .9s linear infinite;-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 5px),#000 0)}</style>`, tw: `<div class="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-transparent animate-spin"></div>` },
      { name: "3x3 Matrix Grid", tag: "minimal", desc: "Alternating opacity matrix cubes.", preview: `<div class="ld-12"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`, code: `<div class="matrix-grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`, tw: `<div class="grid grid-cols-3 gap-1"><span class="w-2.5 h-2.5 bg-indigo-500 animate-pulse"></span></div>` },
      { name: "Rotating Frame", tag: "minimal", desc: "Minimal geometric rotating square border.", preview: `<div class="ld-13"></div>`, code: `<div class="rot-frame"></div>`, tw: `<div class="w-7 h-7 border-2 border-white rounded animate-spin"></div>` },
      { name: "Skeleton Shimmer", tag: "minimal", desc: "Content placeholder shimmer sweep.", preview: `<div class="ld-14"></div>`, code: `<div class="skeleton-bar"></div>`, tw: `<div class="w-24 h-4 bg-slate-700 rounded animate-pulse"></div>` },
      { name: "Comet Trail", tag: "neon", desc: "High-speed tapered arc spinner.", preview: `<div class="ld-15"></div>`, code: `<div class="comet"></div>`, tw: `<div class="w-11 h-11 rounded-full border-t-2 border-amber-400 animate-spin"></div>` },
      { name: "Orbital Swap", tag: "interactive", desc: "Two colored dots swapping positions.", preview: `<div class="ld-16"><span></span><span></span></div>`, code: `<div class="orb-swap"><span></span><span></span></div>`, tw: `<div class="flex gap-2"><span class="w-3 h-3 rounded-full bg-pink-500 animate-bounce"></span><span class="w-3 h-3 rounded-full bg-sky-400 animate-bounce"></span></div>` },
      { name: "Quad Dot Wheel", tag: "neon", desc: "Four colorful orbiting dots.", preview: `<div class="ld-17"></div>`, code: `<div class="quad-wheel"></div>`, tw: `<div class="w-8 h-8 rounded-full animate-spin border-4 border-dotted border-indigo-400"></div>` },
      { name: "Split Arc Spinner", tag: "minimal", desc: "Symmetrical dual-side green arcs.", preview: `<div class="ld-18"></div>`, code: `<div class="split-arc"></div>`, tw: `<div class="w-9 h-9 rounded-full border-4 border-slate-700 border-x-emerald-400 animate-spin"></div>` },
      { name: "Monospace Blink", tag: "minimal", desc: "Terminal-style LOADING status text.", preview: `<div class="ld-19">LOADING...</div>`, code: `<div class="mono-load">LOADING...</div>`, tw: `<span class="font-mono text-sm tracking-widest animate-pulse">LOADING...</span>` },
      { name: "Counter-Spin Nested", tag: "neon", desc: "Outer and inner rings spinning opposite ways.", preview: `<div class="ld-20"></div>`, code: `<div class="nested-spin"></div>`, tw: `<div class="relative w-9 h-9 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>` }
    ]
  },
  {
    id: "text-anim",
    title: "✍️ 20+ Text Animations",
    items: [
      { name: "Gradient Flow", tag: "neon", desc: "Animated multi-color shifting gradient text.", preview: `<div class="txt-demo tx-1">Aurora Text</div>`, code: `<h2 class="grad-text">Aurora Text</h2>`, tw: `<h2 class="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-emerald-400 bg-clip-text text-transparent">Aurora Text</h2>` },
      { name: "Typewriter Cursor", tag: "minimal", desc: "Classic step-by-step typing reveal.", preview: `<div class="txt-demo tx-2">Hello World!_</div>`, code: `<div class="typewriter">Hello World!_</div>`, tw: `<span class="font-mono border-r-2 border-indigo-500 pr-1">Hello World!</span>` },
      { name: "Neon Glow Pulse", tag: "neon", desc: "Cyberpunk glowing text shadow pulse.", preview: `<div class="txt-demo tx-3">NEON VIBE</div>`, code: `<div class="neon-txt">NEON VIBE</div>`, tw: `<span class="font-bold text-white drop-shadow-[0_0_12px_#ec4899] animate-pulse">NEON VIBE</span>` },
      { name: "Tracking Expand", tag: "minimal", desc: "Smooth letter-spacing expansion.", preview: `<div class="txt-demo tx-4">CINEMA</div>`, code: `<div class="tracking">CINEMA</div>`, tw: `<span class="uppercase tracking-[0.35em] font-bold">CINEMA</span>` },
      { name: "Levitate Float", tag: "minimal", desc: "Gentle vertical floating headline.", preview: `<div class="txt-demo tx-5">Floating UI</div>`, code: `<div class="float-txt">Floating UI</div>`, tw: `<span class="inline-block animate-bounce font-bold">Floating UI</span>` },
      { name: "RGB Glitch", tag: "neon", desc: "Chromatic aberration offset jitter.", preview: `<div class="txt-demo tx-6">GLITCH 404</div>`, code: `<div class="glitch">GLITCH 404</div>`, tw: `<span class="font-black text-white drop-shadow-[2px_0_0_#ec4899]">GLITCH 404</span>` },
      { name: "Metallic Shimmer", tag: "minimal", desc: "Light sweep across muted typography.", preview: `<div class="txt-demo tx-7">PREMIUM</div>`, code: `<div class="shimmer-txt">PREMIUM</div>`, tw: `<span class="font-bold text-slate-300 animate-pulse">PREMIUM</span>` },
      { name: "Rubber Band", tag: "interactive", desc: "Elastic stretch & squash bounce.", preview: `<div class="txt-demo tx-8">BOUNCE!</div>`, code: `<div class="rubber">BOUNCE!</div>`, tw: `<span class="inline-block hover:scale-x-125 transition-transform font-extrabold">BOUNCE!</span>` },
      { name: "3D Flip Reveal", tag: "interactive", desc: "X-axis rotational flip animation.", preview: `<div class="txt-demo tx-9">FLIP 3D</div>`, code: `<div class="flip-txt">FLIP 3D</div>`, tw: `<span class="inline-block font-bold">FLIP 3D</span>` },
      { name: "Underline Pulse", tag: "minimal", desc: "Color-shifting bottom accent bar.", preview: `<div class="txt-demo tx-10">Active Link</div>`, code: `<span class="ul-pulse">Active Link</span>`, tw: `<span class="border-b-2 border-pink-500 pb-1 font-semibold">Active Link</span>` },
      { name: "Blur-to-Focus", tag: "minimal", desc: "Cinematic depth-of-field focus reveal.", preview: `<div class="txt-demo tx-11">Focus In</div>`, code: `<div class="blur-in">Focus In</div>`, tw: `<span class="blur-none transition-all duration-700 font-bold">Focus In</span>` },
      { name: "Pendulum Swing", tag: "interactive", desc: "Top-anchored gentle swing motion.", preview: `<div class="txt-demo tx-12">Hanging Tag</div>`, code: `<div class="swing">Hanging Tag</div>`, tw: `<span class="inline-block origin-top hover:rotate-6 transition">Hanging Tag</span>` },
      { name: "Liquid Fill Up", tag: "neon", desc: "Vertical color fill rising inside text.", preview: `<div class="txt-demo tx-13">LIQUID</div>`, code: `<div class="liquid-txt">LIQUID</div>`, tw: `<span class="bg-gradient-to-t from-indigo-500 to-white bg-clip-text text-transparent font-black">LIQUID</span>` },
      { name: "Heartbeat Zoom", tag: "interactive", desc: "Subtle scale pulse for emphasis.", preview: `<div class="txt-demo tx-14">HOT DEAL</div>`, code: `<div class="zoom-txt">HOT DEAL</div>`, tw: `<span class="inline-block animate-pulse font-extrabold text-amber-400">HOT DEAL</span>` },
      { name: "Strikethrough Flash", tag: "minimal", desc: "Discount price animated strike.", preview: `<div class="txt-demo tx-15">$199.00</div>`, code: `<span class="strike">$199.00</span>`, tw: `<span class="line-through decoration-pink-500 text-slate-400">$199.00</span>` },
      { name: "Kinetic Skew", tag: "interactive", desc: "Dynamic italic slant oscillation.", preview: `<div class="txt-demo tx-16">FAST TRACK</div>`, code: `<div class="skew-txt">FAST TRACK</div>`, tw: `<span class="-skew-x-12 inline-block font-extrabold">FAST TRACK</span>` },
      { name: "Outline Stroke Fill", tag: "neon", desc: "Hollow stroke transitioning to solid fill.", preview: `<div class="txt-demo tx-17">OUTLINE</div>`, code: `<div class="stroke-txt">OUTLINE</div>`, tw: `<span class="font-black text-indigo-400">OUTLINE</span>` },
      { name: "Horizontal Wobble", tag: "interactive", desc: "Attention-grabbing side shake.", preview: `<div class="txt-demo tx-18">ALERT!</div>`, code: `<div class="wobble">ALERT!</div>`, tw: `<span class="font-bold text-rose-500">ALERT!</span>` },
      { name: "Terminal Blink", tag: "minimal", desc: "Hacker console blinking prompt.", preview: `<div class="txt-demo tx-19">&gt;_ SYSTEM OK</div>`, code: `<code>&gt;_ SYSTEM OK</code>`, tw: `<code class="font-mono text-emerald-400 animate-pulse">&gt;_ SYSTEM OK</code>` },
      { name: "Solar Flare Gradient", tag: "neon", desc: "Warm radial gradient text pulse.", preview: `<div class="txt-demo tx-20">IGNITE</div>`, code: `<div class="solar">IGNITE</div>`, tw: `<span class="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent font-black">IGNITE</span>` }
    ]
  },
  {
    id: "micro",
    title: "⚡ 20+ Micro-Interactions",
    items: [
      { name: "Elevation Lift Button", tag: "interactive", desc: "Hover lifts button with soft shadow.", preview: `<button class="mi-btn mi-lift">Hover Me</button>`, code: `<button class="btn-lift">Hover Me</button>`, tw: `<button class="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:-translate-y-1 hover:shadow-lg transition">Hover Me</button>` },
      { name: "Tactile Press Scale", tag: "interactive", desc: "Click compresses button like a real key.", preview: `<button class="mi-btn mi-press">Click & Hold</button>`, code: `<button class="btn-press">Click & Hold</button>`, tw: `<button class="px-4 py-2 rounded-lg bg-indigo-600 text-white active:scale-95 transition">Click & Hold</button>` },
      { name: "Neon Glow Shift", tag: "neon", desc: "Hover triggers vibrant pink aura.", preview: `<button class="mi-btn mi-glow">Glow Action</button>`, code: `<button class="btn-glow">Glow Action</button>`, tw: `<button class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-pink-500 hover:shadow-[0_0_18px_#ec4899] text-white transition">Glow Action</button>` },
      { name: "Slide Fill Sweep", tag: "interactive", desc: "Background fills horizontally on hover.", preview: `<button class="mi-btn mi-slide">Slide Fill</button>`, code: `<button class="btn-slide">Slide Fill</button>`, tw: `<button class="px-4 py-2 rounded-lg border border-indigo-500 hover:bg-indigo-600 transition">Slide Fill</button>` },
      { name: "iOS Switch Toggle", tag: "interactive", desc: "Interactive smooth pill switch (click it!).", preview: `<button class="mi-toggle" aria-label="Toggle Switch" onclick="this.classList.toggle('on')"></button>`, code: `<button class="toggle" onclick="this.classList.toggle('on')"></button>`, tw: `<button class="w-12 h-7 rounded-full bg-slate-700 p-1 transition"><span class="block w-5 h-5 rounded-full bg-white"></span></button>` },
      { name: "Like Heart Pop", tag: "interactive", desc: "Click to toggle favorited state.", preview: `<button class="mi-btn" onclick="this.textContent = this.textContent.includes('🤍') ? '❤️ Liked!' : '🤍 Like'">🤍 Like</button>`, code: `<button onclick="toggleLike(this)">🤍 Like</button>`, tw: `<button class="px-4 py-2 rounded-lg bg-slate-800 text-white active:scale-110 transition">🤍 Like</button>` },
      { name: "Copy-to-Clipboard Feedback", tag: "interactive", desc: "Instant checkmark confirmation state.", preview: `<button class="mi-btn" onclick="this.textContent='✅ Copied!';setTimeout(()=>this.textContent='📋 Copy Link',1200)">📋 Copy Link</button>`, code: `<button onclick="copyFeedback(this)">📋 Copy Link</button>`, tw: `<button class="px-4 py-2 rounded-lg bg-indigo-600 text-white">📋 Copy Link</button>` },
      { name: "Expandable Search Pill", tag: "minimal", desc: "Focus smoothly widens input field.", preview: `<input placeholder="Focus me..." style="width:110px;transition:.3s;padding:7px;border-radius:20px;border:1px solid #6366f1;background:transparent;color:inherit" onfocus="this.style.width='170px'" onblur="this.style.width='110px'">`, code: `<input class="expand-search" />`, tw: `<input class="w-28 focus:w-44 transition-all px-3 py-1.5 rounded-full border border-indigo-500 bg-transparent outline-none" />` },
      { name: "Star Rating Selector", tag: "interactive", desc: "Interactive click rating feedback.", preview: `<div style="font-size:1.3rem;cursor:pointer" onclick="this.textContent=this.textContent==='⭐⭐⭐⭐⭐'?'⭐⭐⭐☆☆':'⭐⭐⭐⭐⭐'">⭐⭐⭐☆☆</div>`, code: `<div class="stars">⭐⭐⭐☆☆</div>`, tw: `<div class="text-xl cursor-pointer select-none">⭐⭐⭐☆☆</div>` },
      { name: "Notification Bell Shake", tag: "interactive", desc: "Click bell to trigger alert badge.", preview: `<button class="mi-btn" onclick="this.textContent='🔔 3 New!'">🔔 Check Alerts</button>`, code: `<button class="bell-btn">🔔</button>`, tw: `<button class="px-3 py-2 rounded-lg bg-slate-800 hover:animate-bounce">🔔 Check Alerts</button>` },
      { name: "Counter Stepper", tag: "interactive", desc: "Interactive +1 increment pill.", preview: `<button class="mi-btn" data-c="1" onclick="this.dataset.c++;this.textContent='Qty: '+this.dataset.c">Qty: 1</button>`, code: `<button class="stepper">Qty: 1</button>`, tw: `<button class="px-4 py-1.5 rounded-full bg-indigo-600 text-white font-semibold">Qty: 1</button>` },
      { name: "Accordion Drawer", tag: "minimal", desc: "Click to toggle hidden details smoothly.", preview: `<div style="text-align:center"><button class="btn-code" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display==='none'?'block':'none'">Toggle Info ▾</button><div style="display:none;font-size:.75rem;margin-top:6px;color:#10b981">Hidden micro-panel revealed!</div></div>`, code: `<div class="accordion">...</div>`, tw: `<details class="text-sm"><summary class="cursor-pointer">Toggle Info</summary><p class="text-emerald-400 mt-1">Revealed!</p></details>` },
      { name: "Progress Step Pill", tag: "interactive", desc: "Click to advance completion percentage.", preview: `<button class="mi-btn" data-p="25" onclick="this.dataset.p=(+this.dataset.p>=100?25:+this.dataset.p+25);this.textContent='Progress: '+this.dataset.p+'%'">Progress: 25%</button>`, code: `<button class="step-pill">Progress: 25%</button>`, tw: `<button class="px-4 py-2 rounded-lg bg-emerald-600 text-white">Progress: 25%</button>` },
      { name: "Password Visibility Eye", tag: "minimal", desc: "Toggle masked vs plain text input.", preview: `<div style="display:flex;gap:4px"><input type="password" value="secret123" style="width:95px;padding:5px;border-radius:6px;border:1px solid #475569;background:transparent;color:inherit"><button class="btn-code" onclick="const i=this.previousElementSibling;i.type=i.type==='password'?'text':'password'">👁️</button></div>`, code: `<input type="password" /><button>👁️</button>`, tw: `<div class="flex gap-1"><input type="password" class="border rounded px-2 py-1" /><button>👁️</button></div>` },
      { name: "Bookmark Ribbon Toggle", tag: "interactive", desc: "Save/Unsave item state switch.", preview: `<button class="mi-btn" onclick="this.textContent=this.textContent==='🔖 Save'?'✅ Saved':'🔖 Save'">🔖 Save</button>`, code: `<button class="bookmark">🔖 Save</button>`, tw: `<button class="px-3 py-1.5 rounded-lg bg-slate-800 text-white">🔖 Save</button>` },
      { name: "Chip Tag Dismiss", tag: "minimal", desc: "Click × to remove/restore filter chip.", preview: `<span style="background:#6366f1;padding:6px 12px;border-radius:99px;font-size:.8rem;cursor:pointer;color:#fff;transition:.2s" onclick="this.style.opacity=this.style.opacity==='0.3'?'1':'0.3'">UI Design ×</span>`, code: `<span class="chip">UI Design ×</span>`, tw: `<span class="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs cursor-pointer">UI Design ×</span>` },
      { name: "Hover Tilt Card", tag: "interactive", desc: "Subtle 3D rotation on mouse hover.", preview: `<div style="padding:12px 18px;background:#1e293b;border:1px solid #6366f1;border-radius:10px;transition:.25s;cursor:pointer;color:#fff" onmouseover="this.style.transform='rotate(-3deg) scale(1.05)'" onmouseout="this.style.transform='none'">Hover Tilt</div>`, code: `<div class="tilt-card">Hover Tilt</div>`, tw: `<div class="p-4 rounded-xl bg-slate-800 border border-indigo-500 hover:-rotate-3 hover:scale-105 transition">Hover Tilt</div>` },
      { name: "Status Dot Switcher", tag: "minimal", desc: "Cycle Online / Busy / Away status.", preview: `<button class="btn-code" onclick="const s=['🟢 Online','🟡 Away','🔴 Busy'];this.textContent=s[(s.indexOf(this.textContent)+1)%3]">🟢 Online</button>`, code: `<button class="status-btn">🟢 Online</button>`, tw: `<button class="px-3 py-1 rounded-full border border-slate-700 text-xs">🟢 Online</button>` },
      { name: "Download Confirm", tag: "interactive", desc: "Simulates file download completion.", preview: `<button class="mi-btn" onclick="this.textContent='⬇️ Downloading...';setTimeout(()=>this.textContent='✔️ Done!',900)">⬇️ Download</button>`, code: `<button class="dl-btn">⬇️ Download</button>`, tw: `<button class="px-4 py-2 rounded-lg bg-indigo-600 text-white">⬇️ Download</button>` },
      { name: "Emoji Reaction Bar", tag: "interactive", desc: "Quick reaction picker on click.", preview: `<div style="display:flex;gap:8px;font-size:1.2rem;cursor:pointer"><span style="transition:.2s;display:inline-block" onclick="this.style.transform=this.style.transform?'':'scale(1.4)'">🔥</span><span style="transition:.2s;display:inline-block" onclick="this.style.transform=this.style.transform?'':'scale(1.4)'">🚀</span><span style="transition:.2s;display:inline-block" onclick="this.style.transform=this.style.transform?'':'scale(1.4)'">👏</span></div>`, code: `<div class="reactions">🔥 🚀 👏</div>`, tw: `<div class="flex gap-2 text-xl"><button class="hover:scale-125 transition">🔥</button><button class="hover:scale-125 transition">🚀</button></div>` }
    ]
  },
  {
    id: "dashboards",
    title: "📱 20+ Mobile App Dashboard Ideas",
    items: [
      { name: "Fintech Wallet App", tag: "layout", desc: "Balance card, quick send/receive actions, and recent transactions.", preview: `<div class="mini-phone"><div class="mini-bar"></div><div class="mini-card"><small style="font-size:.6rem">$12,480.00</small><div class="mini-grid"><div class="mini-box"></div><div class="mini-box"></div></div></div></div>`, code: `<!-- Fintech Dashboard Layout -->`, tw: `<div class="max-w-sm mx-auto p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">...</div>` },
      { name: "Fitness & Step Tracker", tag: "layout", desc: "Circular activity rings, daily calorie burn, and heart-rate chart.", preview: `<div class="mini-phone"><div style="width:44px;height:44px;border-radius:50%;border:4px solid #10b981;margin:auto"></div><div class="mini-bar" style="width:90%"></div></div>`, code: `<!-- Fitness UI -->`, tw: `<div class="max-w-sm p-4 rounded-3xl bg-slate-950 text-white">...</div>` },
      { name: "Smart Home IoT Hub", tag: "interactive", desc: "Room-by-room toggles for lights, AC temperature dial, and energy usage.", preview: `<div class="mini-phone"><div class="mini-grid"><div class="mini-box"></div><div class="mini-box"></div><div class="mini-box"></div><div class="mini-box"></div></div></div>`, code: `<!-- Smart Home UI -->`, tw: `<div class="grid grid-cols-2 gap-3 p-4">...</div>` },
      { name: "Crypto Portfolio Tracker", tag: "neon", desc: "Live coin sparklines, 24h gain/loss badges, and buy/swap CTA.", preview: `<div class="mini-phone"><div class="mini-bar" style="background:#f59e0b"></div><div class="mini-card"><small style="font-size:.6rem;color:#10b981">+8.42% BTC</small></div></div>`, code: `<!-- Crypto Mobile UI -->`, tw: `<div class="p-4 rounded-2xl bg-slate-900 border border-amber-500/30">...</div>` },
      { name: "E-Learning Course Hub", tag: "minimal", desc: "Continue-watching video card, streak counter, and quiz progress.", preview: `<div class="mini-phone"><div class="mini-card"><small style="font-size:.6rem">72% Course</small><div class="mini-bar" style="width:72%"></div></div></div>`, code: `<!-- EdTech UI -->`, tw: `<div class="p-4 rounded-2xl bg-slate-900 space-y-3">...</div>` },
      { name: "Food Delivery Live Tracker", tag: "layout", desc: "Map route preview, rider ETA countdown, and order status steps.", preview: `<div class="mini-phone"><div class="mini-card" style="background:rgba(16,185,129,.15)"><small style="font-size:.6rem">ETA: 12 mins</small></div><div class="mini-bar"></div></div>`, code: `<!-- Delivery UI -->`, tw: `<div class="relative h-screen flex flex-col justify-end">...</div>` },
      { name: "Mental Wellness & Sleep", tag: "minimal", desc: "Mood check-in emojis, sleep score graph, and guided audio cards.", preview: `<div class="mini-phone"><div class="mini-bar" style="background:#ec4899"></div><div class="mini-card"><small style="font-size:.6rem">Sleep: 88/100</small></div></div>`, code: `<!-- Wellness UI -->`, tw: `<div class="p-5 rounded-3xl bg-indigo-950/60">...</div>` },
      { name: "SaaS Analytics Mobile", tag: "layout", desc: "MRR KPI tile, active users trendline, and conversion funnel.", preview: `<div class="mini-phone"><div class="mini-grid"><div class="mini-box"></div><div class="mini-box"></div></div><div class="mini-card"></div></div>`, code: `<!-- SaaS Mobile BI -->`, tw: `<div class="grid grid-cols-2 gap-2 p-3">...</div>` },
      { name: "EV Charging & Car Control", tag: "neon", desc: "Battery range gauge, climate pre-heat toggle, and nearby chargers.", preview: `<div class="mini-phone"><div class="mini-card"><small style="font-size:.6rem">🔋 84% • 310km</small></div><div class="mini-bar"></div></div>`, code: `<!-- Automotive App UI -->`, tw: `<div class="p-4 rounded-3xl bg-slate-950 text-emerald-400">...</div>` },
      { name: "Task & Habit Kanban", tag: "minimal", desc: "Today's focus tasks, streak calendar strip, and quick-add FAB.", preview: `<div class="mini-phone"><div class="mini-bar"></div><div class="mini-bar" style="width:85%"></div><div class="mini-bar" style="width:50%"></div></div>`, code: `<!-- Productivity UI -->`, tw: `<div class="space-y-2 p-4">...</div>` },
      { name: "Music & Podcast Studio", tag: "neon", desc: "Now-playing mini bar, curated mood mixes, and waveform scrubber.", preview: `<div class="mini-phone"><div class="mini-card" style="background:linear-gradient(135deg,#6366f1,#ec4899)"></div><div class="mini-bar"></div></div>`, code: `<!-- Media App UI -->`, tw: `<div class="p-4 rounded-3xl bg-gradient-to-b from-indigo-900 to-slate-950">...</div>` },
      { name: "Travel & Boarding Pass", tag: "layout", desc: "Upcoming flight countdown, QR boarding pass card, and itinerary.", preview: `<div class="mini-phone"><div class="mini-card"><small style="font-size:.6rem">DEL ✈️ BOM</small></div><div class="mini-bar"></div></div>`, code: `<!-- Travel App UI -->`, tw: `<div class="p-4 rounded-2xl border-dashed border-2 border-slate-700">...</div>` },
      { name: "E-Commerce Seller Center", tag: "layout", desc: "Today's orders, revenue sparkline, and low-stock inventory alerts.", preview: `<div class="mini-phone"><div class="mini-grid"><div class="mini-box"></div><div class="mini-box"></div></div><div class="mini-bar"></div></div>`, code: `<!-- Merchant Dashboard -->`, tw: `<div class="grid grid-cols-2 gap-3">...</div>` },
      { name: "Healthcare & Telemedicine", tag: "minimal", desc: "Upcoming doctor video call card, prescription reminders, and vitals.", preview: `<div class="mini-phone"><div class="mini-card"><small style="font-size:.6rem">Dr. Sharma • 4PM</small></div><div class="mini-bar"></div></div>`, code: `<!-- Health App UI -->`, tw: `<div class="p-4 rounded-2xl bg-sky-950/40">...</div>` },
      { name: "Personal Budget & Expense", tag: "minimal", desc: "Monthly spending limit donut chart and category breakdown.", preview: `<div class="mini-phone"><div style="width:40px;height:40px;border-radius:50%;border:5px solid #ec4899;margin:auto"></div><div class="mini-bar"></div></div>`, code: `<!-- Expense Tracker UI -->`, tw: `<div class="flex flex-col items-center p-4">...</div>` },
      { name: "Social Creator Analytics", tag: "neon", desc: "Follower growth, top reel views, and engagement rate snapshot.", preview: `<div class="mini-phone"><div class="mini-card"><small style="font-size:.6rem">142K Views ↑</small></div><div class="mini-grid"><div class="mini-box"></div><div class="mini-box"></div></div></div>`, code: `<!-- Creator Studio UI -->`, tw: `<div class="p-4 rounded-2xl bg-slate-900">...</div>` },
      { name: "Real Estate & Smart Lock", tag: "interactive", desc: "Tenant rent status, digital key unlock button, and maintenance chat.", preview: `<div class="mini-phone"><div class="mini-card"><small style="font-size:.6rem">🔓 Tap to Unlock</small></div></div>`, code: `<!-- PropTech UI -->`, tw: `<button class="w-full py-6 rounded-2xl bg-indigo-600 font-bold">🔓 Unlock</button>` },
      { name: "AI Assistant Command Hub", tag: "neon", desc: "Voice prompt orb, recent AI workflows, and quick-action chips.", preview: `<div class="mini-phone"><div style="width:36px;height:36px;border-radius:50%;background:radial-gradient(#6366f1,#ec4899);margin:auto"></div><div class="mini-bar"></div></div>`, code: `<!-- AI App UI -->`, tw: `<div class="flex flex-col items-center justify-between p-5">...</div>` },
      { name: "Gaming Clan & Stats", tag: "neon", desc: "K/D ratio badge, live squad online list, and tournament timer.", preview: `<div class="mini-phone"><div class="mini-bar" style="background:#ef4444"></div><div class="mini-card"><small style="font-size:.6rem">Rank: Diamond II</small></div></div>`, code: `<!-- Gaming Companion UI -->`, tw: `<div class="p-4 bg-slate-950 border border-rose-500/40 rounded-2xl">...</div>` },
      { name: "Grocery & Pantry Inventory", tag: "layout", desc: "Expiring-soon alerts, 1-tap reorder list, and delivery slot bar.", preview: `<div class="mini-phone"><div class="mini-grid"><div class="mini-box"></div><div class="mini-box"></div></div><div class="mini-bar"></div></div>`, code: `<!-- Quick-Commerce UI -->`, tw: `<div class="grid grid-cols-2 gap-2 p-3">...</div>` }
    ]
  },
  {
    id: "heroes",
    title: "🚀 20+ Hero Section Ideas",
    items: [
      { name: "Split Screen + Product Mockup", tag: "layout", desc: "Left value proposition + CTA; right interactive 3D UI preview.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Headline + CTA</div><div class="wf-block">App UI</div></div></div>`, code: `<section class="hero-split"><div><h1>Headline</h1></div><div><img /></div></section>`, tw: `<section class="grid md:grid-cols-2 gap-8 items-center py-20">...</section>` },
      { name: "Centered SaaS + Dashboard Peek", tag: "layout", desc: "Bold centered H1, dual CTAs, and wide dashboard screenshot below.", preview: `<div class="mini-wireframe"><div class="wf-block">Centered H1 + CTA</div><div class="wf-block">Wide UI Preview</div></div>`, code: `<section class="hero-center"><h1>Build Faster</h1></section>`, tw: `<section class="text-center max-w-4xl mx-auto py-20 space-y-6">...</section>` },
      { name: "Interactive Live Playground Hero", tag: "interactive", desc: "Let visitors test the tool right inside the hero without signing up.", preview: `<div class="mini-wireframe"><div class="wf-block">Live Interactive Widget</div></div>`, code: `<section class="hero-playground">...</section>`, tw: `<section class="p-8 rounded-3xl border border-indigo-500/30">...</section>` },
      { name: "Full-Bleed Ambient Video Hero", tag: "neon", desc: "Edge-to-edge background motion loop with high-contrast overlay text.", preview: `<div class="mini-wireframe" style="background:linear-gradient(135deg,#312e81,#831843)"><div class="wf-block" style="color:#fff">Full-Screen Video</div></div>`, code: `<section class="hero-video"><video autoplay muted loop></video></section>`, tw: `<section class="relative h-screen flex items-center justify-center overflow-hidden">...</section>` },
      { name: "Bento Grid Feature Hero", tag: "layout", desc: "Headline paired with 4–5 modular bento cards highlighting key metrics.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">H1</div><div class="wf-block">Stat</div></div><div class="wf-row"><div class="wf-block">Card</div><div class="wf-block">Card</div></div></div>`, code: `<section class="hero-bento">...</section>`, tw: `<section class="grid grid-cols-1 md:grid-cols-3 gap-4">...</section>` },
      { name: "Kinetic Typography Hero", tag: "minimal", desc: "Oversized animated headline that reacts to scroll or cursor movement.", preview: `<div class="mini-wireframe"><div class="wf-block" style="font-weight:800;font-size:.9rem">BOLD KINETIC TYPE</div></div>`, code: `<section class="hero-type"><h1 class="kinetic">WE CRAFT</h1></section>`, tw: `<h1 class="text-6xl md:text-8xl font-black tracking-tighter">WE CRAFT</h1>` },
      { name: "Search-First Marketplace Hero", tag: "interactive", desc: "Prominent search bar + instant filter chips (Airbnb/Directory style).", preview: `<div class="mini-wireframe"><div class="wf-block">Find Anything</div><div class="wf-block" style="height:24px">[ Search Input 🔍 ]</div></div>`, code: `<section class="hero-search"><input type="search" /></section>`, tw: `<div class="max-w-xl mx-auto flex rounded-full border p-2">...</div>` },
      { name: "Social Proof & Trust Bar Hero", tag: "minimal", desc: "Headline + immediate G2 rating, user count, and 5 client logos.", preview: `<div class="mini-wireframe"><div class="wf-block">H1 + ⭐⭐⭐⭐⭐</div><div class="wf-block" style="height:22px">Logo • Logo • Logo</div></div>`, code: `<section class="hero-trust">...</section>`, tw: `<section class="text-center space-y-6">...</section>` },
      { name: "Before / After Comparison Slider", tag: "interactive", desc: "Interactive draggable divider showing transformation in real time.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Before</div><div class="wf-block">After</div></div></div>`, code: `<section class="hero-compare">...</section>`, tw: `<div class="grid grid-cols-2 rounded-2xl overflow-hidden">...</div>` },
      { name: "Minimalist Editorial / Manifesto", tag: "minimal", desc: "Generous whitespace, serif headline, and single focused action.", preview: `<div class="mini-wireframe"><div class="wf-block" style="border-style:solid">Clean Editorial Serif</div></div>`, code: `<section class="hero-editorial">...</section>`, tw: `<section class="max-w-2xl mx-auto py-28 font-serif">...</section>` },
      { name: "Developer CLI / Code Snippet Hero", tag: "minimal", desc: "One-click `npm install` copy box alongside live terminal output.", preview: `<div class="mini-wireframe"><div class="wf-block" style="font-family:monospace">$ npx create-app</div></div>`, code: `<section class="hero-dev"><code>npx create-app</code></section>`, tw: `<code class="px-4 py-2 rounded-lg bg-slate-900 font-mono text-sm">$ npx create-app</code>` },
      { name: "3D WebGL / Spline Object Hero", tag: "neon", desc: "Interactive floating 3D object that rotates with cursor position.", preview: `<div class="mini-wireframe"><div class="wf-block">Interactive 3D Canvas</div></div>`, code: `<section class="hero-3d"><canvas></canvas></section>`, tw: `<section class="relative min-h-[80vh]">...</section>` },
      { name: "Lead-Capture Waitlist Hero", tag: "minimal", desc: "Single email input + instant position counter for pre-launch apps.", preview: `<div class="mini-wireframe"><div class="wf-block">Join 12,400+ [Email | Join]</div></div>`, code: `<section class="hero-waitlist"><form>...</form></section>`, tw: `<form class="flex gap-2 max-w-md mx-auto">...</form>` },
      { name: "Diagonal / Angled Cut Hero", tag: "layout", desc: "Dynamic slanted bottom edge leading smoothly into section two.", preview: `<div class="mini-wireframe"><div class="wf-block" style="clip-path:polygon(0 0,100% 0,100% 75%,0 100%)">Angled Hero</div></div>`, code: `<section class="hero-angled">...</section>`, tw: `<section class="[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]">...</section>` },
      { name: "Interactive Calculator / ROI Hero", tag: "interactive", desc: "Sliders in the hero letting buyers calculate savings immediately.", preview: `<div class="mini-wireframe"><div class="wf-block">Savings Slider: $4,200/yr</div></div>`, code: `<section class="hero-roi">...</section>`, tw: `<section class="grid md:grid-cols-2 gap-8">...</section>` },
      { name: "Founder Story / Video Bubble Hero", tag: "interactive", desc: "Personal Loom-style founder pitch video embedded next to headline.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Pitch</div><div class="wf-block" style="border-radius:50%">▶</div></div></div>`, code: `<section class="hero-founder">...</section>`, tw: `<div class="flex items-center gap-6">...</div>` },
      { name: "Dark Mode Glow & Grid Mesh", tag: "neon", desc: "Subtle radial spotlight over a faint architectural grid background.", preview: `<div class="mini-wireframe" style="background:radial-gradient(circle,rgba(99,102,241,.4),transparent)"><div class="wf-block">Spotlight Grid</div></div>`, code: `<section class="hero-mesh">...</section>`, tw: `<section class="bg-[radial-gradient(circle_at_top,#6366f133,transparent)]">...</section>` },
      { name: "E-Commerce Lookbook Fullscreen", tag: "layout", desc: "Editorial fashion/product photography with shoppable hotspot pins.", preview: `<div class="mini-wireframe"><div class="wf-block">Product Photo + [Shop Pin]</div></div>`, code: `<section class="hero-lookbook">...</section>`, tw: `<section class="relative h-[85vh]">...</section>` },
      { name: "Dual-Persona Fork Hero", tag: "layout", desc: "Two clear pathways right away ('For Creators' vs 'For Brands').", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Path A →</div><div class="wf-block">Path B →</div></div></div>`, code: `<section class="hero-fork">...</section>`, tw: `<div class="grid md:grid-cols-2 gap-6">...</div>` },
      { name: "Scroll-Scrubbed Story Hero", tag: "interactive", desc: "Sticky hero frame that morphs text and visuals as user scrolls.", preview: `<div class="mini-wireframe"><div class="wf-block">Sticky Scroll Frame 1/4</div></div>`, code: `<section class="hero-scrolly">...</section>`, tw: `<section class="h-[250vh]"><div class="sticky top-0 h-screen">...</div></section>` }
    ]
  },
  {
    id: "layouts",
    title: "📐 20+ Website Layout Styles",
    items: [
      { name: "Bento Box Grid", tag: "layout", desc: "Modular rounded cards of varying spans inspired by Apple & Linear.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block" style="flex:2">2x</div><div class="wf-block">1x</div></div><div class="wf-row"><div class="wf-block">1x</div><div class="wf-block" style="flex:2">2x</div></div></div>`, code: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;`, tw: `<div class="grid grid-cols-1 md:grid-cols-3 gap-4">...</div>` },
      { name: "Z-Pattern Landing Flow", tag: "layout", desc: "Alternating left-right visual/text blocks guiding natural eye scan.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Img</div><div class="wf-block">Txt</div></div><div class="wf-row"><div class="wf-block">Txt</div><div class="wf-block">Img</div></div></div>`, code: `/* Alternating 2-column rows */`, tw: `<div class="grid md:grid-cols-2 gap-12 items-center">...</div>` },
      { name: "F-Pattern Editorial Blog", tag: "layout", desc: "Top hero story followed by scannable horizontal article rows + sidebar.", preview: `<div class="mini-wireframe"><div class="wf-block">Featured</div><div class="wf-row"><div class="wf-block" style="flex:2">Feed</div><div class="wf-block">Side</div></div></div>`, code: `/* Classic content-heavy layout */`, tw: `<div class="grid lg:grid-cols-3 gap-8">...</div>` },
      { name: "Asymmetric Split Screen", tag: "layout", desc: "Fixed left navigation/intro panel with independently scrolling right column.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Sticky Left</div><div class="wf-block" style="flex:1.6">Scroll Right</div></div></div>`, code: `position: sticky; top: 0; height: 100vh;`, tw: `<div class="lg:flex"><aside class="lg:w-1/3 lg:sticky lg:top-0 lg:h-screen">...</aside><main class="lg:w-2/3">...</main></div>` },
      { name: "Masonry Pinterest Grid", tag: "layout", desc: "Variable-height cards packed tightly without awkward vertical gaps.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Tall</div><div class="wf-block">Short</div><div class="wf-block">Med</div></div></div>`, code: `column-count: 3; column-gap: 16px;`, tw: `<div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">...</div>` },
      { name: "Holy Grail Dashboard Shell", tag: "layout", desc: "Top header, collapsible left sidebar, main workspace, and right inspector.", preview: `<div class="mini-wireframe"><div class="wf-block" style="height:18px">Top</div><div class="wf-row"><div class="wf-block">Nav</div><div class="wf-block" style="flex:2">Main</div><div class="wf-block">Info</div></div></div>`, code: `grid-template-areas: "head head head" "nav main aside";`, tw: `<div class="grid grid-cols-[240px_1fr_280px] min-h-screen">...</div>` },
      { name: "Swiss Typographic Grid", tag: "minimal", desc: "Strict visible hairlines, bold sans-serif hierarchy, and mathematical alignment.", preview: `<div class="mini-wireframe" style="gap:0"><div class="wf-row" style="gap:0"><div class="wf-block" style="border-radius:0">01</div><div class="wf-block" style="border-radius:0">02</div></div></div>`, code: `/* Exposed 1px grid borders */`, tw: `<div class="grid grid-cols-2 border-t border-l border-slate-700">...</div>` },
      { name: "Horizontal Scroll Gallery", tag: "interactive", desc: "Vertical wheel translates into smooth horizontal showcase panels.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Slide 1 →</div><div class="wf-block">Slide 2 →</div></div></div>`, code: `display: flex; overflow-x: auto; scroll-snap-type: x mandatory;`, tw: `<div class="flex overflow-x-auto snap-x snap-mandatory gap-6">...</div>` },
      { name: "Card Deck / Stacked Layers", tag: "interactive", desc: "Cards stack and overlap cleanly as you scroll down the page.", preview: `<div class="mini-wireframe"><div class="wf-block">Card 1 (Sticky)</div><div class="wf-block">Card 2 (Overlaps)</div></div>`, code: `position: sticky; top: 80px;`, tw: `<div class="sticky top-20 rounded-2xl p-8 shadow-xl">...</div>` },
      { name: "Single-Column Long-Form", tag: "minimal", desc: "Focused 68ch reading column ideal for essays, docs, and manifestos.", preview: `<div class="mini-wireframe"><div class="wf-block" style="max-width:110px;margin:auto">68ch Column</div></div>`, code: `max-width: 68ch; margin: 0 auto;`, tw: `<article class="max-w-prose mx-auto px-4 leading-relaxed">...</article>` },
      { name: "Neobrutalist Bold Blocks", tag: "neon", desc: "Thick dark borders, hard offset shadows, and high-contrast color blocks.", preview: `<div class="mini-wireframe"><div class="wf-block" style="border:2px solid #fff;box-shadow:3px 3px 0 #ec4899">BRUTAL</div></div>`, code: `border: 2px solid #000; box-shadow: 4px 4px 0 #000;`, tw: `<div class="border-2 border-black shadow-[4px_4px_0px_#000] p-6 bg-amber-300 text-black">...</div>` },
      { name: "Glassmorphism Floating Panels", tag: "neon", desc: "Frosted translucent layers floating over vibrant mesh gradients.", preview: `<div class="mini-wireframe" style="background:linear-gradient(45deg,#6366f1,#ec4899)"><div class="wf-block" style="background:rgba(255,255,255,.15);backdrop-filter:blur(6px)">Glass</div></div>`, code: `background: rgba(255,255,255,0.1); backdrop-filter: blur(12px);`, tw: `<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">...</div>` },
      { name: "Magazine Multi-Column", tag: "layout", desc: "Newspaper-inspired multi-column layout with pull quotes and drop caps.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Col 1</div><div class="wf-block">Col 2</div><div class="wf-block">Col 3</div></div></div>`, code: `display: grid; grid-template-columns: repeat(3, 1fr);`, tw: `<div class="grid md:grid-cols-3 gap-6">...</div>` },
      { name: "Full-Page Snap Sections", tag: "interactive", desc: "100vh viewport sections that snap smoothly like a presentation deck.", preview: `<div class="mini-wireframe"><div class="wf-block">100vh Snap Slide</div></div>`, code: `height: 100vh; scroll-snap-align: start;`, tw: `<div class="h-screen overflow-y-scroll snap-y snap-mandatory"><section class="h-screen snap-start">...</section></div>` },
      { name: "Floating Dock Navigation", tag: "minimal", desc: "macOS-style bottom floating icon dock over a clean canvas.", preview: `<div class="mini-wireframe"><div class="wf-block">Canvas</div><div class="wf-block" style="height:20px;width:110px;margin:auto">Dock Bar</div></div>`, code: `position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);`, tw: `<nav class="fixed bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700">...</nav>` },
      { name: "Catalog Filter + Grid", tag: "layout", desc: "Left faceted filter drawer paired with responsive 3/4-column product cards.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Filters</div><div class="wf-block" style="flex:2.2">Products</div></div></div>`, code: `grid-template-columns: 240px 1fr;`, tw: `<div class="grid md:grid-cols-[240px_1fr] gap-6">...</div>` },
      { name: "Timeline / Chronological Spine", tag: "layout", desc: "Central vertical line with alternating milestone cards on left & right.", preview: `<div class="mini-wireframe"><div class="wf-block">2024 ──●── 2026</div></div>`, code: `/* Vertical center spine with ::before */`, tw: `<div class="relative border-l-2 border-indigo-500 pl-6 space-y-8">...</div>` },
      { name: "Command-Palette First App", tag: "interactive", desc: "Minimal workspace centered around a `Ctrl + K` quick-action launcher.", preview: `<div class="mini-wireframe"><div class="wf-block">[ Ctrl + K Search... ]</div></div>`, code: `/* Modal command launcher UI */`, tw: `<div class="fixed inset-0 bg-black/60 flex items-center justify-center">...</div>` },
      { name: "Isometric / Spatial Canvas", tag: "interactive", desc: "Infinite pan-and-zoom whiteboard layout for visual collaboration.", preview: `<div class="mini-wireframe"><div class="wf-block">Infinite Spatial Board</div></div>`, code: `/* Pan/zoom canvas container */`, tw: `<div class="w-screen h-screen overflow-hidden bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]">...</div>` },
      { name: "Interactive Pricing Matrix", tag: "layout", desc: "Sticky tier headers with expandable feature comparison rows.", preview: `<div class="mini-wireframe"><div class="wf-row"><div class="wf-block">Free</div><div class="wf-block">Pro</div><div class="wf-block">Team</div></div></div>`, code: `/* Sticky thead comparison table */`, tw: `<div class="grid md:grid-cols-3 gap-6">...</div>` }
    ]
  },
  {
    id: "tips",
    title: "💡 20+ UI/UX Design Tips",
    items: [
      { name: "60-30-10 Color Rule", tag: "minimal", desc: "Use 60% neutral background, 30% secondary surface, and 10% primary accent for visual harmony.", preview: `<div style="display:flex;width:160px;height:36px;border-radius:8px;overflow:hidden"><div style="width:60%;background:#1e293b"></div><div style="width:30%;background:#334155"></div><div style="width:10%;background:#6366f1"></div></div>`, code: `/* 60% Neutral | 30% Secondary | 10% Accent */`, tw: `/* bg-slate-950 (60%) + bg-slate-900 (30%) + bg-indigo-500 (10%) */` },
      { name: "8pt Spatial Grid System", tag: "layout", desc: "Keep all margins, paddings, and gaps in multiples of 8px (8, 16, 24, 32, 48) for effortless rhythm.", preview: `<div style="font-family:monospace;color:#10b981">8px • 16px • 24px • 32px</div>`, code: `padding: 16px; gap: 24px; margin-bottom: 32px;`, tw: `<div class="p-4 gap-6 mb-8">...</div>` },
      { name: "WCAG 4.5:1 Contrast Ratio", tag: "minimal", desc: "Ensure body text has at least 4.5:1 contrast against its background for readability in sunlight.", preview: `<div style="background:#0f172a;color:#f8fafc;padding:8px 14px;border-radius:6px;font-weight:600">Aa 15.4:1 Pass ✓</div>`, code: `/* High contrast text & surface pairing */`, tw: `<p class="text-slate-100 bg-slate-900">High Contrast Text</p>` },
      { name: "Fitts's Law Touch Targets", tag: "interactive", desc: "Make mobile buttons at least 44×44px with 8px spacing to prevent accidental mis-taps.", preview: `<div style="width:48px;height:48px;border:2px dashed #6366f1;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.75rem">48px</div>`, code: `min-width: 44px; min-height: 44px;`, tw: `<button class="min-w-[44px] min-h-[44px] p-3">Tap</button>` },
      { name: "Visual Hierarchy via Scale", tag: "minimal", desc: "Differentiate H1, H2, and body using clear font-size & weight jumps rather than just colors.", preview: `<div style="text-align:left"><div style="font-size:1.1rem;font-weight:800">Heading 32px</div><div style="font-size:.8rem;color:#94a3b8">Body copy 16px</div></div>`, code: `h1 { font-size: 2rem; font-weight: 800; } p { font-size: 1rem; }`, tw: `<h1 class="text-3xl font-extrabold">Heading</h1><p class="text-base text-slate-400">Body</p>` },
      { name: "Progressive Disclosure", tag: "interactive", desc: "Show only essential controls upfront; tuck advanced settings into drawers or accordions.", preview: `<div class="btn-code">Basic View → + Advanced</div>`, code: `/* Hide secondary options until requested */`, tw: `<details><summary>Advanced Options</summary>...</details>` },
      { name: "Skeletons Over Spinners", tag: "minimal", desc: "Use content-shaped skeleton loaders for page loads so layout feels 30% faster.", preview: `<div class="ld-14" style="width:140px;height:18px"></div>`, code: `/* Skeleton placeholder matches final layout */`, tw: `<div class="h-4 w-36 rounded bg-slate-800 animate-pulse"></div>` },
      { name: "Hick's Law: Limit Choices", tag: "minimal", desc: "Cap top-level nav items at 5–7 and highlight one primary CTA per screen to reduce decision fatigue.", preview: `<div style="display:flex;gap:6px"><span class="btn-code">Secondary</span><span class="mi-btn" style="padding:6px 10px;font-size:.75rem">Primary CTA</span></div>`, code: `/* One dominant primary CTA per viewport */`, tw: `<div class="flex gap-3"><button class="btn-ghost">Cancel</button><button class="bg-indigo-600 text-white px-4 py-2 rounded">Continue</button></div>` },
      { name: "Optimal Line Length (50–75ch)", tag: "minimal", desc: "Restrict paragraph width to 50–75 characters so readers' eyes don't lose track between lines.", preview: `<div style="font-size:.78rem;max-width:190px;text-align:left;color:#cbd5e1">Readable lines stay between 50 and 75 characters wide.</div>`, code: `p { max-width: 65ch; line-height: 1.6; }`, tw: `<p class="max-w-[65ch] leading-relaxed">...</p>` },
      { name: "Design Empty States Well", tag: "minimal", desc: "Never leave blank screens; include an illustration, helpful tip, and a 1-click creation button.", preview: `<div style="text-align:center;font-size:.78rem">📂 No files yet<br><span style="color:#6366f1">+ Upload First File</span></div>`, code: `/* Helpful empty state with action */`, tw: `<div class="text-center py-12 space-y-3">...</div>` },
      { name: "Micro-Copy Clarity", tag: "minimal", desc: "Replace vague 'Submit' or 'OK' buttons with action-oriented labels like 'Create Free Account'.", preview: `<div style="font-size:.8rem"><del style="color:#ef4444">Submit</del> → <strong style="color:#10b981">Save Changes</strong></div>`, code: `<button>Save Changes</button>`, tw: `<button class="px-4 py-2 bg-emerald-600 text-white rounded">Save Changes</button>` },
      { name: "Consistent Icon Stroke", tag: "minimal", desc: "Use icons from a single family with matching stroke width (e.g. 1.5px or 2px) and corner radius.", preview: `<div style="font-size:1.3rem;letter-spacing:8px">🏠 🔍 ⚙️ 👤</div>`, code: `/* Unified 24x24 icon grid & 2px stroke */`, tw: `<svg class="w-6 h-6 stroke-2">...</svg>` },
      { name: "Avoid Pure #000000 Dark Mode", tag: "minimal", desc: "Use deep slate (#0B0F19 or #121212) instead of pure black to prevent OLED smear and eye strain.", preview: `<div style="display:flex;gap:8px"><span style="background:#000;color:#fff;padding:6px;border-radius:4px;font-size:.7rem">#000 ❌</span><span style="background:#0f172a;color:#fff;padding:6px;border:1px solid #334155;border-radius:4px;font-size:.7rem">#0F172A ✓</span></div>`, code: `background-color: #0b0f19;`, tw: `<body class="bg-slate-950 text-slate-100">...</body>` },
      { name: "Inline Form Validation", tag: "interactive", desc: "Validate inputs right after the user leaves a field rather than waiting until form submission.", preview: `<div style="font-size:.78rem;color:#10b981;border:1px solid #10b981;padding:5px 10px;border-radius:6px">user@domain.com ✓</div>`, code: `/* Real-time field validation feedback */`, tw: `<input class="border-emerald-500 text-emerald-400 rounded px-3 py-1.5" />` },
      { name: "Concentric Border Radius", tag: "layout", desc: "Inner radius = Outer radius minus padding (e.g., 16px outer card - 8px padding = 8px inner button).", preview: `<div style="padding:8px;border:2px solid #6366f1;border-radius:16px"><div style="background:#6366f1;color:#fff;padding:6px 12px;border-radius:8px;font-size:.75rem">R_in = R_out - Pad</div></div>`, code: `/* Outer: 16px | Padding: 8px | Inner: 8px */`, tw: `<div class="p-2 rounded-2xl border"><button class="rounded-lg px-3 py-1.5">Inner</button></div>` },
      { name: "Proximity Grouping (Gestalt)", tag: "layout", desc: "Place labels closer to their own input (4–6px) than to the previous field (20–24px).", preview: `<div style="text-align:left;font-size:.72rem"><div>Email</div><div style="background:#1e293b;color:#fff;padding:3px 8px;border-radius:4px;margin-top:2px">alex@mail.com</div></div>`, code: `label { margin-bottom: 4px; } .field { margin-bottom: 20px; }`, tw: `<div class="mb-5"><label class="block mb-1">Email</label><input /></div>` },
      { name: "Thumb-Zone Mobile Nav", tag: "layout", desc: "Keep primary navigation in a bottom bar on mobile where thumbs naturally rest.", preview: `<div style="width:130px;border:1px solid #475569;border-radius:10px;padding-top:36px"><div style="background:#1e293b;color:#fff;padding:4px;font-size:.7rem;border-radius:0 0 9px 9px">🏠  🔍  ➕  👤</div></div>`, code: `/* Bottom tab bar for mobile ergonomics */`, tw: `<nav class="fixed bottom-0 inset-x-0 flex justify-around py-3 bg-slate-900">...</nav>` },
      { name: "Undo Over Confirmation Modals", tag: "interactive", desc: "Let users undo destructive actions via a toast notification instead of annoying 'Are you sure?' popups.", preview: `<div style="background:#1e293b;color:#fff;padding:6px 10px;border-radius:6px;font-size:.75rem">Item deleted • <strong style="color:#38bdf8">UNDO</strong></div>`, code: `/* Non-blocking toast with Undo trigger */`, tw: `<div class="fixed bottom-4 right-4 bg-slate-800 px-4 py-2 rounded-lg">Deleted <button class="text-sky-400 font-bold ml-2">UNDO</button></div>` },
      { name: "Directional Shadow Lighting", tag: "neon", desc: "Simulate natural top-down light with subtle top highlights and soft bottom drop shadows.", preview: `<div style="padding:10px 16px;background:#1e293b;color:#fff;border-top:1px solid rgba(255,255,255,.15);box-shadow:0 8px 16px rgba(0,0,0,.4);border-radius:8px;font-size:.78rem">Elevated Card</div>`, code: `border-top: 1px solid rgba(255,255,255,0.12); box-shadow: 0 8px 20px rgba(0,0,0,0.35);`, tw: `<div class="bg-slate-800 border-t border-white/15 shadow-xl rounded-xl p-4">...</div>` },
      { name: "Reduce Motion Accessibility", tag: "minimal", desc: "Respect `prefers-reduced-motion` media queries so motion-sensitive users browse comfortably.", preview: `<div style="font-family:monospace;font-size:.72rem;color:#38bdf8">@media (prefers-reduced-motion)</div>`, code: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`, tw: `<div class="motion-reduce:animate-none">...</div>` }
    ]
  }
];

// ===== BUILD FAST LOOKUP MAP (FIXES INLINE JSON ESCAPING BUGS) =====
const ITEM_MAP = new Map();
DATA.forEach(cat => {
  cat.items.forEach(item => {
    ITEM_MAP.set(item.name, { ...item, categoryTitle: cat.title });
  });
});

// ===== STATE & PERSISTENCE =====
let activeCategory = "all";
let activeTag = "all";
let bookmarks = JSON.parse(localStorage.getItem("uiux_vault_bookmarks") || "[]");
let currentModalItem = null;
let currentCodeLang = "css";
let cmdSelectedIndex = 0;
let cmdCurrentMatches = [];

const container = document.getElementById("sectionsContainer");
const searchInput = document.getElementById("globalSearch");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const bmCountEl = document.getElementById("bmCount");
const toastEl = document.getElementById("toastNotification");

// ===== TOAST & CLIPBOARD HELPER =====
let toastTimer;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

async function copyToClipboard(text, successMsg = "✅ Copied to clipboard!") {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMsg);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast(successMsg);
  }
}

function updateBookmarkCount() {
  bmCountEl.textContent = bookmarks.length;
}

function toggleBookmarkByName(name) {
  if (bookmarks.includes(name)) {
    bookmarks = bookmarks.filter(b => b !== name);
    showToast(`Removed "${name}" from bookmarks`);
  } else {
    bookmarks.push(name);
    showToast(`❤️ Saved "${name}" to bookmarks`);
  }
  localStorage.setItem("uiux_vault_bookmarks", JSON.stringify(bookmarks));
  updateBookmarkCount();
  renderShowcase();
}

// ===== RENDER 140+ SHOWCASE =====
function renderShowcase() {
  const query = searchInput.value.toLowerCase().trim();
  clearSearchBtn.classList.toggle("hidden", query.length === 0);

  const frag = document.createDocumentFragment();
  let totalRendered = 0;

  DATA.forEach(cat => {
    if (activeCategory !== "all" && activeCategory !== "bookmarks" && activeCategory !== cat.id) return;

    const filtered = cat.items.filter(item => {
      const matchesQuery =
        item.name.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        cat.title.toLowerCase().includes(query);
      const matchesTag = activeTag === "all" || item.tag === activeTag;
      const matchesBm = activeCategory !== "bookmarks" || bookmarks.includes(item.name);
      return matchesQuery && matchesTag && matchesBm;
    });

    if (filtered.length === 0) return;
    totalRendered += filtered.length;

    const section = document.createElement("section");
    section.className = "category-block";
    section.innerHTML = `
      <div class="category-header">
        <h2>${cat.title}</h2>
        <span class="badge">${filtered.length} items</span>
      </div>
      <div class="cards-grid">
        ${filtered.map((item, idx) => {
          const isSaved = bookmarks.includes(item.name);
          const safeName = item.name.replace(/"/g, "&quot;");
          return `
            <article class="card">
              <div class="card-preview">
                <button class="bm-btn" title="Bookmark" data-bm-name="${safeName}">${isSaved ? "❤️" : "🤍"}</button>
                ${item.preview}
              </div>
              <div class="card-body">
                <div class="card-title">
                  <span>${item.name}</span>
                  <span class="card-num">#${String(idx + 1).padStart(2, "0")}</span>
                </div>
                <p class="card-desc">${item.desc}</p>
                <div class="card-actions">
                  <button class="btn-code" data-code-name="${safeName}">&lt;/&gt; View Code</button>
                  <span style="font-size:0.7rem;color:var(--muted);text-transform:uppercase;">${item.tag}</span>
                </div>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
    frag.appendChild(section);
  });

  container.innerHTML = "";
  if (totalRendered === 0) {
    container.innerHTML = `<div style="text-align:center;padding:48px 20px;color:var(--muted);background:var(--surface);border-radius:14px;border:1px solid var(--border);">No matching items found. Try clearing filters or adding bookmarks!</div>`;
  } else {
    container.appendChild(frag);
  }
}

// Event Delegation for Cards (Bookmark & View Code — 100% Bug-Free)
container.addEventListener("click", (e) => {
  const bmBtn = e.target.closest("[data-bm-name]");
  if (bmBtn) {
    toggleBookmarkByName(bmBtn.dataset.bmName);
    return;
  }
  const codeBtn = e.target.closest("[data-code-name]");
  if (codeBtn) {
    const item = ITEM_MAP.get(codeBtn.dataset.codeName);
    if (item) openCodeModal(item);
  }
});

// ===== MOBILE SIDEBAR DRAWER =====
const sidebar = document.getElementById("appSidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

function openMobileSidebar() {
  sidebar.classList.add("open");
  sidebarBackdrop.classList.add("open");
}
function closeMobileSidebar() {
  sidebar.classList.remove("open");
  sidebarBackdrop.classList.remove("open");
}

document.getElementById("mobileMenuBtn").addEventListener("click", openMobileSidebar);
document.getElementById("closeSidebarBtn").addEventListener("click", closeMobileSidebar);
sidebarBackdrop.addEventListener("click", closeMobileSidebar);

// ===== CATEGORY & TAG FILTERS =====
document.querySelectorAll("#categoryNav .nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#categoryNav .nav-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.target;
    closeMobileSidebar();
    renderShowcase();
    document.getElementById("libraryAnchor").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".tool-jump").forEach(btn => {
  btn.addEventListener("click", () => {
    closeMobileSidebar();
    const el = document.getElementById(btn.dataset.scroll);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

document.querySelectorAll(".tag-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".tag-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    activeTag = pill.dataset.tag;
    renderShowcase();
  });
});

// Debounced Search for Ultra-Smooth Typing
let searchDebounce;
searchInput.addEventListener("input", () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(renderShowcase, 90);
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderShowcase();
  searchInput.focus();
});

// ===== THEME & ACCENT PICKER (PERSISTED) =====
const savedTheme = localStorage.getItem("uiux_vault_theme");
if (savedTheme === "light") document.body.classList.add("light-theme");

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  localStorage.setItem("uiux_vault_theme", isLight ? "light" : "dark");
});

const savedAccent = localStorage.getItem("uiux_vault_accent");
if (savedAccent) {
  document.documentElement.style.setProperty("--accent", savedAccent);
  document.querySelectorAll(".acc-dot").forEach(d => {
    d.classList.toggle("active", d.dataset.accent === savedAccent);
  });
}

document.querySelectorAll(".acc-dot").forEach(dot => {
  dot.addEventListener("click", () => {
    document.querySelectorAll(".acc-dot").forEach(d => d.classList.remove("active"));
    dot.classList.add("active");
    document.documentElement.style.setProperty("--accent", dot.dataset.accent);
    localStorage.setItem("uiux_vault_accent", dot.dataset.accent);
  });
});

// ===== CODE MODAL (CSS / TAILWIND) =====
const modal = document.getElementById("codeModal");
const modalTitle = document.getElementById("modalTitle");
const modalCode = document.getElementById("modalCode");

function updateModalCodeView() {
  if (!currentModalItem) return;
  modalCode.textContent = currentCodeLang === "css" ? currentModalItem.code : currentModalItem.tw;
}

function openCodeModal(item) {
  currentModalItem = item;
  modalTitle.textContent = item.name;
  updateModalCodeView();
  modal.classList.remove("hidden");
}

document.querySelectorAll(".code-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".code-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCodeLang = tab.dataset.lang;
    updateModalCodeView();
  });
});

document.getElementById("closeModal").addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });

document.getElementById("copyModalCode").addEventListener("click", () => {
  copyToClipboard(modalCode.textContent, "📋 Component snippet copied!");
});

// ===== 1. GLASSMORPHISM GENERATOR =====
const gBlur = document.getElementById("glassBlur");
const gOp = document.getElementById("glassOpacity");
const gBd = document.getElementById("glassBorder");
const gBox = document.getElementById("glassPreviewBox");
const gOut = document.getElementById("glassCssOut");

function updateGlass() {
  const b = gBlur.value;
  const o = gOp.value;
  const bd = gBd.value;
  document.getElementById("blurVal").textContent = b;
  document.getElementById("opVal").textContent = o;
  document.getElementById("bdVal").textContent = bd;

  gBox.style.background = `rgba(255, 255, 255, ${o})`;
  gBox.style.backdropFilter = `blur(${b}px)`;
  gBox.style.webkitBackdropFilter = `blur(${b}px)`;
  gBox.style.border = `1px solid rgba(255, 255, 255, ${bd})`;

  gOut.textContent = `background: rgba(255, 255, 255, ${o});
backdrop-filter: blur(${b}px);
border: 1px solid rgba(255, 255, 255, ${bd});`;
}
[gBlur, gOp, gBd].forEach(el => el.addEventListener("input", updateGlass));
updateGlass();

document.getElementById("copyGlassBtn").addEventListener("click", () => {
  copyToClipboard(gOut.textContent, "🧊 Glassmorphism CSS copied!");
});

// ===== 2. WCAG CONTRAST CHECKER =====
const fgInput = document.getElementById("fgColor");
const bgInput = document.getElementById("bgColor");
const contrastSample = document.getElementById("contrastSample");
const ratioEl = document.getElementById("contrastRatio");
const badgesEl = document.getElementById("wcagBadges");

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function luminance([r, g, b]) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function updateContrast() {
  const fg = fgInput.value;
  const bg = bgInput.value;
  contrastSample.style.color = fg;
  contrastSample.style.backgroundColor = bg;

  const l1 = luminance(hexToRgb(fg));
  const l2 = luminance(hexToRgb(bg));
  const ratio = ((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)).toFixed(2);
  ratioEl.textContent = `${ratio} : 1`;

  const aa = ratio >= 4.5;
  const aaa = ratio >= 7.0;
  badgesEl.innerHTML = `
    <span class="${aa ? 'pass-badge' : 'fail-badge'}">AA ${aa ? 'Pass ✓' : 'Fail ✕'}</span>
    <span class="${aaa ? 'pass-badge' : 'fail-badge'}">AAA ${aaa ? 'Pass ✓' : 'Fail ✕'}</span>
  `;
}
[fgInput, bgInput].forEach(el => el.addEventListener("input", updateContrast));
updateContrast();

// ===== 3. COLOR PALETTES & FONT PAIRINGS =====
const PALETTES = [
  ["#0F172A", "#6366F1", "#EC4899", "#38BDF8"],
  ["#18181B", "#10B981", "#34D399", "#FBBF24"],
  ["#1E1B4B", "#8B5CF6", "#F43F5E", "#FDE047"]
];
const palContainer = document.getElementById("palettesContainer");
PALETTES.forEach(row => {
  const div = document.createElement("div");
  div.className = "palette-row";
  div.innerHTML = row.map(hex => `<div class="swatch" style="background:${hex}" data-hex="${hex}">${hex}</div>`).join("");
  palContainer.appendChild(div);
});

palContainer.addEventListener("click", (e) => {
  const swatch = e.target.closest(".swatch");
  if (!swatch) return;
  const hex = swatch.dataset.hex;
  copyToClipboard(hex, `🎨 Copied HEX ${hex}`);
  swatch.textContent = "Copied!";
  setTimeout(() => { swatch.textContent = hex; }, 800);
});

const fontSelect = document.getElementById("fontPairSelect");
const fontPreview = document.getElementById("fontLivePreview");
fontSelect.addEventListener("change", () => {
  const [hFont, bFont] = fontSelect.value.split("|");
  fontPreview.querySelector("h4").style.fontFamily = hFont;
  fontPreview.querySelector("p").style.fontFamily = bFont;
});

// ===== 4. LIVE CODE SANDBOX (DEBOUNCED) =====
const sbEditor = document.getElementById("sandboxEditor");
const sbFrame = document.getElementById("sandboxFrame");
function updateSandbox() {
  sbFrame.srcdoc = `<body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#0f172a;font-family:sans-serif;">${sbEditor.value}</body>`;
}
let sbTimer;
sbEditor.addEventListener("input", () => {
  clearTimeout(sbTimer);
  sbTimer = setTimeout(updateSandbox, 220);
});
updateSandbox();

// ===== 5. COMMAND PALETTE (CTRL+K / CMD+K + KEYBOARD NAV) =====
const cmdModal = document.getElementById("cmdModal");
const cmdInput = document.getElementById("cmdInput");
const cmdResults = document.getElementById("cmdResults");

function openCmd() {
  cmdModal.classList.remove("hidden");
  cmdInput.value = "";
  cmdSelectedIndex = 0;
  renderCmdResults("");
  setTimeout(() => cmdInput.focus(), 20);
}

function renderCmdResults(q) {
  const allItems = Array.from(ITEM_MAP.values());
  cmdCurrentMatches = allItems
    .filter(i => i.name.toLowerCase().includes(q.toLowerCase()) || i.categoryTitle.toLowerCase().includes(q.toLowerCase()))
    .slice(0, 8);

  if (cmdSelectedIndex >= cmdCurrentMatches.length) cmdSelectedIndex = 0;

  if (cmdCurrentMatches.length === 0) {
    cmdResults.innerHTML = `<div style="padding:14px;text-align:center;color:var(--muted);font-size:0.85rem;">No components match "${q}"</div>`;
    return;
  }

  cmdResults.innerHTML = cmdCurrentMatches.map((m, i) => `
    <div class="cmd-item ${i === cmdSelectedIndex ? 'selected' : ''}" data-cmd-idx="${i}">
      <span><strong>${m.name}</strong> <small style="opacity:.75">(${m.categoryTitle})</small></span>
      <span>View Code ↵</span>
    </div>
  `).join("");
}

cmdResults.addEventListener("click", (e) => {
  const row = e.target.closest("[data-cmd-idx]");
  if (!row) return;
  const item = cmdCurrentMatches[Number(row.dataset.cmdIdx)];
  if (item) {
    cmdModal.classList.add("hidden");
    openCodeModal(item);
  }
});

document.getElementById("cmdOpenBtn").addEventListener("click", openCmd);
cmdInput.addEventListener("input", e => {
  cmdSelectedIndex = 0;
  renderCmdResults(e.target.value);
});

cmdInput.addEventListener("keydown", e => {
  if (cmdCurrentMatches.length === 0) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    cmdSelectedIndex = (cmdSelectedIndex + 1) % cmdCurrentMatches.length;
    renderCmdResults(cmdInput.value);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    cmdSelectedIndex = (cmdSelectedIndex - 1 + cmdCurrentMatches.length) % cmdCurrentMatches.length;
    renderCmdResults(cmdInput.value);
  } else if (e.key === "Enter") {
    e.preventDefault();
    const chosen = cmdCurrentMatches[cmdSelectedIndex];
    if (chosen) {
      cmdModal.classList.add("hidden");
      openCodeModal(chosen);
    }
  }
});

cmdModal.addEventListener("click", e => { if (e.target === cmdModal) cmdModal.classList.add("hidden"); });

window.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openCmd();
  }
  if (e.key === "Escape") {
    cmdModal.classList.add("hidden");
    modal.classList.add("hidden");
    closeMobileSidebar();
  }
});

// ===== 6. BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("visible", window.scrollY > 420);
}, { passive: true });

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Init
updateBookmarkCount();
renderShowcase();
