import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { colors } from "~infrastructure/theme/colors";

import { catListItemStyles } from "./CatListItem.styles";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultImage = require("../../../infrastructure/assets/content-placeholder.png");

export const CatListItem = ({ item }) => {
  const { url, title, isPathway, duration, description } = item;
  console.log("ietm", item);
  return (
    <View>
      <TouchableOpacity>
        <View style={catListItemStyles.card}>
          <View style={catListItemStyles.cardTop}>
            <View style={catListItemStyles.cardHeader}>
              <View style={catListItemStyles.subHeaderItem}>
                <Icon name="heart" size={20} color={colors.dark_gray} />
              </View>

              <Text>you like me - I like you too/ you broke my heart</Text>
            </View>
            <Image
              alt="Cat"
              resizeMode="cover"
              defaultSource={defaultImage}
              source={{ uri: url }}
              style={catListItemStyles.cardImg}
            />
          </View>

          <View style={catListItemStyles.cardBody}>
            <Text style={catListItemStyles.cardTitle}>
              Vote for me!!!! There is only one right answer
            </Text>
            <View style={catListItemStyles.cardHeader}>
              <View style={catListItemStyles.subHeaderItem}>
                <AntDesignIcon
                  name="like1"
                  size={40}
                  color={colors.dark_gray}
                />
              </View>
              <View style={catListItemStyles.subHeaderItem}>
                <AntDesignIcon
                  name="like1"
                  size={40}
                  color={colors.dark_gray}
                />
              </View>
              <View style={catListItemStyles.subHeaderItem}>
                <AntDesignIcon
                  name="like1"
                  size={40}
                  color={colors.dark_gray}
                />
              </View>

              <View style={catListItemStyles.subHeaderItem}>
                <Text style={catListItemStyles.cardTitle}>
                  Cat power score: 0
                </Text>
              </View>
              <View style={catListItemStyles.subHeaderItem}>
                <AntDesignIcon
                  name="dislike1"
                  size={20}
                  color={colors.dark_gray}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
