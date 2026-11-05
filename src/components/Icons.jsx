const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...base}><path d="M4.5 11.5l7-7M5.5 4.5h6v6" /></svg>
);
export const ArrowDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...base}><path d="M8 3v10M4 9l4 4 4-4" /></svg>
);
export const ArrowUp = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...base}><path d="M8 13V3M4 7l4-4 4 4" /></svg>
);
export const Plus = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...base}><path d="M8 2.5v11M2.5 8h11" /></svg>
);
export const Play = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.2v9.6L13 8z" fill="currentColor" /></svg>
);
export const Close = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...base}><path d="M4 4l8 8M12 4l-8 8" /></svg>
);
export const Instagram = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" /></svg>
);
export const YouTube = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" /></svg>
);
export const Studio = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></svg>
);
export const Mic = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...base}><rect x="5.5" y="1.5" width="5" height="8" rx="2.5" /><path d="M3 8a5 5 0 0010 0M8 13v2" /></svg>
);
export const Motion = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...base}><path d="M1.5 8c2-4 4-4 6.5 0s4.5 4 6.5 0" /></svg>
);
