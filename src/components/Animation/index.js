import { Player } from '@lottiefiles/react-lottie-player'

const Animation = ({ lotti, height, width }) => {
  return (
    <>
      <Player
        autoplay
        loop
        src={lotti}
        style={{ height: `${height}px`, width: `${width}px` }}
      />
    </>
  )
}

export default Animation
