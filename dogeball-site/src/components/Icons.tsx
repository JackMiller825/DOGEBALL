import type { ReactNode } from "react";

export type IconName =
  | "home"
  | "whistle"
  | "scoreboard"
  | "wallet"
  | "users"
  | "flame"
  | "dodge"
  | "trophy"
  | "coins"
  | "percent"
  | "drop"
  | "key"
  | "link"
  | "shield"
  | "arrow"
  | "down";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg className={className ? `icon ${className}` : "icon"} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<IconName, ReactNode> = {
  home: <path {...stroke} d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />,
  whistle: (
    <>
      <path {...stroke} d="M4 9h5l1.5 2" />
      <circle {...stroke} cx="14" cy="14" r="5.5" />
      <path {...stroke} d="M14 11.5v2.2l1.6 1" />
    </>
  ),
  scoreboard: (
    <>
      <rect {...stroke} x="3" y="5" width="18" height="14" rx="2" />
      <path {...stroke} d="M12 5v14M3 12h18" />
    </>
  ),
  wallet: (
    <>
      <rect {...stroke} x="3" y="6" width="18" height="13" rx="2" />
      <path {...stroke} d="M3 10h18" />
      <circle cx="16.5" cy="14.5" r="1" fill="currentColor" />
    </>
  ),
  users: (
    <>
      <circle {...stroke} cx="9" cy="8" r="3" />
      <path {...stroke} d="M3.5 19c.8-2.8 2.8-4.2 5.5-4.2s4.7 1.4 5.5 4.2" />
      <circle {...stroke} cx="17" cy="9" r="2.2" />
      <path {...stroke} d="M16 14.8c1.6.2 2.9 1.2 3.8 3.2" />
    </>
  ),
  flame: <path {...stroke} d="M12 3c1 3 4 4.2 4 8a4 4 0 1 1-8 0c0-1.6.8-2.8 1.6-4 .6 1.3 1.4 2 2.4 2C12 7 12 5 12 3z" />,
  dodge: (
    <>
      <path {...stroke} d="M4 16c3.5-7 9-8 13-4" />
      <path {...stroke} d="M14 8.5 17.5 12 14 14.5" />
    </>
  ),
  trophy: (
    <>
      <path {...stroke} d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path {...stroke} d="M8 6H5.5A2.5 2.5 0 0 0 8 9.5M16 6h2.5A2.5 2.5 0 0 1 16 9.5M12 13v3M9 20h6M8.5 17h7" />
    </>
  ),
  coins: (
    <>
      <ellipse {...stroke} cx="12" cy="7" rx="7" ry="3" />
      <path {...stroke} d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4" />
    </>
  ),
  percent: (
    <>
      <path {...stroke} d="M18 6 6 18" />
      <circle {...stroke} cx="8" cy="8" r="2" />
      <circle {...stroke} cx="16" cy="16" r="2" />
    </>
  ),
  drop: <path {...stroke} d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  key: (
    <>
      <circle {...stroke} cx="8" cy="14" r="3.2" />
      <path {...stroke} d="M11 14h9l-2 2.2h2.2L18 18.4" />
    </>
  ),
  link: (
    <>
      <path {...stroke} d="M10 13.5a4.2 4.2 0 0 0 6 0l1.8-1.8a4.2 4.2 0 0 0-6-6L10.6 6.9" />
      <path {...stroke} d="M14 10.5a4.2 4.2 0 0 0-6 0l-1.8 1.8a4.2 4.2 0 0 0 6 6l1.2-1.2" />
    </>
  ),
  shield: (
    <>
      <path {...stroke} d="M12 3.5 19 6.2v5.6c0 4.2-2.8 7-7 8.7-4.2-1.7-7-4.5-7-8.7V6.2z" />
      <path {...stroke} d="m9 12 2 2 4-4" />
    </>
  ),
  arrow: <path {...stroke} d="M5 12h14M13 6l6 6-6 6" />,
  down: <path {...stroke} d="M12 5v14M6 13l6 6 6-6" />,
};
