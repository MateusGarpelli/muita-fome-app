import { Image, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";
// daqui pra baixo é chatfpt

type HeaderProps = {
    title: string;
    cartQuantity?: number;
}

export default function Header({ title, cartQuantity = 0 }: HeaderProps) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: colors.slate[700], paddingBottom: 5, marginHorizontal: 5 }}>
            <View style={{ flex: 1 }}>
                <Image source={require("@/assets/logo.png")} style={{ height: 24, width: 128 }} />
                <Text style={{ color: colors.white, fontSize: 20, marginTop: 2 }}>{title}</Text>
            </View>

            <Link href="/product/cart" asChild>
                {cartQuantity === 0 &&
                    <TouchableOpacity style={{ position: "relative", opacity: 0.7 }}>
                        <View style={{ width: 24, height: 24, borderRadius: 8, alignItems: "center", justifyContent: "center", position: "absolute", top: 2, right: 8, flexDirection: "row" }}>
                            <Feather name="shopping-cart" color={colors.white} size={24}></Feather>
                        </View>
                    </TouchableOpacity>
                }
            </Link>
        </View>
    )
}
