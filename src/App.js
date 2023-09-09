import './App.css';
import Card from './componants/Card';
import Data from './componants/Data';

function App() {
  return (

    <>

      <h1>Card Modification (Dynamically) Using React.js</h1>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Card
              img1={Data[0].img}
              title={Data[0].title}
              about={Data[0].about}
              name={Data[0].name}
              age={Data[0].age}
              company={Data[0].company}
              link={Data[0].link}
              other={Data[0].otherlink}
            />
          </div>

          <div className='col-md-6'>
            <Card
              img1={Data[1].img}
              title={Data[1].title}
              about={Data[1].about}
              name={Data[1].name}
              age={Data[1].age}
              company={Data[1].company}
              link={Data[1].link}
              other={Data[1].otherlink}
            />
          </div>
        </div>


        <div className='row'>
          <div className='col-md-6'>
            <Card
              img1={Data[2].img}
              title={Data[2].title}
              about={Data[2].about}
              name={Data[2].name}
              age={Data[2].age}
              company={Data[2].company}
              link={Data[2].link}
              other={Data[2].otherlink}
            />
          </div>

          <div className='col-md-6'>
            <Card
              img1={Data[3].img}
              title={Data[3].title}
              about={Data[3].about}
              name={Data[3].name}
              age={Data[3].age}
              company={Data[3].company}
              link={Data[3].link}
              other={Data[3].otherlink}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <Card
              img1={Data[4].img}
              title={Data[4].title}
              about={Data[4].about}
              name={Data[4].name}
              age={Data[4].age}
              company={Data[4].company}
              link={Data[4].link}
              other={Data[4].otherlink}
            />
          </div>

          <div className='col-md-6'>
            <Card
              img1={Data[5].img}
              title={Data[5].title}
              about={Data[5].about}
              name={Data[5].name}
              age={Data[5].age}
              company={Data[5].company}
              link={Data[5].link}
              other={Data[5].otherlink}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <Card
              img1={Data[6].img}
              title={Data[6].title}
              about={Data[6].about}
              name={Data[6].name}
              age={Data[6].age}
              company={Data[6].company}
              link={Data[6].link}
              other={Data[6].otherlink}
            />
          </div>

          <div className='col-md-6'>
            <Card
              img1={Data[7].img}
              title={Data[7].title}
              about={Data[7].about}
              name={Data[7].name}
              age={Data[7].age}
              company={Data[7].company}
              link={Data[7].link}
              other={Data[7].otherlink}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <Card
              img1={Data[8].img}
              title={Data[8].title}
              about={Data[8].about}
              name={Data[8].name}
              age={Data[8].age}
              company={Data[8].company}
              link={Data[8].link}
              other={Data[8].otherlink}
            />
          </div>

          <div className='col-md-6'>
            <Card
              img1={Data[9].img}
              title={Data[9].title}
              about={Data[9].about}
              name={Data[9].name}
              age={Data[9].age}
              company={Data[9].company}
              link={Data[9].link}
              other={Data[9].otherlink}
            />
          </div>
        </div>
        
      </div>
    </>

  );
}

export default App;
