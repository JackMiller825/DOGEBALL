import type { ReactNode } from "react";
import { siteConfig } from "../config/site.ts";
import { officialHttpUrl } from "../lib/official.ts";

type BuyActionProps = {
  className?: string;
  children: ReactNode;
};

export function BuyAction({ className, children }: BuyActionProps) {
  const buyUrl = officialHttpUrl(siteConfig.buyUrl);

  if (buyUrl) {
    return (
      <a className={className} href={buyUrl} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <a className={className} href="#how-to-buy">
      {children}
    </a>
  );
}
