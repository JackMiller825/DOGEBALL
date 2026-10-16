import { useEffect, useId, useRef, useState } from "react";
import { placeholders, siteConfig } from "../config/site.ts";
import { configuredContractAddress } from "../lib/official.ts";

type ToastTone = "success" | "error";

type ToastState = {
  tone: ToastTone;
  message: string;
};

export function CopyAddressButton() {
  const address = configuredContractAddress(siteConfig.contractAddress);
  const addressRef = useRef<HTMLElement>(null);
  const [toast, setToast] = useState<ToastState | null>(null);
  const helpId = useId();
  const statusId = useId();

  useEffect(() => {
    if (!toast) return;
    const timeoutId = window.setTimeout(() => setToast(null), 3600);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  function selectAddress() {
    const node = addressRef.current;
    if (!node) return;
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  async function copyAddress() {
    if (!address) return;

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(address);
      setToast({ tone: "success", message: "Contract address copied" });
    } catch {
      selectAddress();
      setToast({
        tone: "error",
        message: "Copy failed. The address is selected so you can copy it manually.",
      });
    }
  }

  return (
    <div className="contract-block">
      <div className="contract-bar">
        <span className="contract-kicker">CONTRACT</span>
        <code
          id="contract-address"
          ref={addressRef}
          className="contract-value"
          data-state={address ? "configured" : "pending"}
        >
          {address ?? placeholders.contract}
        </code>
        <button
          type="button"
          className="copy-button"
          onClick={copyAddress}
          disabled={!address}
          aria-describedby={`${helpId} ${statusId}`}
          aria-label={
            address
              ? "Copy contract address"
              : "Copy contract address, unavailable until an address is published"
          }
        >
          COPY
        </button>
      </div>
      <p className="contract-help" id={helpId}>
        Check the official contract before you buy.
      </p>
      <div className="toast-region" id={statusId} aria-live="polite" aria-atomic="true">
        {toast ? (
          <p className={toast.tone === "success" ? "toast" : "toast is-error"} role="status">
            {toast.tone === "success" ? <span aria-hidden="true">✓ </span> : null}
            {toast.message}
          </p>
        ) : null}
      </div>
    </div>
  );
}
