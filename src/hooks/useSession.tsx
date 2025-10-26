// "use client";
import { supabase } from "@/lib/supabase/client";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";

const useSession = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      console.log("Current session:", data);
      const session = data.session;
      if (session) {
        const user = session?.user;
        dispatch({
          type: "SET_USER",
          user: { id: user.id, email: user.email || "" },
        });
      }
    };
    getSession();
  }, []);
};

export default useSession;
