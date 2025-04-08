const { execSync } = require('child_process');

console.log('Starting non-interactive deployment to Vercel...');

try {
  console.log('Deploying to Vercel...');
  // Using --token would be ideal but we don't have it, so we'll use yes to auto-confirm prompts
  execSync('echo y | vercel --prod', { stdio: 'inherit' });
  
  console.log('Deployment completed successfully!');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
} 