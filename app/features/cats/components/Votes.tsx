import React, { useContext, useEffect, useState } from "react";
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
  const [voteCount, setVoteCount] = useState(0);

  const votesPerCat = votes.filter((vote) => vote?.imageId === item.id);
  console.log("votesPerCat ->>", votesPerCat);

  const highestVote = votesPerCat.reduce((max, current) => {
    return current.value > max.value ? current : max;
  }, votesPerCat[0])?.value;

  useEffect(() => {
    scoreTheCat(item, voteCount);
  }, [voteCount]);

  return (
    <View style={catListItemStyles.cardHeader}>
      <View style={catListItemStyles.subHeaderItem}>
        <AntDesignIcon
          name="like1"
          size={40}
          color={colors.white}
          onPress={() => setVoteCount(voteCount + 1)}
        />
        <View style={{ padding: 10 }}>
          <AntDesignIcon
            name="dislike1"
            size={20}
            color={colors.white}
            onPress={() => setVoteCount(voteCount - 1)}
          />
        </View>
      </View>
      <Text style={catListItemStyles.cardScore}>Score: {highestVote}</Text>
    </View>
  );
};
