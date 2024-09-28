import React, { useState, createContext, useEffect } from "react";
import { votingRequest, getVotesRequest } from "./votes.service";
import { CatsDataTransformed } from "~infrastructure/types/interface";
import { catsDataTransform } from "~services/cats/cats.service";

export interface VotesContextType {
  votes: CatsDataTransformed[];
  scoreTheCat: (item: CatsDataTransformed, value: number) => void;
}

export const VotesContext = createContext<VotesContextType>({
  votes: [],
  scoreTheCat: (item: CatsDataTransformed, value: number) => {},
});

export const VotesContextProvider = ({ children }) => {
  const [votes, setVotes] = useState<CatsDataTransformed[]>([]);

  const loadVotes = async () => {
    setVotes([]);

    try {
      const fetchedImages = await getVotesRequest();
      const catsTransformed = await catsDataTransform(fetchedImages);

      setVotes(catsTransformed);
    } catch (error) {}
  };

  const vote = async (item: CatsDataTransformed, value: number) => {
    try {
      console.log("HELLLLLO votttteeee", item, value);
      const response = await votingRequest(item.id, value);
      loadVotes();
    } catch (e) {}
  };

  useEffect(() => {
    loadVotes();
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
