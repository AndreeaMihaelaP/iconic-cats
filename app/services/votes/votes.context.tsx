import React, { useState, createContext, useEffect } from "react";
import { votingRequest, getVotesRequest, VoteResponse } from "./votes.service";
import { CatsDataTransformed } from "~infrastructure/types/interface";
import { catsDataTransform } from "~services/cats/cats.service";

export interface VotesContextType {
  votes: VoteResponse[];
  scoreTheCat: (item: CatsDataTransformed, value: number) => void;
}

interface VotesContextProviderProps {
  children: any;
}

export const VotesContext = createContext<VotesContextType>({
  votes: [],
  scoreTheCat: (item: CatsDataTransformed, value: number) => {},
});

export const VotesContextProvider = ({
  children,
}: VotesContextProviderProps) => {
  const [votes, setVotes] = useState<VoteResponse[]>([]);

  const vote = async (item: CatsDataTransformed, value: number) => {
    try {
      const voteResponse = await votingRequest(item.id, value);
      if (voteResponse.message === "SUCCESS") {
        getVotes();
      }
    } catch (e) {}
  };

  const getVotes = async () => {
    try {
      const votes = await getVotesRequest();
      if (votes.length) {
        setVotes(votes);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getVotes();
  }, []);

  return (
    <VotesContext.Provider
      value={{
        votes,
        scoreTheCat: vote,
      }}>
      {children}
    </VotesContext.Provider>
  );
};
