module.exports = {
  '*.{ts,js,vue}': [
    () => 'npm run check-types',
    'npm run lint',
    'npm run format',
  ],
}
