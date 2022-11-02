import create from 'zustand'

export const useStore = create(set => ({
  datos: {},
  setDatos: (recibido) => set(() => ({ datos: recibido })),
}))