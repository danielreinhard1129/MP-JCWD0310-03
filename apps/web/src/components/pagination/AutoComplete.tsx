"use client";

// import useGetEvents from "@/hooks/api/events/useGetEvents";
import useGetEventsPagination from "@/hooks/api/events/useGetPagination";
import { appConfig } from "@/utils/config";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import { debounce } from "lodash";

interface EventOption {
  value: number;
  label: string;
}

const AutoComplete = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useGetEventsPagination({ search });

  const loadOptions = (
    inputValue: string,
    callback: (options: EventOption[]) => void,
  ) => {
    try {
      const options = data.map((event) => {
        return {
          label: event.title,
          value: event.id,
        };
      });
      callback(options);
      setSearch(inputValue);
    } catch (error) {
      callback([]);
    }
  };

  const debouncedLoadOptions = debounce(loadOptions, 750);

  return (
    <AsyncSelect
      placeholder="Search For Event"
      className="mx-auto my-4 max-w-[1050px]"
      loadOptions={debouncedLoadOptions}
      isLoading={isLoading}
      onChange={(event) => {
        router.push(appConfig.baseUrlNext + `/event/${event?.value}`);
      }}
    />
  );
};

export default AutoComplete;
