# @huggingface/responses-server

A lightweight Express.js server supporting Responses API on top of Inference Provider Chat Completion API.

## 📁 Project Structure

```
responses-server/
├── src/
│   ├── index.ts           
│   ├── server.ts     # Express app configuration (e.g. route definition)
│   ├── routes/       # Routes implementation
│   ├── middleware/   # Middlewares (validation + logging)
│   └── schemas/      # Zod validation schemas
├── scripts/          # Utility scripts
├── package.json      # Package configuration
```

## 🚀 Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Run examples

Some example scripts are implemented in ./examples.

You can run them using

```bash
# Run ./examples/text.js
pnpm run example text

# Run ./examples/multi_turn.js
pnpm run example multi_turn
```

