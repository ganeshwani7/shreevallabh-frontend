.PHONY: install dev build deploy clean all help

help:
	@echo "Available commands:"
	@echo "  make install"
	@echo "  make dev"
	@echo "  make build"
	@echo "  make deploy"
	@echo "  make clean"
	@echo "  make all"

install:
	cd app && npm install --registry=https://registry.npmjs.org

dev:
	cd app && npm run start

build:
	cd app && npm run build

deploy: build
	cd app && npx angular-cli-ghpages \
		--dir=dist/app/browser \
		--no-silent \
		--cname=shreevallabhagency.com

clean:
	rm -rf app/dist
	rm -rf app/node_modules/.cache

all: install build deploy