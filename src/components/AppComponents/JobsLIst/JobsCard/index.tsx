import React from "react"
import {Text} from 'react-native'
import { useTheme } from "styled-components"
import { IJobs } from "../../../../interfaces/IJobs"
import { AppCheckBox } from "../../Inputs/CheckBoxInput"
import { Container } from "./styles"

interface AppJobsCardProps {
    job: IJobs
}

export const AppJobsCard = ({job}: AppJobsCardProps) => {
    const theme = useTheme()
    return (
        <Container>
            <AppCheckBox />
              <Text style={{color: theme.colors.gray_100, fontWeight: '500'}}>{job.name}</Text>
        </Container>
    )
}