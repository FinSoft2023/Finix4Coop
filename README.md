# finrepo24b

FinSoft monorepository template

## Repository structure

- 'src/' - contains the source code (workspace root), please refer to the [README.md](src/README.md) in the 'src/' directory for more information
- 'backemu/' - contains the backend emulator
- 'docs/' - contains the documentation
- 'build/' - contains the build artifacts
- 'presentations/' - contains the presentations and slides

## Requirements

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Docker](https://www.docker.com/) - Containerization platform
- [VS Code](https://code.visualstudio.com/) - Code editor
- [Nx Console](https://nx.dev/nx-console) - Nx Console provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Getting started

- For development purpose you could run services reside in 'backemu/' directory
- To run those services you need to have Docker installed
- Run the following command to start the services:

```bash
cd backemu
docker compose up
```

- To stop the services run the following command (in the same directory 'backemu/'):

```bash
docker compose down
```
