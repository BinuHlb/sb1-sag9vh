"use client";

import { ReactNode, useEffect, useState } from "react";
import { AuthContext, authStore } from "@/lib/store/auth-store";

export function Providers({ children }: { children: ReactNode }) {
  const [state, setState] = useState(authStore.getState());

  useEffect(() => {
    const unsubscribe = authStore.subscribe(() => {
      setState(authStore.getState());
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
}