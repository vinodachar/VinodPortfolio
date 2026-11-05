/**
 * Text that "interferes" (RGB-split jitter) on hover.
 * The hidden size layer reserves space; the live layer animates.
 */
export default function SignalText({ children }) {
  return (
    <span className="signal-text">
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="signal-text-size">{children}</span>
      <span aria-hidden="true" className="signal-text-live">{children}</span>
    </span>
  );
}
