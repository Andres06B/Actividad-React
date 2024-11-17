import React from 'react';
import Card from '../components/card';
import '../styles/home.css';

function Home() {
  return (
    <main className="main">
      <h1>CoreSys Developer</h1>
      <br></br>
      <p>We are a team of young systems engineers passionate about technology and committed to innovation. Our company offers comprehensive solutions for large companies in accounting management and administrative systems. Our goal is to help our clients optimize their processes, increase their efficiency and reduce costs.</p>
      <div className="cards-container">
        <Card 
          title="About Us" 
          imageUrl="https://e8cuz2bphm9.exactdn.com/blog/wp-content/uploads/2012/06/como-ser-un-empresario-exitoso.png?strip=all&lossy=1&quality=75&ssl=1" 
          link= '/about'
        />
        <Card 
          title="Our Team" 
          imageUrl="https://www.greatplacetowork.ca/images/Asset_3.webp" 
          link= '/team'
        />
        <Card 
          title="Services" 
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFUwmo2iFs9SRwuWY0c7SuvGCDz3uczfv1w&s" 
          link= '/services'
        />
      </div>
    </main>
  );
}

export default Home;
