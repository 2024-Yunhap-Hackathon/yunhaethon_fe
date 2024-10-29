import { useQuery } from "@tanstack/react-query";
import { paths } from "../constants";
import { instance } from "../apis";

export const Onboard = () => {
  const { data } = useQuery({
    queryKey: [paths.home],
    queryFn: async () => await instance.get(`${paths.home}/test`),
    select: (res) => res?.data,
  });

  console.log(data);

  return <div>board</div>;
};
