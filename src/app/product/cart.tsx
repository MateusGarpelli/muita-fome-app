import Header from "@/components/Header";
import { Alert, ScrollView, Text, View, Linking } from "react-native";

import { Product } from "@/components/Product";

import { ProductCartProps, useCartStore } from "@/stores/CartStores";
import { format } from "@/utils/functions/format";
import { Input } from "@/components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Inter_100Thin } from "@expo-google-fonts/inter";
import { Button } from "@/components/Button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/LinkButton";
import { useState } from "react";
import { useNavigation } from "expo-router";

const PHONE_NUMBER = "5515996030832"

export const cart = () => {
    const cartStore = useCartStore();
    const navigation = useNavigation();

    const [address, setAdress] = useState("")

    const total = format(cartStore.products.reduce((total, product) => total + product.price * 1, 0));


    const handleProductRemove = (product: ProductCartProps) => {
        Alert.alert("Remover", `Deseja remover ${product.title} do carrinho?`, [
            {
                text: "Cancelar"
            },
            {
                text: "Remover",
                onPress: () => cartStore.remove(product.id),
            }
        ])
    }

    const products = cartStore.products.map((product) => `\n 1 ${product.title}`).join("")

    const handleOrder = () => {
        if (address.trim().length === 0) {
            return Alert.alert("pedido", "Informe os dados da entrega.")
        } else if (products.length === 0) {
            return Alert.alert("pedido", "Adicione algum elemento ao carrinho")
        }



        const message = `
        🍔  NOVO PEDIDO
            \n Entregar em ${address}

            ${products}

            \n Valor total: ${total} 
        `
        Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`)

        cartStore.clear()

        navigation.goBack()
    }

    return (

        <View style={{ flex: 1, paddingTop: 32 }}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={Inter_100Thin}>
                <Header title="Seu Carrinho" cartQuantity={1} />
                <ScrollView>
                    <View style={{ padding: 20, flex: 1 }}>
                        {cartStore.products.length > 0 ? (
                        <View style={{ borderBottomWidth:1,borderColor:"#808080" }}>
                            {cartStore.products.map((product) => (
                                <Product key={product.id} data={product} onPress={() => handleProductRemove(product)} />
                            ))}
                        </View>
                        ) : (
                        <Text style={{fontWeight:"400", textAlign:"center", marginVertical:32, color:"#AAA"}} >
                            Seu carrinho está vazio
                        </Text>
                    )}
                        <View style={{flexDirection:"row", gap:8, alignItems:"center", marginTop:20, marginBottom:16}}>
                            <Text style={{color:"white", fontSize:20,fontWeight:"500" }}>Total:</Text>
                            
                            <Text style={{fontWeight:"600", color:"#12a44d",fontSize:24}}>{total}</Text>
                        </View>

                        <Input placeholder="Informe o endereço de entrega com rua, CEP, Bairro, número e complemento"
                            onChangeText={setAdress}
                            onSubmitEditing={handleOrder}
                            returnKeyType="next"
                            style={{height:36, color:"white"}}
                            
                        />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>

            <View style={{padding:20, gap:20}}>
                <Button onPress={handleOrder}>
                    <Button.Text>
                        Enviar pedido
                        <Button.Icon >
                            <Feather name="arrow-right-circle" size={20} style={{}} />
                        </Button.Icon>
                    </Button.Text>
                </Button>

                <LinkButton title="Voltar ao cardápio"  href="/"/>

            </View>

        </View>
    )
}

export default cart;