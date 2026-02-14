const scheduler = require("node-cron");
const axios = require("axios");

const DESIGN_URL = "https://magnetar-finance-designs-production.up.railway.app";
const DEX_API = "https://dex-server-production.up.railway.app/api";

export function keepAlive() {
  scheduler
    .schedule("* * * * *", async () => {
      try {
        const promises = [axios.get(DESIGN_URL), axios.get(DEX_API)];
        await Promise.all(promises);
      } catch (error) {
        console.error(error.stack);
      }
    })
    .start();
}
