import React, { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { use } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return (
    <>
    <Stack screenOptions={{headerShown:false}}/>
      {isLogIn ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
};

export default RootLayout;
