import React, { FunctionComponent, useRef, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ILoan } from '../models/loans';
import { Colors } from '../styles';
import CarouselItem from './CarouselItem';

interface ICarousel {
	items: ILoan[];
	selectedItemChange: Function;
}

const MainCarousel: FunctionComponent<ICarousel> = ({
	items,
	selectedItemChange,
}) => {
	const { width, height } = Dimensions.get('window');
	const carouselRef = useRef(null);
	const [activeSlide, setActiveSlide] = useState(0);
	const [fedeInRight, setFedeInRight] = useState(false);

	const renderItem = ({ item, index }: any) => {
		const active = index === activeSlide;
		return <CarouselItem />;
	};

	const renderPagination = () => {
		return (
			<Pagination
				dotsLength={items.length}
				activeDotIndex={activeSlide}
				containerStyle={{ paddingTop: 20, paddingBottom: 0 }}
				dotStyle={{
					width: 8,
					height: 8,
					borderRadius: 5,
					marginHorizontal: 2,
					backgroundColor: Colors.main,
				}}
				inactiveDotStyle={
					{
						// Define styles for inactive dots here
					}
				}
				inactiveDotOpacity={0.3}
				inactiveDotScale={0.7}
			/>
		);
	};

	return (
		<View>
			<Carousel
				ref={carouselRef}
				data={items}
				renderItem={renderItem}
				sliderWidth={width}
				itemWidth={width}
				onSnapToItem={(index: number) => {
					setFedeInRight(() => {
						return index > activeSlide;
					});
					selectedItemChange(items[index].id);
					setActiveSlide(index);
				}}
			/>
			<View style={styles.carouselBottomBorder} />
			{renderPagination()}
		</View>
	);
};

export default MainCarousel;

const styles = StyleSheet.create({
	carouselBottomBorder: {
		borderColor: Colors.mainOpacity,
		marginTop: 20,
		borderWidth: 0.5,
	},
});
