const scheduler = require("node-cron");
const axios = require("axios");

const DESIGN_URL = "https://magnetar-finance-designs.onrender.com";

export function keepAlive() {
  scheduler
    .schedule("* * * * *", async () => {
      try {
        const promises = [axios.get(DESIGN_URL)];
        await Promise.all(promises);
      } catch (error) {
        console.error(error.stack);
      }
    })
    .start();
}
