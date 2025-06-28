
esbuild ./src/app.jsx --bundle --outdir=dist --drop:console  --minify --jsx-factory=$.h --jsx-fragment=$.f --splitting  --format=esm --external:./api/api --external:*/api/api.js --external:*/fw.js  --legal-comments=eof  --loader:.woff=file --loader:.woff2=file --loader:.ttf=file
xcopy ./src/api ./dist/ /y /s /e
