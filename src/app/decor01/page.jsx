"use client"
import React from 'react'
import HeroSection01 from '../components/HeroSection/HeroSection01'
import Feature01 from './../components/Feature/Feature01';
import Feature02 from './../components/Feature/Feature02';
import Feature03 from './../components/Feature/Feature03';
import Card01 from './../components/Cards/Card01';
import Counter01 from './../components/Counter/Counter01';
import Counter02 from './../components/Counter/Counter02';
import Counter03 from './../components/Counter/Counter03';

const page = () => {
  const [datas, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/data`);
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const val = await res.json();
        console.log("Fetched data:", val);
        setData(val);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err); // Log the error
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(datas);

  return (
    <div className='text-black'>
        <HeroSection01/>
        <Feature01/>
        <Feature02/>
        <Feature03/>
        <Card01/>
        <Counter01/>
        <Counter02/>
        <Counter03/>

        
    </div>
  );
};

export default page;
