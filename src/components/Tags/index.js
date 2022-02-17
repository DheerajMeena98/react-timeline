import './index.css'

const Tags = props => {
  const {eachTag} = props
  return <p className="tag-name"> {eachTag.name} </p>
}

export default Tags
