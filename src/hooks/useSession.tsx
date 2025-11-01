"use client";
import { supabase } from "@/lib/supabase/client";
import { clearUser, setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";

const useSession = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (session) {
        const user = session?.user;
        dispatch(
          setUser({
            id: user.id,
            email: user.email || "",
          })
        );
      }
    };
    getSession();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        const user = session.user;
        dispatch(
          setUser({
            id: user.id,
            email: user.email || "",
          })
        );
      } else {
        dispatch(clearUser());
      }
    });
    return () => {
      subscription?.unsubscribe();
    };
  }, [dispatch]);
};

export default useSession;
