module.exports = {
  apps: [
    {
      name: "projewin-backend",
      cwd: "/var/www/projewin/backend",
      script: "/var/www/projewin/backend/dist/index.js",

      exec_mode: "fork",
      instances: 1,
      watch: false,
      autorestart: true,
      max_memory_restart: "300M",

      env: {
        NODE_ENV: "production",
        PORT: "8089",

        // ✅ Puppeteer/Chromium
        // Sunucunda hangi path varsa onu koy:
        //   which chromium || which chromium-browser || which google-chrome
        // Yaygın default:
        PUPPETEER_EXECUTABLE_PATH: "/snap/bin/chromium",
      },

      out_file: "/var/log/pm2/projewin-backend.out.log",
      error_file: "/var/log/pm2/projewin-backend.err.log",
      combine_logs: true,
      time: true,
    },
  ],
};



