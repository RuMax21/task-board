import { create } from 'zustand';
import type { User } from '@/entities/user/model';
import { persist } from 'zustand/middleware';

interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      user: null,
      setUser: user => set({ user }),
      logout: () => set({ user: null }),
    }),
    { name: 'auth-storage' },
  ),
);
