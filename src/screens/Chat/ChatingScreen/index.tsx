import {Text} from 'react-native'
import { ChatType } from '..'

interface ChatingScreenProps {
    route: ChatType['route']
}

export const ChatingScreen = ({route}: ChatingScreenProps) => {
    const {interested} = route.params
    return (
        <Text>{interested.name}</Text>
    )
}