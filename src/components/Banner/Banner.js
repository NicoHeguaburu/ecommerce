import banner from '../../Banner1.png'
import './Banner.css'

const Banner = () => {
    return(
        <div>
            <img src={banner} className='banner'></img>
        </div>
    )
}

export default Banner;