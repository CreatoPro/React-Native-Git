import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import React from "react";

import { Home, Profile, Search } from "../../screens";

import { COLORS, SIZES, FONTS, constants } from "../../constants";

import { Shadow } from "react-native-shadow-2";


const bottom_tabs = constants.bottom_tabs.map((bottom_tabs) => ({
  ...bottom_tabs,
  ref: React.createRef(),
}));

const TabIndicator = ({ measureLayout, scrollX }) => {
  const inputRange = bottom_tabs.map((_, i) => i * SIZES.width);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.width),
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        left: 0,
        height: "100",
        width: tabIndicatorWidth,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Tabs = ({ scrollX, onBottomTabPress }) => {
  const containerRef = React.useRef();
  const [measureLayout, setMeasureLayout] = React.useState([]);

  React.useEffect(() => {
    let ml = [];
    bottom_tabs.forEach((bottom_tabs) => {
      bottom_tabs?.ref?.current,
        (x, y, width, height) => {
          ml.push({
            x,
            y,
            width,
            height,
          });

          if (ml.length === bottom_tabs.length) {
            setMeasureLayout(ml);
          }
        };
    });
  }, [containerRef.current]);

  return (
    <View
      ref={containerRef}
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}

      {bottom_tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`BottonTab-${index}`}
            ref={item.ref}
            style={{
              flex: 1,
              paddingHorizontal: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => onBottomTabPress(index)}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
            <Text
              style={{ marginTop: 3, color: COLORS.white, ...FONTS.h3 }}
            ></Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainLaylout = () => {
  const flatListRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onBottomTabPress = React.useCallback((bottomTabIndex) => {
    flatListRef?.current?.scrollToOffset({
      offset: bottomTabIndex * SIZES.width,
    });
  });

  function renderContent() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `Main-${item.id}`}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}
              >
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.search && <Search />}
                {item.label == constants.screens.profile && <Profile />}
              </View>
            );
          }}
        />
      </View>
    );
  }

  function renderBottonTab() {
    return (
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
        }}
      >
        <Shadow size={[SIZES.width - SIZES.padding * 2, 85]}>
          <View
            style={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
          >
            <Tabs scrollX={scrollX} onBottomTabPress={onBottomTabPress} />
          </View>
        </Shadow>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderContent()}

      {renderBottonTab()}
    </View>
  );
};

export default MainLaylout;
