# Compare Markdown Renderers
Compare with [Streamdown](https://github.com/vercel/streamdown) vs [react-markdown](https://github.com/remarkjs/react-markdown).

## Features
| Feature                     | Streamdown | react-markdown |
|-----------------------------|------------|----------------|
| Basic Markdown Support      | ✅         | ✅               |
| Streaming(Unterminated block parsing)         |  ✅         | ❌             |
| Plugin(remarkPlugins and rehypePlugins)           |  ⚠️ (have problem with remarkPlugins: remarkToc [#144](https://github.com/vercel/streamdown/issues/144))       |  ✅             |
| Use customize components to replace tags         |  ✅         |  ✅             |
| GitHub Flavored Markdown               | ✅        | ✅ (Support with Plugin)              |
| Security(XSS Prevention)               | ✅        | ✅           |

## Run Locally
```bash
pnpm install
pnpm dev
```

visit: http://localhost:3000
