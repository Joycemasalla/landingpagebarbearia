export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Página indisponível — Barbearia do Romário</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #0b0b0b; color: #f5f5f5; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.5rem; margin: 0 0 0.75rem; color: #d4af37; }
      p { color: #b8b8b8; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.6rem 1.1rem; border-radius: 999px; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #d4af37; color: #111; font-weight: 600; }
      .secondary { background: transparent; color: #f5f5f5; border-color: #333; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Não foi possível carregar a página</h1>
      <p>Algo deu errado do nosso lado. Tente novamente ou volte para a página inicial.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Tentar novamente</button>
        <a class="secondary" href="/">Ir para o início</a>
      </div>
    </div>
  </body>
</html>`;
}
