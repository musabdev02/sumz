const API_KEY = import.meta.env.VITE_API_KEY;

export async function UseAiTool(training: string, input: string): Promise<string> {
    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `${training}:\n\n${input}`
                            }
                        ]
                    }
                ]
            }),
        });

        if (!res.ok) {
            
            const errorData = await res.json();
            const message = errorData?.error?.message || `Request failed with status ${res.status}`;
            throw new Error(message);
        }

        const data = await res.json();
        const summary = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        return summary || "No summary was returned.";

    } catch (error: unknown) {
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    }
    return "An unexpected error occurred.";
  }

}