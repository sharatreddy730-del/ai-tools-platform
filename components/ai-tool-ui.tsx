"use client"

import { useState } from "react"

export default function AIToolUI({ toolName }: { toolName: string }) {

    const [input, setInput] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const generate = async () => {
        if (!input) return

        setLoading(true)

        const res = await fetch("/api/generate", {
            method: "POST",
            body: JSON.stringify({
                tool: toolName,
                input
            })
        })

        const data = await res.json()

        setResult(data.result)
        setLoading(false)
    }

    return (
        <div className="glass-card" style={{ padding: 28, marginTop: 32 }}>

            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>
                Try {toolName}
            </h3>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter product name or keyword"
                style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: "1px solid var(--border)",
                    marginBottom: 14
                }}
            />

            <button
                onClick={generate}
                className="btn-primary"
                style={{ padding: "12px 28px" }}
            >
                {loading ? "Generating..." : "Generate"}
            </button>

            {result && (
                <div style={{
                    marginTop: 20,
                    background: "var(--bg-secondary)",
                    padding: 18,
                    borderRadius: 10,
                    fontSize: 14,
                    lineHeight: 1.7
                }}>
                    {result}
                </div>
            )}
        </div>
    )
}