import Card from './components/Card.jsx';
import './app.css';



function App() {
 const price = [
  {
    title: "FREE",
    price: "0/month",
    feature: [
      { name: "Single User", enabled: true},
      { name: "50GB Storage", enabled: true},
      { name: "Unlimited Public Projects", enabled: true},
      { name: "Community Access", enabled: true},
      { name: "Unlimited Private Projects", enabled: false},
      { name: "Dedicated Phone Support", enabled: false},
      { name: "Free subdomain", enabled: false},
      { name: "Monthly Status Report", enabled: false},
    ],
    buttonlabel: "BUTTON"
  },
  {
    title: "PLUS",
    price: "$9/month",
    feature: [
      { name: "5 Users", enabled: true},
      { name: "50GB Storage", enabled: true},
      { name: "Unlimited Public Projects", enabled: true},
      { name: "Community Access", enabled: true},
      { name: "Unlimited Private Projects", enabled: true},
      { name: "Dedicated Phone Support", enabled: true},
      { name: "Free subdomain", enabled: true},
      { name: "Monthly Status Report", enabled: false},
    ],
    buttonlabel: "BUTTON"
  },
  {
    title: "PLUS",
    price: "$49/month",
    feature: [
      { name: "5 Users", enabled: true},
      { name: "50GB Storage", enabled: true},
      { name: "Unlimited Public Projects", enabled: true},
      { name: "Community Access", enabled: true},
      { name: "Unlimited Private Projects", enabled: true},
      { name: "Dedicated Phone Support", enabled: true},
      { name: "Free subdomain", enabled: true},
      { name: "Monthly Status Report", enabled: true},
    ],
    buttonlabel: "BUTTON"
  },
 ];

  return (
    <div className="App">
      <div className='pricing-container'>
        {price.map((option, index) => (
          <Card 
          key={index}
          title={option.title}
          price={option.price}
          feature={option.feature}
          buttonlabel={option.buttonlabel}
          />
        ))
        }
      </div>
    </div>
  );
}
export default App;

