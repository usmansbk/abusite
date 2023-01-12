import React, { memo } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

function Stub() {
  return null;
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Calendar") {
            iconName = "calendar";
          } else if (route.name === "Settings") {
            iconName = focused ? "cog" : "cog-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "bell" : "bell-outline";
          } else if (route.name === "Search") {
            iconName = "magnify";
          } else {
            iconName = "" as never;
          }

          return <MaterialIcon name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Calendar" component={Stub} />
      <Tab.Screen
        name="Search"
        component={Stub}
        options={{
          title: "Explore",
        }}
      />
      <Tab.Screen name="Notifications" component={Stub} />
      <Tab.Screen name="Settings" component={Stub} />
    </Tab.Navigator>
  );
}

export default memo(BottomTabs);
