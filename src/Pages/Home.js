import React, { Component } from 'react';
import banner from '../img/banner.jpg';


class home extends Component {
  render(){
    return(
        <div>
        <section id="Showcase" >
          <div className="banner" style={{ height: "300px", backgroundImage: "url(" +  banner + ")", backgroundRepeat: "norepeat" }} > </div>
          <div className="Container">

              <h1> Welcome to the Derby Serenaders </h1>
              <p>
                Derby's Friendliest Showband - Come along and join us!
              </p>
          </div>
        </section>

        <section id="Main">
          <div className="Container">
              <p className="indent">

                  Established in 1936 the Derby Serenaders International Showband have a long history and tradition.
                  We are a open and friendly band who welcome musicians of any and all levels, even if you havent played in
                  a while feel free to come along to one of our practice sessions and play along or just lisen and chat all
                  are welcome and help is on hand to get you back up to speed!

              </p>

              <p className="indent">

                  We practice on a Tuesday night between <i> 7:00 - 9:00 PM </i> in the Church Hall at <i>St. Osmunds Church, London Road, Derby, DE24 8UW </i>.
                  The turn is easy to miss but is opposit Browns Landscaping Centre near the Navigation Inn.

              </p>
          </div>

        </section>
        </div>
    );
  }
}

export default home
