import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER in the Server-Side
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // : { field: "totalPrice", value: 5000, method: 'gte' };

  // SORT in the Server-Side
  const DEFAULT_SORT = "startDate-desc";
  const sortValue = searchParams.get("sortBy") || DEFAULT_SORT;
  const [field, direction] = sortValue.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], // this part says the react-query to refetch the data if the filter object was changed
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { bookings, isLoading, error, count };
}
