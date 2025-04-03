if (typeof window !== "undefined") {
  if (!window.addEventListener) {
    window.addEventListener = () => {};
  }
  if (!window.removeEventListener) {
    window.removeEventListener = () => {};
  }
}

import React, { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { storage } from "../utils/utils";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const access_token = storage.getString("access_token")

  useEffect(() => {
    SplashScreen.hideAsync();
    
  }, []);

  useEffect(()=>{
    console.log(access_token)
    if(access_token){
      setIsLogIn(true)
    }
  },[access_token])
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogIn ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
};

export default RootLayout;
