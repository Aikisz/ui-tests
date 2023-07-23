import {defineConfig} from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      if (config.env.master) {
        return {
          baseUrl: "https://demo.kevin.eu",
          env: {
            env: "master",
            email: "prodEmail@gmail.com",
            amount: "0.05",
          },
        };
      } else
        return {
          baseUrl: "https://demo.kevin.eu",
          env: {
            env: "qa",
            email: "zurkoarturas@gmail.com",
            amount: "0.01",
          },
        };
    },
  },
})
