import Title from '../components/Title'
import CategoryPage from '../components/CategoryPage'

const Electric = () => {
  return (
    <div className='container'>
      <div>
        <img src="./images/electrics-sub-banner.jpg" alt="" />
      </div>
      <div className="content-inner">
        <Title title="전자기기"/>
        <CategoryPage categoryName="electronics"/>
      </div>
    </div>
  )
}

export default Electric
