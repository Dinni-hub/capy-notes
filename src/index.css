@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Pacifico&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Caveat:wght@400..700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Quicksand", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", serif;
  --font-mono: "JetBrains Mono", monospace;
  --font-cursive: "Pacifico", cursive;
  --font-hand: "Caveat", cursive;
  --font-montserrat: "Montserrat", sans-serif;

  /* Classic Theme */
  --color-classic-bg: #fdf5e6;
  --color-classic-ink: #3e2723;
  --color-classic-accent: #795548;

  /* Matcha Theme */
  --color-matcha-bg: #f0f4f0;
  --color-matcha-ink: #1b3022;
  --color-matcha-accent: #4a6741;

  /* Lavender Theme */
  --color-lavender-bg: #f3f0f7;
  --color-lavender-ink: #2d2438;
  --color-lavender-accent: #6b5b95;

  /* Peach Theme */
  --color-peach-bg: #fff5f0;
  --color-peach-ink: #4a2c2a;
  --color-peach-accent: #e07a5f;

  /* Cocoa Theme */
  --color-cocoa-bg: #3e2723;
  --color-cocoa-ink: #fdf5e6;
  --color-cocoa-accent: #d7ccc8;
}

@layer base {
  body {
    @apply transition-colors duration-500;
  }
}

/* Theme Classes */
.theme-classic { @apply bg-[var(--color-classic-bg)] text-[var(--color-classic-ink)]; }
.theme-matcha { @apply bg-[var(--color-matcha-bg)] text-[var(--color-matcha-ink)]; }
.theme-lavender { @apply bg-[var(--color-lavender-bg)] text-[var(--color-lavender-ink)]; }
.theme-peach { @apply bg-[var(--color-peach-bg)] text-[var(--color-peach-ink)]; }
.theme-cocoa { @apply bg-[var(--color-cocoa-bg)] text-[var(--color-cocoa-ink)]; }

.capy-card {
  @apply bg-white border-2 border-black/5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300;
}

.capy-button {
  @apply px-4 py-2 rounded-xl font-semibold active:scale-95 transition-all;
}

.capy-input {
  @apply w-full bg-black/5 border-2 border-transparent rounded-xl px-4 py-2 focus:outline-none focus:border-black/10 transition-colors;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* List Styles */
.list-bullet-circle { list-style-type: circle; }
.list-bullet-square { list-style-type: square; }
.list-bullet-disc { list-style-type: disc; }
.list-bullet-arrow { list-style-type: '➢ '; }
.list-bullet-check { list-style-type: '✓ '; }
.list-number-decimal { list-style-type: decimal; }
.list-number-roman { list-style-type: upper-roman; }
.list-number-alpha-upper { list-style-type: upper-alpha; }
.list-number-alpha-lower { list-style-type: lower-alpha; }
.list-number-bracket { list-style-type: decimal; }
.list-number-bracket li { list-style-type: none; counter-increment: item; position: relative; padding-left: 1.5rem; }
.list-number-bracket li::before { content: counter(item) ") "; position: absolute; left: 0; }
.list-number-alpha-lower-bracket li { list-style-type: none; counter-increment: item; position: relative; padding-left: 1.5rem; }
.list-number-alpha-lower-bracket li::before { content: counter(item, lower-alpha) ") "; position: absolute; left: 0; }
