import { StyledCard } from './styled/Card.styled'

export default function Card({item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}> {/* A conditional statement that depends on the iteration the object is determining already different styles for the result of a true or false */}
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt='' />
      </div>

    </StyledCard>
  )
}
