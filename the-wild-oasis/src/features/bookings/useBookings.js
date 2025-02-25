import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  /* 
    🔍 FILTERING: Extract filter parameters from URL
    - If no filter is selected, fetch all bookings.
    - Otherwise, filter based on selected field (e.g., "status").
  */
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  /* 
    🔄 SORTING: Extract sort criteria from URL
    - Default sort is by "startDate-desc".
    - Split "field-direction" string to get individual values.
  */
  const DEFAULT_SORT = "startDate-desc";
  const sortValue = searchParams.get("sortBy") || DEFAULT_SORT;
  const [field, direction] = sortValue.split("-");
  const sortBy = { field, direction };

  /* 
    📌 PAGINATION: Extract page number from URL
    - Default to page 1 if no page is specified.
  */
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  /* 
    🚀 DATA FETCHING: Fetch bookings from Supabase using react-query
    - React Query automatically caches and updates data when dependencies (queryKey) change.
  */
  const {
    isLoading,
    data: { data: bookings, count } = {}, // Safe destructuring with default values
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], // React Query re-fetches data when key changes `filter`, `sortBy` and `page`
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  /* 
    ⚡ PRE-FETCHING: Improve UX by preloading next page's data
    - If there's a next page, prefetch it in the background.
  */
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { bookings, isLoading, error, count };
}
