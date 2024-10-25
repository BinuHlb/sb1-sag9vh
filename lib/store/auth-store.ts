"use client";

import { createContext, useContext } from "react";
import { User } from "@/lib/types";
import * as api from "@/lib/api";

interface AuthState {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  login: async () => {},
  logout: async () => {},
};

export const AuthContext = createContext<AuthState>(initialState);

export function useAuth() {
  return useContext(AuthContext);
}

export class AuthStore {
  private state: AuthState = initialState;
  private listeners: Set<() => void> = new Set();

  getState(): AuthState {
    return this.state;
  }

  private setState(newState: Partial<AuthState>) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  async login(email: string, password: string) {
    this.setState({ loading: true });
    try {
      const response = await api.login({ email, password });
      this.setState({ user: response.data });
    } finally {
      this.setState({ loading: false });
    }
  }

  async logout() {
    this.setState({ loading: true });
    try {
      await api.logout();
      this.setState({ user: null });
    } finally {
      this.setState({ loading: false });
    }
  }
}

export const authStore = new AuthStore();