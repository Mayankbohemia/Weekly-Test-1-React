import './Features.css'

const Features = () => {

    return (
        <div className='main__features'>
            <div>
                <h1>Our Features</h1>

            </div>
            <div className='flex__allign'>
            <div className='container__features'>
                <div>
                    <img className='features__image' src="https://cdn-icons-png.flaticon.com/256/10134/10134818.png" alt="" />
                </div>
                <div>
                    <h3>Fully Responsive</h3>

                </div>
                <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis asperiores error unde labore neque nemo laborum magnam culpa. Assumenda placeat, facere praesentium soluta blanditiis fugiat maiores.<br/>
                    <span className='span'>Read More</span> 
                </div>
            </div>
            <div className='container__features'>
                <div>
                    <img className='features__image' src="https://cdn-icons-png.flaticon.com/256/7246/7246434.png" alt="" />
                </div>
                <div>
                    <h3>Fully Responsive</h3>

                </div>
                <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis asperiores error unde labore neque nemo laborum magnam culpa. Assumenda placeat, facere praesentium soluta blanditiis fugiat maiores.<br/>
                    <span className='span'>Read More</span> 
                </div>
            </div>
            <div className='container__features'>
                <div>
                    <img className='features__image' src="https://cdn-icons-png.flaticon.com/128/270/270005.png" alt="" />
                </div>
                <div>
                    <h3>Fully Responsive</h3>

                </div>
                <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis asperiores error unde labore neque nemo laborum magnam culpa. Assumenda placeat, facere praesentium soluta blanditiis fugiat maiores.<br/>
                    <span className='span'>Read More</span> 
                </div>
            </div>
            
            </div>

        </div>
  )

}
export default Features;