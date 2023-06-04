import './Homepage.css'
import Features from '../Features/Features'

const Homepage = () => {
    return (
<>
        <div className='homepage__main'>
            <div className='homepage__container'>
                <img className='homepage__image' src="https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzayUyMHNldHVwfGVufDB8fDB8fHww&w=1000&q=80" alt="" />

            </div>
            
            <div className='position'>
                  <div>
                    <h2 className='heading'>
                        Your Awesome Business Theme
                    </h2>

                  </div>
                  <div>
                  <h4 className='info'> Ut molestias cupiditate veniam repellendus saepe nesciunt. Voluptatum deleniti accusantium minima fugit odio</h4>
                    <h4 className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quis provident itaque quia.</h4>
                    

                  </div>
                  <div>
                    <button className='readmore__btn'>
                        Read More
                    </button>

                  </div>
                </div>
                
        </div>
        <Features/>
        </>
    )

}
export default Homepage