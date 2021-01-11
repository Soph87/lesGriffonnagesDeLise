import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetUser = () => {
    //const resp = useSWR("/api/user", fetcher);
    //console.log(resp);
    //return { data, error, loading: !data && !error };
};
