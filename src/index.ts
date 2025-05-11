import Anthropic from "@anthropic-ai/sdk"
import dotenv from "dotenv"
dotenv.config() // .envファイルを読み込む場合

async function main() {
  console.log("APIキー:", process.env.ANTHROPIC_API_KEY) // 環境変数を確認
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY, // 環境変数を使う
  })

  try {
    const response = await anthropic.messages.create({
      model: "claude-3-7-sonnet-20250219",
      max_tokens: 1024,
      messages: [{ role: "user", content: "こんにちはあなたは誰ですか？" }],
    })

    console.log("メッセージタイプ:", response.type)

    console.log("inputTokens:", response.usage.input_tokens)
    console.log("outputTokens:", response.usage.output_tokens)
    console.log("cacheWriteTokens:", response.usage.cache_creation_input_tokens)
    console.log("cacheReadTokens:", response.usage.cache_read_input_tokens)

    if (
      response.content &&
      response.content.length > 0 &&
      response.content[0].type === "text"
    ) {
      const messageContentText = response.content[0].text
      console.log("メッセージ内容:", messageContentText)
    }
  } catch (error) {
    console.error("Anthropic API call failed:", error)
  }
}

main()
