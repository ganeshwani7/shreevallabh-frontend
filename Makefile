# Shree Vallabh Agency Frontend - Makefile
# ==========================================

.PHONY: install dev build deploy clean help

# Default target
help:
	@echo "Available commands:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start development server"
	@echo "  make build    - Build for production"
	@echo "  make deploy   - Deploy to GitHub Pages"
	@echo "  make clean    - Clean build artifacts"
	@echo "  make all      - Install, build, and deploy"

# Install dependencies
install:
	cd app && npm install --registry=https://registry.npmjs.org

# Start development server
dev:
	cd app && npm run start

# Build for production
build:
	cd app && npm run build

# Deploy to GitHub Pages
deploy: build
	cd app && npx angular-cli-ghpages --dir=dist/app/browser

# Clean build artifacts
clean:
	rm -rf app/dist
	rm -rf app/node_modules/.cache

# Full deployment pipeline
all: install build deploy
