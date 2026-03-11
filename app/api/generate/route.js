import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req) {

    const body = await req.json()

    const { tool, input } = body

    const prompt = `
You are an ecommerce copywriting AI.

Tool: ${tool}

User Input: ${input}

Generate high-quality ecommerce content.
`

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "user", content: prompt }
        ]
    })

    return Response.json({
        result: completion.choices[0].message.content
    })

}