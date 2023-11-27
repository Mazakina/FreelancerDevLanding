interface TitleAnimationProps {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  length: number
  interval: number
}

export const useTitleAnimation = ({
  text,
  setText,
  length,
  interval,
}: TitleAnimationProps) => {
  const letterArray = ['▒', '▓', '▓', '░', '▐', '<', '>']

  const replaceCharacters = (text: string, revealedIndexes: number[]) => {
    const regex = /./g

    const replacedText = text.replace(regex, (match, index) => {
      if (revealedIndexes.includes(index) && match === text[index]) {
        return match
      }

      const randomIndex = Math.floor(Math.random() * letterArray.length)
      return letterArray[randomIndex]
    })

    return replacedText
  }

  const handleReplace = () => {
    const correctIndexes = Array.from({ length }, (_, index) => index)
    const revealedIndexes: number[] = []

    const replaceInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * correctIndexes.length)
      revealedIndexes.push(correctIndexes[randomIndex])

      const newText = replaceCharacters(text, revealedIndexes)
      setText(newText)

      if (revealedIndexes.length === correctIndexes.length) {
        clearInterval(replaceInterval)
        setText(text)
      }
    }, interval)
  }

  return { handleReplace }
}
