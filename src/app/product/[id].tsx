import { Image, Text, View } from "react-native"
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { format } from "@/utils/functions/format";
import { Button } from "@/components/Button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/LinkButton";
import { useCartStore } from "@/stores/CartStores";
import { Redirect } from "expo-router";

export const Product = () => {
    const { id } = useLocalSearchParams()

    const navigation = useNavigation()


    const cartStore = useCartStore()

    const product = PRODUCTS.find((item) => item.id === id)

    const handleAddToCart = () => {
        if (product) {
            cartStore.add(product)
            console.log(product);
            navigation.goBack() 
        }

    }

    if (!product) {
        return <Redirect href="/" />
    }

    return (
        <View className="flex-1">
            <Image className="w-full  h-52 " resizeMode="cover" source={product.cover}></Image>
            <View className=" p-5 mt-8 flex-1">
                <Text className="text-white text-xl font-heading">{product.title}</Text>
                
                <Text className="text-lime-400 text-2xl font-heading my-2  ">
                    {format(product.price)}
                </Text>
                <Text>
                    {product.description}
                </Text>
                {product.ingredients.map((ingredient) => (
                    <Text key={ingredient} className="text-slate-400 font-body text-base leading-6">

                        {"\u2022"} {ingredient}

                    </Text>
                ))}

                <View className="p-5 pb-8 gap-5">
                    <Button onPress={handleAddToCart}>
                        <Button.Icon>
                            <Feather name="plus-circle" size={20} />
                        </Button.Icon>
                        <Button.Text>Adicionar ao pedido</Button.Text>
                    </Button>
                    <LinkButton title="Voltar ao cardápio" href="/" />
                </View>
            </View>
        </View>
    )
}

export default Product;