"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <h1>Error de diagnóstico</h1>
        <p>Mensaje: {error.message}</p>
        <p>Digest: {error.digest ?? "sin digest"}</p>
        <pre>{error.stack ?? "sin stack"}</pre>
        <button onClick={() => reset()}>Reintentar</button>
      </body>
    </html>
  );
}