import Header from "@/components/Header";
import { Alert, ScrollView, Text, View,Linking } from "react-native";

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

    const [address,setAdress] = useState("")

    const total = format(cartStore.products.reduce((total, product) => total + product.price * 1, 0));


    const handleProductRemove = (product:ProductCartProps) => {
        Alert.alert("Remover", `Deseja remover ${product.title} do carrinho?`, [
            {
                text:"Cancelar"
            } ,
            {
                text: "Remover",
                onPress: () => cartStore.remove(product.id),
            }
        ])
    }


    const handleOrder = () => {
        if (address.trim().length === 0 ) {
            return Alert.alert("pedido", "Informe os dados da entrega.")
        }

        const products = cartStore.products.map((product) => `\n ${product.quantity} ${product.title}`).join("")

    
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

        <View className="flex-1 pt-8">
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={Inter_100Thin}>
                    <Header title="Seu Carrinho" cartQuantity={1} />
                <ScrollView>

                    <View className="p-5 flex-1 ">
                    {cartStore.products.length > 0 ? (
                        <View className="border-b border-slate-700"> 
                            {cartStore.products.map((product) => (
                                <Product key={product.id} data={product} onPress={() => handleProductRemove(product)} />
                            ))}
                        </View>
                    ) : (
                        <Text className="font-body text-slate-400 text-center my-8 ">
                            Seu carrinho está vazio
                        </Text>
                    )}
                    <View className="flex-row gap-2 items-center mt-5 mb-4 ">
                        <Text className="text-white text-xl font-subtitle">Total:</Text>

                        <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
                    </View>

                    <Input placeholder="Informe o endereço de entrega com rua, CEP, Bairro, número e complemento" 
                    onChangeText={setAdress}
                    blurOnSubmit={true}
                    onSubmitEditing={handleOrder}
                    returnKeyType="next"
                    />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
                
                <View className="p-5 gap-5 ">
                    <Button onPress={handleOrder}>
                        <Button.Text>
                            Enviar pedido
                            <Button.Icon>
                                <Feather name="arrow-right-circle" size={20}/>
                            </Button.Icon>
                        </Button.Text>
                    </Button>

                        <LinkButton  title="Voltar ao cardápio" href="/"/>

                </View>

        </View>
    )
}

export default cart;