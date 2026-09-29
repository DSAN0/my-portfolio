export const debuggingKnowledge = [
  {
    id: "debugging-tools",
    category: "Debugging",
    title: "Debugging Strategies, Breakpoints & Log Inspection",
    keywords: [
      "debugging", "breakpoint", "python pdb", "debugger", "console.log", "stack trace", "inspect error"
    ],
    exampleQuestions: [
      "How do I use Python built-in breakpoint() / pdb debugger?",
      "How do I inspect network requests and console errors in Chrome DevTools?",
      "How do I read and debug stack traces effectively?"
    ],
    type: "concept",
    answer: {
      summary: "Effective debugging combines structured logging, interactive breakpoints, and systematic hypothesis testing.",
      command: `# Python breakpoint inspection:
def process_payment(order_id):
    order = get_order(order_id)
    breakpoint()  # Drops into interactive (Pdb) prompt at runtime
    return execute_charge(order)

// JavaScript debugger statement:
function calculateTotal(items) {
  debugger; // Triggers browser DevTools breakpoint if open
  return items.reduce((acc, item) => acc + item.price, 0);
}`,
      language: "python",
      explanation: "Using `breakpoint()` allows stepping line-by-line (`n`), inspecting local variables (`p var`), and continuing execution (`c`).",
      notes: [
        "In production, use structured logging libraries (e.g. Python `logging` or Node `winston`) instead of plain print statements."
      ],
      relatedTopics: ["linux-cli", "troubleshoot-django-migrations"]
    }
  }
];
