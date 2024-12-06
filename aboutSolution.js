```javascript
// pages/aboutSolution.js
import { useState, useEffect } from 'react';

export default function About() {
  // Simulate a slow API call
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate a 3-second delay
      setData({ message: 'Data from API' });
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available</p>; // Handle potential errors
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```