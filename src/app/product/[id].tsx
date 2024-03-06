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
        <View style={{flex:1}}>
            <Image style={{height:208, width:"100%"}} resizeMode="cover" source={product.cover}></Image>
            <View style={{padding:20, marginTop: 32, flex:1 }}>
                <Text style={{color:"white",fontSize:20, fontWeight:"600", }}>{product.title}</Text>
                
                <Text style={{marginVertical:8, fontWeight:"600", color:"#12a44d",fontSize:24 }}>
                    {format(product.price)}
                </Text>
                <Text style={{color:"white", fontWeight:"400"}}>
                    {product.description}
                </Text>
                {product.ingredients.map((ingredient) => (
                    <Text key={ingredient} style={{color:"#AAA", fontSize:16, fontWeight:"400",lineHeight:24 }}>
                                            
                        {"\u2022"} {ingredient}

                    </Text>
                ))}

                <View style={{padding:20, paddingBottom:32, gap:20}}>
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