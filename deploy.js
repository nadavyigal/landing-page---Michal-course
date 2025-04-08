const { execSync } = require('child_process');

console.log('Starting deployment to Vercel...');

try {
  // Install Vercel CLI if not already installed
  console.log('Installing Vercel CLI...');
  execSync('npm install -g vercel@latest', { stdio: 'inherit' });

  // Deploy to Vercel
  console.log('Deploying to Vercel...');
  execSync('vercel --prod', { stdio: 'inherit' });

  console.log('Deployment completed successfully!');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
} 