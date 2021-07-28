import create from 'zustand'

const useStore = create(set => ({
  curSlide: 0,
  actions: {
    changeSlide(goSlide) {
      set((state)=>({
        curSlide: goSlide
      }))
    }
  }
}))

export default useStore