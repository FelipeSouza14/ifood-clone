import { Text, View, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export function Header() {
    return(
        <View className='w-full flex flex-row items-center justify-between'>
            <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                <Ionicons name='menu' size={20}/>
            </Pressable>

            <View className='flex flex-col justify-center items-center'>
                <Text className='text-center text-sm text-slate-600'>Localização</Text>
                <View className='flex flex-row justify-center items-center gap-1'>
                    <Feather name='map-pin' size={20} color={'#FF0000'}/>
                    <Text className='text-lg font-bold'>Caicó</Text>
                </View>
            </View>

            <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                <Feather name='bell' size={20}/>
            </Pressable>
        </View>
    );
} 