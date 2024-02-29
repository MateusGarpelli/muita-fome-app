import { Image, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

type HeaderProps = {
    title: string;
    cartQuantity?: number;
}

export default function Header({ title, cartQuantity = 0 }: HeaderProps) {
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
                <Text className="text-white text-xl font-heading mt-2 ">{title}</Text>
            </View>

            <Link href="/product/cart" asChild>
                {cartQuantity === 0 && 
                <TouchableOpacity className="relative " activeOpacity={0.7}>
                    <View className=" w-4 h-4 rounded-full items-center justify-center top-2 z-10 right-4 flex-row    ">
                        <Feather name="shopping-bag" color={colors.white} size={24}></Feather>
                    </View>
                </TouchableOpacity>
                }
            </Link>
        </View>
    )
}