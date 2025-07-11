import { useQuery } from "@tanstack/react-query";
import type { GetRoomQuestionsResponse } from "./get-room-questions-response";

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ["get-questions", roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3335/rooms/${roomId}/questions`
      );
      const result: GetRoomQuestionsResponse = await response.json();

      return result;
    },
  });
}
