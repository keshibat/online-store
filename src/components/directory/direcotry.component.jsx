import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'

const Directory = ({categories}) => {
  return (
        <div className='directory-container'>
      {
        categories.map(({title, id, imageUrl}) => (
          <div key={id} className='directory-container'>
            <CategoryItem key={id} title={title} imageUrl={imageUrl} />
          </div>
        ))
      }
    </div>
  )
}

export default Directory;