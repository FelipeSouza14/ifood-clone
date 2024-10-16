import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { RestaurantData } from "./item";


export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export function RestaurantVerticalList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://10.220.0.7:3000/restaurants");
            const data = await response.json();
            setRestaurants(data);
        }

        getRestaurants();
    }, []);

    return(
        <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
            {restaurants.map((item) => (
                <RestaurantData item={item} key={item.id}/>
            ))}
        </View>
    );
}