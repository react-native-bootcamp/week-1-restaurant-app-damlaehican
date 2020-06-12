import React, { useState, useEffect } from 'react'
import {
	View,
	FlatList,
	StyleSheet,
	Image,
	ActivityIndicator
} from 'react-native'
import data from '../database/data.json'
import RestaurantCard from '../components/RestaurantCard'

const Restaurant = () => {
	const [request, setRequest] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setRequest(true)
		}, 2000)
	})
	return (
		<View style={{
			flex: 1,
		}}>
			{
				request ? (
					<FlatList data={data} renderItem={({ item }) =>
						<RestaurantCard
							name={item.name}
							location={item.location}
							likes={item.likes}
							image={item.image}
							isPopular={item.isPopular} />
					}>
					</FlatList>
				) :
					<View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
						<ActivityIndicator color='red'></ActivityIndicator>
					</View>
			}
		</View>
	)
}
const style = StyleSheet.create({
})
export default Restaurant

