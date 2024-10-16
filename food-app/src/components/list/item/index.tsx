import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsProps } from "..";

export function RestaurantData({ item }: { item: RestaurantsProps }) {
    return (
        <Pressable className="flex flex-row justify-start items-center gap-2 " onPress={() => console.log("CLICOU NO RESTAURANTE" + item.name)}>
            <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-full"
            />
            <View className="flex flex-col gap-2">
                <Text className="text-base text-center leading-4 text-black font-bold" numberOfLines={2}>{item.name}</Text>

                <View className="flex-row items-center gap-2">
                    <Ionicons name="star" size={14} color="#ca8a04" />
                    <Text className="text-sm">4.5</Text>
                </View>
            </View>
        </Pressable>
    );
}
