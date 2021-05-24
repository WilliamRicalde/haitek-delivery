import Lottie from 'react-lottie'

const Animation = ({ lotti, height, width }) => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <Lottie options={defaultOption} height={height} width={width} />
    </>
  )
}

export default Animation
