import {ApolloClient, InMemoryCache} from "@apollo/client";
import {GET_SPACE_MISSION} from "./queries";

export const apolloClient = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
})

// ku e ki perdore, gjeje
 class SpaceX {
    async GetSpaceMission(limit=10){
        try {
            const response = await apolloClient.query({
                query: GET_SPACE_MISSION,
                variables: {limit}
            });

            if (!response || !response.data) throw new Error ("Cannot launch the missions!")
            return response.data.launchesPast
            }catch (err){
                throw(err)
            }
    }
}


export default new SpaceX();