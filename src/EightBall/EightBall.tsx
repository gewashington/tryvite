import './EightBall.css'

const EightBall = (props: {children: React.ReactNode}) => {
    return <div className='floating8ball'>{props.children}</div>
}

export default EightBall;