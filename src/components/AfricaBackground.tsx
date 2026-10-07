export default function AfricaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 hero-gradient" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Animated connection lines / network */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1200" y2="800">
            <stop stopColor="#b8913a" stopOpacity="0" />
            <stop offset="0.5" stopColor="#c8a54c" stopOpacity="0.4" />
            <stop offset="1" stopColor="#b8913a" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="nodeGrad">
            <stop stopColor="#d6bc7a" stopOpacity="0.8" />
            <stop offset="1" stopColor="#b8913a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Stylized Africa-like continent outline (abstract, not realistic) */}
        <path
          d="M500 180 C540 160, 600 155, 650 170 C700 185, 730 210, 750 250 C770 290, 780 340, 770 390 C760 440, 740 490, 720 530 C700 570, 670 600, 630 620 C590 640, 550 645, 510 635 C470 625, 440 600, 420 565 C400 530, 390 490, 395 445 C400 400, 415 360, 430 320 C445 280, 460 240, 480 210 C490 195, 495 187, 500 180 Z"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse-glow"
        />

        {/* Connection lines between nodes (sectors) */}
        <g stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.5">
          <line x1="550" y1="300" x2="650" y2="350" />
          <line x1="650" y1="350" x2="700" y2="450" />
          <line x1="550" y1="300" x2="480" y2="400" />
          <line x1="480" y1="400" x2="520" y2="500" />
          <line x1="520" y1="500" x2="620" y2="520" />
          <line x1="620" y1="520" x2="700" y2="450" />
          <line x1="550" y1="300" x2="700" y2="450" />
          <line x1="480" y1="400" x2="650" y2="350" />
          <line x1="600" y1="250" x2="550" y2="300" />
          <line x1="600" y1="250" x2="650" y2="350" />
        </g>

        {/* Nodes (representing sectors and connections) */}
        <g>
          {[
            [550, 300], [650, 350], [700, 450], [480, 400],
            [520, 500], [620, 520], [600, 250], [580, 380],
            [680, 400], [510, 450], [560, 550], [650, 480],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              fill="url(#nodeGrad)"
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </g>

        {/* Outer decorative arcs */}
        <circle cx="600" cy="400" r="280" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="600" cy="400" r="340" stroke="url(#lineGrad)" strokeWidth="0.3" fill="none" opacity="0.2" strokeDasharray="4 8" />
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-400/30 animate-float"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </div>
  );
}
