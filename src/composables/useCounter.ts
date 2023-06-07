import { ref } from 'vue'

const useCounter = () => {
  const counter = ref(0)
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
