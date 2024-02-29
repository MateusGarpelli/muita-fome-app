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
        <TouchableOpacity className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row" activeOpacity={0.7} {...rest}>
            {children}
        </TouchableOpacity>
    )
}

const ButtonText = ({ children,}: PropsText) => {
    return(
        <Text className="text-black font-heading text-base mx-2 ">
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

