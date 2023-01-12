import React, { memo } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "~components/Icon";

const Tab = createMaterialBottomTabNavigator();

function Stub() {
  return null;
}

function BottomTabs() {
  return (
    <Tab.Navigator
      labeled={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Calendar") {
            iconName = "calendar";
          } else if (route.name === "Settings") {
            iconName = "settings";
          } else if (route.name === "Notifications") {
            iconName = "bell";
          } else if (route.name === "Search") {
            iconName = "search";
          } else {
            iconName = "" as never;
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
      barStyle={{
        height: 72,
      }}
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
