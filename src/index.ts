import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
dotenv.config(); // .envファイルを読み込む場合

async function main() {
    console.log("APIキー", process.env.ANTHROPIC_API_KEY); // 環境変数を確認
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY, // 環境変数を使う
  });

  try {
    const msg = await anthropic.messages.create({
      model: "claude-3-7-sonnet-20250219",
      max_tokens: 1024,
      messages: [{ role: "user", content: "こんにちはあなたは誰ですか？"}],
    });
    console.log(JSON.stringify(msg, null, 2)); // 結果を見やすく表示
  } catch (error) {
    console.error("Anthropic API call failed:", error);
  }
}

main();

