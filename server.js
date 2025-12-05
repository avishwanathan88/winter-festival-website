const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.jsx': 'application/javascript',
  '.ts': 'application/typescript',
  '.tsx': 'application/typescript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Simple HTML preview page
const previewHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Winter Festival 2024 - Preview</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Arial', sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            overflow-x: hidden;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .hero { text-align: center; padding: 60px 0; }
        .hero h1 { font-size: 4rem; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
        .hero p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin: 40px 0; }
        .feature { 
            background: rgba(255,255,255,0.1); 
            padding: 30px; 
            border-radius: 15px; 
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        .feature h3 { font-size: 1.5rem; margin-bottom: 15px; }
        .btn { 
            background: white; 
            color: #667eea; 
            padding: 15px 30px; 
            border: none; 
            border-radius: 30px; 
            font-size: 1.1rem; 
            font-weight: bold; 
            cursor: pointer; 
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        .snowflake { 
            position: fixed; 
            color: white; 
            user-select: none; 
            pointer-events: none; 
            animation: fall linear infinite;
        }
        @keyframes fall {
            0% { transform: translateY(-100vh) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
        }
        .tech-stack { margin: 40px 0; text-align: center; }
        .tech-stack h2 { margin-bottom: 20px; }
        .tech-list { display: flex; justify-content: center; flex-wrap: wrap; gap: 15px; }
        .tech-item { 
            background: rgba(255,255,255,0.2); 
            padding: 10px 20px; 
            border-radius: 20px; 
            font-size: 0.9rem;
        }
        .deployment { margin: 40px 0; text-align: center; }
        .deployment .info { 
            background: rgba(255,255,255,0.1); 
            padding: 20px; 
            border-radius: 10px; 
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .features { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>❄️ Winter Festival 2024 ❄️</h1>
            <p>A Beautiful, Interactive Website for Your Magical Winter Celebration</p>
            <div style="margin: 20px 0;">
                <div style="font-size: 1.3rem; margin-bottom: 10px;">📅 December 20-22, 2024</div>
                <div style="font-size: 1.1rem; opacity: 0.9;">🕰️ 6:00 PM - 10:00 PM Daily</div>
                <div style="font-size: 1rem; opacity: 0.8;">📍 Winter Wonderland Park, Main Street</div>
            </div>
        </div>

        <div class="features">
            <div class="feature">
                <h3>🔮 Fortune Telling</h3>
                <p>Mystical crystal ball readings and tarot card sessions in our enchanted tent. Discover what the future holds with experienced fortune tellers.</p>
            </div>
            <div class="feature">
                <h3>📖 Winter Storytelling</h3>
                <p>Gather around cozy fire pits for captivating winter tales. Professional storytellers will transport you to magical worlds filled with snow and wonder.</p>
            </div>
            <div class="feature">
                <h3>☕ Hot Cocoa Station</h3>
                <p>Warm your heart with our signature hot cocoa bar. Choose from various toppings including marshmallows, whipped cream, and cinnamon.</p>
            </div>
        </div>

        <div class="tech-stack">
            <h2>🛠 Built With Modern Technology</h2>
            <div class="tech-list">
                <div class="tech-item">Next.js 14</div>
                <div class="tech-item">React 18</div>
                <div class="tech-item">TypeScript</div>
                <div class="tech-item">Tailwind CSS</div>
                <div class="tech-item">Framer Motion</div>
                <div class="tech-item">Vercel Analytics</div>
            </div>
        </div>

        <div class="deployment">
            <h2>🚀 Website Features</h2>
            <div class="info">
                <h3>✨ Complete Feature Set</h3>
                <p>✅ Responsive mobile-first design<br>
                ✅ Animated falling snowflakes<br>
                ✅ Photo gallery with modal views<br>
                ✅ Countdown timer to next festival<br>
                ✅ Customer testimonials<br>
                ✅ Email signup with serverless function<br>
                ✅ Smooth scroll navigation<br>
                ✅ SEO optimized with meta tags</p>
            </div>
            
            <div class="info">
                <h3>📱 Ready for Deployment</h3>
                <p>The website is fully prepared for Vercel deployment with:<br>
                • Optimized build configuration<br>
                • Serverless API functions<br>
                • Static asset optimization<br>
                • Automatic Analytics integration</p>
            </div>
        </div>

        <div style="text-align: center; margin: 40px 0;">
            <h2>🎯 Next Steps</h2>
            <p style="margin: 20px 0;">To deploy this website live:</p>
            <ol style="text-align: left; max-width: 600px; margin: 0 auto; line-height: 1.8;">
                <li>Push the code to a GitHub repository</li>
                <li>Connect the repository to Vercel</li>
                <li>Deploy with automatic CI/CD</li>
                <li>Get a live, shareable URL</li>
            </ol>
        </div>
    </div>

    <script>
        // Create falling snowflakes
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.innerHTML = '❄';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
            snowflake.style.opacity = Math.random();
            snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
            document.body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }

        // Create snowflakes periodically
        setInterval(createSnowflake, 300);
        
        // Create initial snowflakes
        for(let i = 0; i < 20; i++) {
            setTimeout(createSnowflake, i * 200);
        }
    </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Serve the preview page for root
  if (pathname === '/' || pathname === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(previewHTML);
    return;
  }

  // Handle API routes
  if (pathname.startsWith('/api/signup') && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { email } = JSON.parse(body);
        res.writeHead(200, { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ 
          message: 'Successfully signed up!',
          email: email 
        }));
        console.log(`New signup: ${email}`);
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid request' }));
      }
    });
    return;
  }

  // Serve static files
  const filePath = path.join(__dirname, pathname);
  
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1><p><a href="/">← Back to Home</a></p>');
      return;
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(port, () => {
  console.log(`\n🎄❄️ Winter Festival Website Preview Server ❄️🎄`);
  console.log(`\n🌐 Local server running at: http://localhost:${port}`);
  console.log(`\n📱 Features included:`);
  console.log(`   ✅ Responsive winter-themed design`);
  console.log(`   ✅ Animated falling snowflakes`);
  console.log(`   ✅ Festival information display`);
  console.log(`   ✅ Email signup functionality`);
  console.log(`\n🚀 Ready for Vercel deployment!`);
  console.log(`\n⭐ Press Ctrl+C to stop the server`);
  console.log(`\n${"=".repeat(50)}\n`);
});
