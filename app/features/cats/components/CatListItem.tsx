import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styled from "styled-components/native";

import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { colors } from "~infrastructure/theme/colors";

import { catListItemStyles } from "./CatListItem.styles";
import { CatsDataTransformed } from "~infrastructure/types/interface";
import { Favourite } from "~features/favorites/components/Favorite";

const defaultImage = require("../../../infrastructure/assets/content-placeholder.png");

interface CatListItemProps {
  item: CatsDataTransformed;
}

export const CatListItem = ({ item }: CatListItemProps) => {
  return (
    <View style={catListItemStyles.card}>
      <View style={catListItemStyles.cardTop}>
        <Favourite item={item} />

        <Image
          alt="Cat"
          resizeMode="cover"
          defaultSource={defaultImage}
          source={{
            uri: item?.url,
          }}
          style={catListItemStyles.cardImg}
        />
      </View>

      <View style={catListItemStyles.cardBody}>
        <View style={catListItemStyles.cardHeader}>
          <View style={catListItemStyles.subHeaderItem}>
            <AntDesignIcon name="like2" size={40} color={colors.white} />
            <View style={{ padding: 10 }}>
              <AntDesignIcon name="dislike2" size={20} color={colors.white} />
            </View>
          </View>
          <Text style={catListItemStyles.cardScore}>Score: 100</Text>
        </View>
        <Text style={catListItemStyles.cardDescription}>
          Cast your vote!!! Only ONE answer is correct!
          MWAHAHAHAHHAHAHAAHAHAHHAHA
        </Text>
      </View>
    </View>
  );
};
