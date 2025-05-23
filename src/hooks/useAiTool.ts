const API_KEY = import.meta.env.VITE_API_KEY;

export async function UseAiTool(training: string, input: string): Promise<string> {
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

    const data = await res.json();
    const summary = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return summary;
}