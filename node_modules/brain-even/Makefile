provision:
	ansible-playbook cm/vagrant.yml -i 'localhost, ' -c local -vv

run:
	npm run babel-node -- ./src/bin/$(G)

lint:
	npm run eslint -- src test

install:
	install-deps install-flow-typed

install-deps:
	yarn

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run build

test:
	npm test

check-types:
	npm run flow

publish:
	npm publish

.PHONY: test
