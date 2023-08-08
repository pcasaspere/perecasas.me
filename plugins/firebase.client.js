import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const app = initializeApp({
    apiKey: "AIzaSyDJUPR1vjLSo44a3R0z8easMRJ_j0Q1U9Y",
    authDomain: "perecasas-me.firebaseapp.com",
    databaseURL: "https://perecasas-me.firebaseio.com",
    projectId: "perecasas-me",
    storageBucket: "perecasas-me.appspot.com",
    messagingSenderId: "290347062616",
    appId: "1:290347062616:web:01ee3e4fceb78ade97812d",
    measurementId: "G-8MP4EK2JES",
  });

  const config = useRuntimeConfig();
  const cookie = useCookie("cookie_consent");

  if (cookie.value?.analytics && config.public.isProduction) {
    console.log(":: load GA4 ::");
    const analytics = getAnalytics(app);
    nuxtApp.provide("analytics", analytics);
  }
});
