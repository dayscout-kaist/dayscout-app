import type { RootStackScreenProps } from "@/navigation/types";
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { FoodInfo } from "@/types/food";
// import { ListItem } from 'react-native-elements';

export const TextSearch: React.FC<RootStackScreenProps<"TextSearch">> = ({ navigation }) => {
  // return (
  //   <View>
  //     <Text>TextSearch</Text>
  //     <Button
  //       title="Food Info"
  //       onPress={() => navigation.navigate("FoodInfo")}
  //     />
  //   </View>
  // );
  const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([
        {
            productName: '액상차_데자와로얄밀크티',
            company: '(주)삼양패키징',
            totalWeight: '500ml'
        },
        {
            productName: '액상차_데자와로얄밀크티',
            company: '옥천농협',
            totalWeight: '240ml'
        }
    ]);

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost/text', { text: searchText });
            if (response.data.results) {
                setResults(response.data.results);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const sampleFoodInfo: FoodInfo = {
        name: "Sample Food",
        category: "Sample Category",
        manufacturer: "Sample Manufacturer",
        content: {
            totalWeight: 400,
            unit: {
                type: "absolute"
            }, // 가정: Unit 타입이 "g" 또는 "ml" 중 하나라고 가정합니다.
            primaryUnit: "g",
            nutrients: {
                carbohydrate: 30,
                protein: 10,
                fat: 5,
                sugar: 10
            }
        }
    };
    
    return (
        <View>
            <TextInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Enter search text"
            />
            <Button 
                title="Search" 
                // onPress={handleSearch} 
                onPress={() => {navigation.navigate("FoodInfo", {foodInfo: sampleFoodInfo});}}
            />

            {results.map((result, index) => {
                const nameParts = result.productName.split('_');
                const represent = nameParts[0];
                const name = nameParts.slice(1).join('_');

                return (
                    null
                    // <ListItem key={index} onPress={() => navigation.navigate("FoodInfo")}>
                    //     <ListItem.Content>
                    //         <ListItem.Title>{name}</ListItem.Title>
                    //         <ListItem.Subtitle>{result.company}</ListItem.Subtitle>
                    //         <ListItem.Subtitle>{represent}</ListItem.Subtitle>
                    //         <ListItem.Subtitle>{result.totalWeight}</ListItem.Subtitle>
                    //     </ListItem.Content>
                    // </ListItem>
                );
            })}
        </View>
    );
};

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import axios from 'axios';
// import type { RootStackScreenProps } from "@/navigation/types";
// import { ListItem } from 'react-native-elements';

// export const ImageSearch: React.FC<RootStackScreenProps<"TextSearch">> = ({navigation}) => {
//     const [searchText, setSearchText] = useState('');
//     const [results, setResults] = useState([
//         {
//             productName: '액상차_데자와로얄밀크티',
//             company: '(주)삼양패키징',
//             totalWeight: '500ml'
//         },
//         {
//             productName: '액상차_데자와로얄밀크티',
//             company: '옥천농협',
//             totalWeight: '240ml'
//         }
//     ]);

//     const handleSearch = async () => {
//         try {
//             const response = await axios.post('http://localhost/text', { text: searchText });
//             if (response.data.results) {
//                 setResults(response.data.results);
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return (
//         <View>
//             <TextInput
//                 value={searchText}
//                 onChangeText={setSearchText}
//                 placeholder="Enter search text"
//             />
//             <Button title="Search" onPress={handleSearch} />

//             {results.map((result, index) => {
//                 const nameParts = result.productName.split('_');
//                 const represent = nameParts[0];
//                 const name = nameParts.slice(1).join('_');

//                 return (
//                     <ListItem key={index}>
//                         <ListItem.Content>
//                             <ListItem.Title>{name}</ListItem.Title>
//                             <ListItem.Subtitle>{result.company}</ListItem.Subtitle>
//                             <ListItem.Subtitle>{represent}</ListItem.Subtitle>
//                             <ListItem.Subtitle>{result.totalWeight}</ListItem.Subtitle>
//                         </ListItem.Content>
//                     </ListItem>
//                 );
//             })}
//         </View>
//     );
// }
