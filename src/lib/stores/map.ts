import { create } from 'zustand';

export type ViewState = {
  longitude: number;
  latitude: number;
  zoom: number;
};

type InteractiveMapStore = {
  cycleDestinations: boolean;
  viewState: ViewState;
  setCycleStatus: (cycle: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setViewState: (props: Partial<ViewState>) => void;
};

export const useMapStore = create<InteractiveMapStore>(set => {
  return {
    cycleDestinations: true,
    viewState: {
      longitude: -122.41669,
      latitude: 37.7853,
      zoom: 1.75
    },
    setCycleStatus: (cycle: boolean) => set({ cycleDestinations: cycle }),
    setViewState: (props: Partial<ViewState>) =>
      set(state => ({ viewState: { ...state.viewState, ...props } }))
  };
});
