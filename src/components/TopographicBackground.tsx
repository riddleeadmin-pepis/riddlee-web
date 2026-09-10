export default function TopographicBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black" />

      <svg
        className="absolute -top-[20%] left-0 h-[140%] w-full opacity-90"
        viewBox="0 0 1600 1100"
        preserveAspectRatio="xMidYMid slice"
      >
        <g
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          className="topo-fall"
        >
          <path d="M-150 80 C80 -40 270 40 360 190 S590 370 790 240 S1100 20 1320 190 S1580 340 1760 220" />
          <path d="M-170 150 C60 30 260 100 380 250 S610 430 820 310 S1120 100 1350 270 S1590 440 1780 330" />
          <path d="M-190 230 C30 120 250 180 400 330 S650 500 850 390 S1160 190 1390 350 S1610 520 1810 420" />

          <path d="M-120 520 C80 390 270 430 390 570 S620 760 830 650 S1160 440 1370 590 S1600 770 1780 660" />
          <path d="M-160 600 C50 470 280 500 410 650 S650 830 870 730 S1180 520 1410 680 S1630 850 1810 760" />

          <path d="M-180 880 C40 760 250 790 380 930 S610 1090 820 990 S1130 790 1360 930 S1600 1080 1800 990" />
        </g>

        <g
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.1"
          strokeDasharray="7 9"
          className="topo-fall-reverse"
        >
          <path d="M180 -120 C40 100 110 320 300 370 S610 270 740 450 S850 780 1070 820 S1410 620 1540 770" />
          <path d="M320 -120 C180 80 240 290 430 340 S730 260 850 420 S960 730 1170 780 S1460 610 1640 730" />
          <path d="M1150 -170 C1010 40 1070 250 1250 310 S1500 280 1710 450" />
        </g>

        <g
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.2"
          className="topo-drift"
        >
          <ellipse cx="310" cy="250" rx="135" ry="85" />
          <ellipse cx="310" cy="250" rx="180" ry="120" />

          <ellipse cx="1270" cy="220" rx="110" ry="72" />
          <ellipse cx="1270" cy="220" rx="155" ry="105" />

          <ellipse cx="1030" cy="750" rx="120" ry="80" />
          <ellipse cx="1030" cy="750" rx="170" ry="115" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/40" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

      <style>
        {`
          @keyframes topoFall {
            0% {
              transform: translate3d(0, -80px, 0);
            }

            50% {
              transform: translate3d(55px, 95px, 0);
            }

            100% {
              transform: translate3d(0, 260px, 0);
            }
          }

          @keyframes topoFallReverse {
            0% {
              transform: translate3d(0, 120px, 0);
            }

            50% {
              transform: translate3d(-50px, 15px, 0);
            }

            100% {
              transform: translate3d(0, -200px, 0);
            }
          }

          @keyframes topoDrift {
            0% {
              transform: translate3d(-30px, -70px, 0) scale(1);
            }

            50% {
              transform: translate3d(45px, 95px, 0) scale(1.05);
            }

            100% {
              transform: translate3d(-30px, 240px, 0) scale(1);
            }
          }

          .topo-fall {
            animation: topoFall 13s linear infinite alternate;
            transform-origin: center;
          }

          .topo-fall-reverse {
            animation: topoFallReverse 17s linear infinite alternate;
            transform-origin: center;
          }

          .topo-drift {
            animation: topoDrift 15s ease-in-out infinite alternate;
            transform-origin: center;
          }

          @media (prefers-reduced-motion: reduce) {
            .topo-fall,
            .topo-fall-reverse,
            .topo-drift {
              animation: none;
            }
          }
        `}
      </style>
    </div>
  );
}