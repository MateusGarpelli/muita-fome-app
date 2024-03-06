import { ReactNode } from "react"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
    children: ReactNode
}

type PropsText =  {
    children: ReactNode
}

type PropsIcon =  {
    children: ReactNode
}

export const Button = ({ children, ...rest }: Props) => {
    return (
        <TouchableOpacity style={{height:48, borderRadius:6, alignItems:"center", justifyContent:"center", flexDirection:"row", backgroundColor:"#10ad15"}} activeOpacity={0.7} {...rest}>
            {children} 
        </TouchableOpacity>
    )
}

const ButtonText = ({ children,}: PropsText) => {
    return(
        <Text style={{color:"black", fontWeight:"600", fontSize:16, marginHorizontal:8}}>
            {children}
        </Text>
    )
}

const ButtonIcon= ({ children} : PropsIcon) => {
    return children
}


Button.Text = ButtonText
Button.Icon = ButtonIcon

export {Button} 

