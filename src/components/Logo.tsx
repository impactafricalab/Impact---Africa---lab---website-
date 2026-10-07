interface LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
  light?: boolean;
  logoUrl?: string | null;
}

export default function Logo({ variant = 'full', className = '', light = false, logoUrl = null }: LogoProps) {
  const textColor = light ? 'text-white' : 'text-navy-900';
  const subColor = light ? 'text-gold-300' : 'text-gold-500';

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt="Impact Africa Lab"
        className={`h-11 w-auto max-w-[min(80vw,240px)] object-contain object-left sm:h-12 sm:max-w-[280px] ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex-shrink-0 w-11 h-11">
        <svg viewBox="0 0 44 44" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="20" stroke="url(#goldGrad)" strokeWidth="1.5" />
          <path
            d="M22 4 a18 18 0 0 1 0 36 a14 18 0 0 1 0 -36"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M24.5 11c1.8 0 3.3 1.4 3.3 3.2 0 1.3-.7 2.2-1.3 3.1-.5.7-.9 1.4-.9 2.3 0 .8.3 1.4.8 2 .4.5.6 1.1.6 1.8 0 1.5-1.2 2.7-2.8 2.7-.8 0-1.5-.3-2-.8-.6.5-1.4.8-2.3.8-1.8 0-3.3-1.4-3.3-3.2 0-1.3.7-2.2 1.3-3.1.5-.7.9-1.4.9-2.3 0-.8-.3-1.4-.8-2-.4-.5-.6-1.1-.6-1.8 0-1.5 1.2-2.7 2.8-2.7.9 0 1.7.4 2.2 1 .5-.6 1.3-1 2.1-1z"
            fill="url(#goldGrad)"
            opacity="0.85"
          />
          <circle cx="22" cy="22" r="20" stroke="url(#goldGrad)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="44" y2="44">
              <stop stopColor="#d6bc7a" />
              <stop offset="0.5" stopColor="#b8913a" />
              <stop offset="1" stopColor="#d6bc7a" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {variant === 'full' && (
        <div className="leading-tight">
          <div className={`font-display font-semibold text-[15px] tracking-wide ${textColor}`}>
            IMPACT AFRICA
          </div>
          <div className={`font-display text-[13px] tracking-[0.3em] ${subColor}`}>
            LAB
          </div>
        </div>
      )}
    </div>
  );
}
