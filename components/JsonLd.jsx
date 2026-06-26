// Renders a JSON-LD structured-data block. Server component — the script is
// serialized straight into the SSR HTML where crawlers can read it.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
