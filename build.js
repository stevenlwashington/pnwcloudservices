import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  // Build client
  console.log('Building client...');
  execSync('vite build', { stdio: 'inherit', cwd: __dirname });

  // Build server
  console.log('Building server...');
  execSync(
    'esbuild server/index-prod.ts --platform=node --packages=external --bundle --format=cjs --outfile=dist/index.cjs',
    { stdio: 'inherit', cwd: __dirname, shell: true }
  );

  console.log('Build complete! Output: dist/index.cjs');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
