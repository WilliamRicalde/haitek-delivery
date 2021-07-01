import { Player } from '@lottiefiles/react-lottie-player'

const Animation = ({ lotti, height, width }) => {
  return (
    <>
      <Player
        autoplay
        loop
        src={lotti}
        height={height}
        width={width}
      />
    </>
  )
}

export default Animation
