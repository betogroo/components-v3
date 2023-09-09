echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

echo "module.exports = {singleQuote: true,semi: false,trailingComma: 'all',printWidth: 80,tabWidth: 2,endOfLine: 'auto',singleAttributePerLine: true,}" > .prettierrc.js

echo '{ "recommendations": ["streetsidesoftware.code-spell-checker-portuguese-brazilian","streetsidesoftware.code-spell-checker","dracula-theme.theme-dracula","dbaeumer.vscode-eslint","donjayamanne.githistory","eamodio.gitlens","pkief.material-icon-theme","esbenp.prettier-vscode","vue.vscode-typescript-vue-plugin","vue.volar","lukas-tr.materialdesignicons-intellisense","sdras.vue-vscode-snippets","formulahendry.auto-rename-tag","shinotatwu-ds.file-tree-generator"]}' > .vscode/extensions

echo '{"version": "0.2","ignorePaths": [],"dictionaryDefinitions": [],"dictionaries": [],"language": "en,pt-BR,lorem","words": ["commitlint","composables","Composables","firestore","materialdesignicons","Roboto","supabase","unsub","vuetify","webfontloader"],"ignoreWords": [],"import": []}' > cspell.json

echo "module.exports = {'*.{ts,js}': [() => 'npm run check-types', 'npm run lint', 'npm run format'],'*.vue': [() => 'npm run vue-check-types', 'npm run lint', 'npm run format'],}" > lint-staged.config.js
