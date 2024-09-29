import React, { useContext, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";

import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { colors } from "~infrastructure/theme/colors";

import { catListItemStyles } from "./CatListItem.styles";
import { CatsDataTransformed } from "~infrastructure/types/interface";
import { VotesContext } from "~services/votes/votes.context";

interface CatListItemProps {
  item: CatsDataTransformed;
}

export const Votes = ({ item }: CatListItemProps) => {
  const { votes, scoreTheCat } = useContext(VotesContext);

  const voteUp = () => scoreTheCat(item, 1);
  const voteDown = () => scoreTheCat(item, -1);

  const score = useMemo(
    () =>
      votes.reduce((total, vote) => {
        if (vote?.image_id === item.id) {
          return total + vote.value;
        }
        return total;
      }, 0),
    [item.id, votes]
  );

  return (
    <View style={catListItemStyles.cardHeader}>
      <View style={catListItemStyles.subHeaderItem}>
        <AntDesignIcon
          name="like1"
          size={40}
          color={colors.white}
          onPress={voteUp}
        />
        <View style={{ padding: 10 }}>
          <AntDesignIcon
            name="dislike1"
            size={20}
            color={colors.white}
            onPress={voteDown}
          />
        </View>
      </View>
      <Text style={catListItemStyles.cardScore}>Score: {score} </Text>
    </View>
  );
};
