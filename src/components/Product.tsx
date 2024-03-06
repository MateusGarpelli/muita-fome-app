import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { forwardRef } from "react";

type ProductDataProps = {
    title: string;
    description: string;
    thumbnail: ImageProps;
    quantity?: number;
}

type ProductProps = TouchableOpacityProps & {
    data: ProductDataProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(({ data, ...rest }, ref) => {
    return (
        <TouchableOpacity
            style={{ width: "100%", flexDirection: "row", alignItems: "center", paddingBottom: 4 }}
            {...rest}
            ref={ref}
        >
            <Image
                source={data.thumbnail}
                style={{ width: 80, height: 80, borderRadius: 8, marginTop:4 }}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical:5}}>
                    <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
                        {data.title}
                    </Text>
                </View>
                
                <Text style={{ color: "#CBD5E0", fontSize: 12, marginVertical:6 }}>
                    {data.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
})
