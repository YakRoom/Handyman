import { FC, memo, useEffect, useState } from "react";
import { Input, Button } from "@/components/ui";
import { useUsersControllerUpdateUserInfo } from "@/apis/generated";
import useAuthBasedRedirection from "@/hooks/useAuthBasedRedirection";
import { CreateUserDtoRole } from "@/apis/generated.schemas";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

const NameStep: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useAuthBasedRedirection();
  const { mutate, data } = useUsersControllerUpdateUserInfo();
  const { dispatch } = useAppContext();
  const router = useRouter();
  useEffect(() => {
    if (data?.firstName) {
      dispatch({
        type: "SET_USER",
        payload: data,
      });
      // router.replace("/auth/policy");
    }
  }, [data]);

  return (
    <div className="bg-gray-50 m-4 rounded-xl p-8 h-full">
      <div className="flex flex-col gap-4 bg-white rounded-xl p-4">
        <div className="text-2xl font-bold">What's your name?</div>
        <Input
          placeholder="First Name"
          className="bg-stone-200 h-11"
          value={firstName}
          onChange={(e) => setFirstName(e?.target?.value)}
        />
        <Input
          placeholder="Last Name"
          className="bg-stone-200 h-11"
          value={lastName}
          onChange={(e) => setLastName(e?.target?.value)}
        />
        <Button
          disabled={!firstName}
          onClick={() => {
            mutate({
              data: {
                firstName,
                lastName,
              },
            });
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default memo(NameStep);
