export function CodePreview() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-4 font-mono text-sm text-zinc-700">
      <p className="text-zinc-500"># Sample request</p>
      <pre className="mt-2 whitespace-pre-wrap break-words">
        <code>
          curl https://api.agentintents.com/v1/intent \
          {"\n"}
          {"  "}-H &quot;Authorization: Bearer &lt;key&gt;&quot; \
          {"\n"}
          {"  "}-d &apos;intent=&quot;Book meeting with Stripe team&quot;&apos;
        </code>
      </pre>
    </div>
  );
}

