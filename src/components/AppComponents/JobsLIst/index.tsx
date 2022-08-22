import { IJobs } from "../../../interfaces/IJobs"
import { AppJobsCard } from "./JobsCard"
import { Flat } from "./styles"


export const AppJobsList = () => {
    const data: IJobs[] = [
        {id: 1, name: 'marcenaria'},
        {id: 2, name: 'marcenaria'},
        {id: 3, name: 'marcenaria'},
        {id: 4, name: 'marcenaria'},
        {id: 5, name: 'marcenaria'},
        {id: 6, name: 'marcenaria'},
        {id: 7, name: 'marcenaria'},
        {id: 8, name: 'marcenaria'},
    ]
    return (
        <Flat
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <AppJobsCard job={item}/>
          )}
        />
    )
}