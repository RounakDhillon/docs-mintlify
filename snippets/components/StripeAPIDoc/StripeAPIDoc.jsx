// Stripe-like layout with sticky code panel on the right

export const StripeAPIDoc = ({ children, endpoint }) => {
  const parts = endpoint ? endpoint.split(' ') : [];
  const method = parts[0] || '';
  const path = parts.slice(1).join(' ');

  const methodColors = {
    GET: { bg: '#dbeafe', color: '#1d4ed8' },
    POST: { bg: '#dcfce7', color: '#16a34a' },
    PUT: { bg: '#fef3c7', color: '#d97706' },
    PATCH: { bg: '#e0e7ff', color: '#4f46e5' },
    DELETE: { bg: '#fee2e2', color: '#dc2626' },
  };
  const colors = methodColors[method] || methodColors.GET;

  return (
    <div>
      {endpoint && (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.5rem 1rem',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          fontFamily: 'Monaco, Menlo, monospace',
          fontSize: '0.875rem',
        }}>
          <span style={{
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            background: colors.bg,
            color: colors.color,
          }}>{method}</span>
          <span style={{ color: '#475569' }}>{path}</span>
        </div>
      )}
      {children}
    </div>
  );
};

// Content section (left side text)
export const SectionContent = ({ title, children }) => (
  <div style={{
    paddingBottom: '1.5rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid #e5e7eb',
  }}>
    {title && <h3 style={{
      fontSize: '1.1rem',
      fontWeight: 600,
      margin: '0 0 0.5rem 0',
      color: '#111827',
    }}>{title}</h3>}
    <div style={{
      color: '#4b5563',
      lineHeight: 1.7,
      fontSize: '0.925rem',
    }}>{children}</div>
  </div>
);

// Code block (for right panel display)
export const CodeBlock = ({ title, children }) => {
  const fmt = (c) => {
    if (typeof c !== 'string') return c;
    try { return JSON.stringify(JSON.parse(c), null, 2); }
    catch { return c; }
  };

  return (
    <div style={{
      background: '#1f2937',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom: '1rem',
    }}>
      {title && (
        <div style={{
          padding: '0.5rem 1rem',
          background: '#111827',
          borderBottom: '1px solid #374151',
          fontSize: '0.75rem',
          fontWeight: 500,
          color: '#9ca3af',
          textTransform: 'uppercase',
        }}>{title}</div>
      )}
      <pre style={{
        margin: 0,
        padding: '1rem',
        overflowX: 'auto',
        fontFamily: 'Monaco, Menlo, monospace',
        fontSize: '0.8rem',
        lineHeight: 1.6,
        color: '#e5e7eb',
      }}><code>{fmt(children)}</code></pre>
    </div>
  );
};

export default StripeAPIDoc;
