interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: { heading: string; content: string }[];
}

export function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <main className="bg-ca-dark min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-ca-muted mb-3">Legal</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-ca-text">{title}</h1>
          <p className="text-xs text-ca-muted">Last updated: {lastUpdated}</p>
        </div>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.heading} className="border-t border-ca-border pt-6">
              <h2 className="text-base font-bold text-ca-text mb-3">{s.heading}</h2>
              <p className="text-sm text-ca-muted leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-ca-border text-xs text-ca-muted">
          Questions? Contact us at <a href="mailto:legal@collectiveaudience.co" className="text-ca-blue hover:underline">legal@collectiveaudience.co</a>
        </div>
      </div>
    </main>
  );
}
