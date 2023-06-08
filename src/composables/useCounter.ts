import { ref } from 'vue'

const useCounter = (initialValue: number) => {
  const counter = ref(initialValue)
  const increaseValue = () => {
    counter.value++
  }
  const decreaseValue = () => {
    counter.value--
  }
  const resetCounter = () => {
    counter.value = 0
  }
  return { counter, increaseValue, decreaseValue, resetCounter }
}

export default useCounter
