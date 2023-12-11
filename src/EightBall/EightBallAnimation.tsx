import './EightBallAnimation.css'

const EightBallAnimation = (props: {children: React.ReactNode}) => {
    return <div className='floating8ball'>{props.children}</div>
}

export default EightBallAnimation;