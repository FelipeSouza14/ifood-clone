import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { RestaurantItem } from "./horizontal";

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export function Restaurants() {
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
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem item={item} />}
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}