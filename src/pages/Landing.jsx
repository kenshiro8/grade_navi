export default function Landing() {
  return (
    <div style={{ padding: 40 }}>
      <h1>時間割管理アプリ</h1>

      <section>
        <h2>企画書</h2>
        <a href="/docs/plan.pdf" target="_blank" rel="noopener noreferrer">
          企画書（PDF）
        </a>
      </section>

      <section>
        <h2>使用方法</h2>
        <a href="/docs/manual.pdf" target="_blank" rel="noopener noreferrer">
          使用方法（PDF）
        </a>
      </section>

      <section>
        <h2>紹介ビデオ</h2>
        <video src="/video.mp4" controls width="600" />
      </section>

      <section style={{ marginTop: 40 }}>
        <a
          href="https://grade-navi.vercel.app/"  // ← ここに外部WebアプリURLを入れる
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ fontSize: 20, padding: "10px 20px" }}>
            ▶ アプリを実行
          </button>
        </a>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>ソースコード</h2>
        <a
          href="https://github.com/xxxxx"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub リポジトリ
        </a>
      </section>
    </div>
  );
}