import { View, Text, FlatList } from "react-native";
import React from "react";
import MassageCard from "./massageCard";


const Chats = () => {
  const data = [
    {
      image: { uri: "https://picsum.photos/seed/1/200/300" },
      name: "Ravi",
      massage: "Hey there!",
      time: "10:15 am",
      massageCount: 2,
    },
    {
      image: { uri: "https://picsum.photos/seed/2/200/300" },
      name: "Aisha",
      massage: "What's up?",
      time: "9:45 am",
      massageCount: 0,
    },
    {
      image: { uri: "https://picsum.photos/seed/3/200/300" },
      name: "Sam",
      massage: "Call me later.",
      time: "1:30 pm",
      massageCount: 1,
    },
    {
      image: { uri: "https://picsum.photos/seed/4/200/300" },
      name: "Kiran",
      massage: "Got your email.",
      time: "11:20 am",
      massageCount: 4,
    },
    {
      image: { uri: "https://picsum.photos/seed/5/200/300" },
      name: "Lina",
      massage: "See you soon!",
      time: "4:05 pm",
      massageCount: 0,
    },
    {
      image: { uri: "https://picsum.photos/seed/6/200/300" },
      name: "John",
      massage: "Thanks!",
      time: "2:45 pm",
      massageCount: 3,
    },
    {
      image: { uri: "https://picsum.photos/seed/7/200/300" },
      name: "Zoya",
      massage: "Let's catch up.",
      time: "12:00 pm",
      massageCount: 5,
    },
    {
      image: { uri: "https://picsum.photos/seed/8/200/300" },
      name: "Amir",
      massage: "All good.",
      time: "6:30 pm",
      massageCount: 1,
    },
    {
      image: { uri: "https://picsum.photos/seed/9/200/300" },
      name: "Priya",
      massage: "Busy right now.",
      time: "8:10 am",
      massageCount: 0,
    },
    {
      image: { uri: "https://picsum.photos/seed/10/200/300" },
      name: "Alex",
      massage: "Talk later!",
      time: "10:50 am",
      massageCount: 2,
    },
    {
      image: { uri: "https://picsum.photos/seed/11/200/300" },
      name: "Maya",
      massage: "Check this out!",
      time: "9:25 pm",
      massageCount: 3,
    },
    {
      image: { uri: "https://picsum.photos/seed/12/200/300" },
      name: "Nikhil",
      massage: "I'll be there.",
      time: "3:15 pm",
      massageCount: 0,
    },
    {
      image: { uri: "https://picsum.photos/seed/13/200/300" },
      name: "Sara",
      massage: "Just woke up.",
      time: "7:00 am",
      massageCount: 1,
    },
    {
      image: { uri: "https://picsum.photos/seed/14/200/300" },
      name: "David",
      massage: "On my way!",
      time: "5:55 pm",
      massageCount: 5,
    },
    {
      image: { uri: "https://picsum.photos/seed/15/200/300" },
      name: "Neha",
      massage: "Can't talk rn.",
      time: "11:45 am",
      massageCount: 2,
    },
  ];
  
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
    
  
        renderItem={({ item }) => (
          <MassageCard
            name={item.name}
            massage={item.massage}
            image={item.image}
            time={item.time}
            massageCount={item.massageCount}
          />
        )}
      />
    </View>
  );
};

export default Chats;
