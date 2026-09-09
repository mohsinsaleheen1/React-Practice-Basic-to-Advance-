import { create } from "zustand";
interface counterState{
    count:number,
    increment:()=>void;
    decrement:()=>void;
    incrementByAmount:(amount:number)=>void;
    reset:()=>void;
}
export const useCounterStore = create<counterState>((set)=>({
    count:0,
    increment:()=>set((state)=>({count:state.count+1})),
    decrement:()=>set((state)=>({count:state.count-1})),
    incrementByAmount: (amount: number) => 
    set((state) => ({ count: state.count + amount })),
    reset: () => set({ count: 0 }),
}))