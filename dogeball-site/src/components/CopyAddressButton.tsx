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

  function copyWithSelection(value: string) {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "0";
    field.style.left = "0";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.focus();
    field.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    field.remove();
    return copied;
  }

  async function copyAddress() {
    const value = address ?? placeholders.contract;
    const message = address ? "Contract address copied" : "Copied";
    const legacyCopied = copyWithSelection(value);

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(value);
      window.getSelection()?.removeAllRanges();
      setToast({ tone: "success", message });
    } catch {
      if (legacyCopied) {
        window.getSelection()?.removeAllRanges();
        setToast({ tone: "success", message });
        return;
      }
      selectAddress();
      setToast({
        tone: "error",
        message: "Copy failed. The text is selected so you can copy it manually.",
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
          aria-describedby={statusId}
          aria-label={address ? "Copy contract address" : "Copy Coming Soon"}
        >
          COPY
        </button>
      </div>
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
