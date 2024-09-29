import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" options={{ title: "Welcome" }} />
      <Stack.Screen name="subscribe" options={{ title: "Subscribe" }} />
    </Stack>
  );
}
