import { useContext } from "react";
import useApi from "./fetchData";
import { useQuery } from "@tanstack/react-query";

export const useTopics = () => {
  const { getRequest } = useApi();

  const fetchAllClients = async () => {
    try {
      const response = await getRequest("topics");
      return response.data;
    } catch (error) {
      throw new Error("Something went wrong getting Topics");
    }
  };

  const { data, isLoading, error } = useQuery(["topics"], fetchAllClients);

  return { data, isLoading, error };
};
