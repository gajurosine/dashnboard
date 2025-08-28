


    //   const domNode = document.getElementById('demo');
    //   const root = ReactDOM.createRoot(domNode);
    //   root.render(<h1>welcome Rosine BACK </h1>);


      const app = document.getElementById('demo');


        function Headers() {
            return (<h2>welcome back here to learn much fun things</h2>
                
            )
        };

        function Articles(){
            return(
                <div>
                    <h1>My First Component</h1>
         <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>

                </div>
            )
        }


        function Footer(){
            return(<div>
                <p>copyright@2025 by Rosine corporation .all rights reserved</p>
            </div>)
        }



        

       function HomePge() {
        return (
            <div> 
                <Headers />
                <Articles />
                <Footer />
                
            </div>
        )
    }
      const roots = ReactDOM.createRoot(app)
      roots.render(<HomePge />);